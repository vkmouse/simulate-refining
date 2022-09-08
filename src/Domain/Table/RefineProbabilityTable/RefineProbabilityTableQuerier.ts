import { ProbabilityCategory } from "../../../Core/Core";
import { RefineProbabilityQueryProps } from "../../../Core/Table";
import RefineProbabilityTable from "./RefineProbabilityTable";

export function query(props: RefineProbabilityQueryProps): number {
  const equal = (lhs: RefineProbabilityQueryProps, rhs: RefineProbabilityQueryProps) => {
    return lhs.equipmentCategory === rhs.equipmentCategory && 
           lhs.equipmentLevel === rhs.equipmentLevel &&
           lhs.probabilityCategory === rhs.probabilityCategory &&
           lhs.refineLevel === rhs.refineLevel;
  };

  const weaponRefineEnabled = props.weaponRefineEnabled && 
                              props.refineLevel < 10 && 
                              props.probabilityCategory === ProbabilityCategory.Normal;
  const adjustmentValue = weaponRefineEnabled ? 0.1 : 0;
  
  const adjustProbability = (prob: number, value: number) => {
    return Math.round(Math.min(prob + value, 1) * 100) / 100;
  };

  const data = RefineProbabilityTable.getData();
  const output = data.find(p => equal(p, props));

  if (output === undefined) {
    throw "RefineProbabilityTable query error";
  } else {
    return adjustProbability(output.probability, adjustmentValue);
  }
}
