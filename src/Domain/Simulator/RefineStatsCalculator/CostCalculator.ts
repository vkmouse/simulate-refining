class CostCalculator {
  numSuccessList: number[];

  constructor(numSuccessList: number[]) {
    this.numSuccessList = numSuccessList;
  }

  calculate(priceList: number[], quantityList: number[], initialCost = 0, numSamples = 0): number[] {
    const length = priceList.length;
    const costs = [initialCost].concat(Array(length));
    const numSuccessList = [numSamples].concat(this.numSuccessList);
    priceList = [0].concat(priceList);
    quantityList = [0].concat(quantityList);
    
    for (let i = 1; i < length + 1; i++) {
      costs[i] = 0;
      costs[i] += costs[i - 1] * numSuccessList[i - 1] / numSuccessList[i];
      costs[i] += priceList[i] * (quantityList[i] / numSuccessList[i]);
    }

    return costs.slice(1);
  }
}

export default CostCalculator;
