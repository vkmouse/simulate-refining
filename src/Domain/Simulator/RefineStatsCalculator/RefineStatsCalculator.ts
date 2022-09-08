import { RefinePriceProps, RefineStatsProps } from "../../../Core/Simulator";
import CostCalculator from "./CostCalculator";
import RefineResult from "../RefineResult";

interface IProps {
  refinePriceProps: RefinePriceProps
  refineResults: RefineResult[]
  numSample: number
}

class RefineStatsCalculator {
  props: IProps;
  length: number;
  costCalculator: CostCalculator;

  constructor(props: IProps) {
    this.props = props;
    this.length = props.refineResults.length;
    this.costCalculator = new CostCalculator(props.refineResults.map(p => p.numSuccess));
  }

  calculateEquipmentCost() {
    const priceList = Array(this.length).fill(0);
    const quantityList = Array(this.length).fill(0);
    const initialCost = this.props.refinePriceProps.equipmentPrice;
    const numSamples = this.props.numSample;
    return this.costCalculator.calculate(priceList, quantityList, initialCost, numSamples);
  }

  calculateMaterialCost() {
    const { refineResults, refinePriceProps } = this.props;
    const priceList = refineResults.map(p => {
      type objectKey = keyof RefinePriceProps;
      const key = p.material.name as objectKey;
      return refinePriceProps[key];
    });
    const quantityList = this.props.refineResults.map(p => p.refineTimes);
    return this.costCalculator.calculate(priceList, quantityList);
  }

  calculateBlessingCost() {
    const priceList = Array(this.length).fill(this.props.refinePriceProps.blessingPrice);
    const quantityList = this.props.refineResults.map(p => p.numBlessings);
    return this.costCalculator.calculate(priceList, quantityList);
  }

  calculateRefineCost() {
    const { refineResults, refinePriceProps } = this.props;
    const { refinePriceBeforeTen, refinePriceAfterTen } = refinePriceProps;
    const priceList = refineResults.map(
      p => p.refineLevel < 10 ? refinePriceBeforeTen : refinePriceAfterTen);
    const quantityList = refineResults.map(p => p.refineTimes);
    return this.costCalculator.calculate(priceList, quantityList);
  }

  calculate(): RefineStatsProps[] {
    const { refineResults } = this.props;
    const equipmentCost = this.calculateEquipmentCost();
    const materialCost = this.calculateMaterialCost();
    const blessingCost = this.calculateBlessingCost();
    const refineCost = this.calculateRefineCost();

    const stats = [];
    for (let i = 0; i < refineResults.length; i++) {
      stats.push({
        cost: equipmentCost[i] + materialCost[i] + blessingCost[i] + refineCost[i],
        numBlessings: refineResults[i].numBlessings,
        numSuccess: refineResults[i].numSuccess,
        refineLevel: refineResults[i].refineLevel,
        refineTimes: refineResults[i].refineTimes
      });
    }
    
    return stats;
  }
}

export default RefineStatsCalculator;
