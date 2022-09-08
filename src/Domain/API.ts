import { RefinePriceProps, RefineUserProps } from "../Core/Simulator";
import { RefineMaterialQueryProps, RefineProbabilityQueryProps } from "../Core/Table";
import RefineStatsCalculator from "./Simulator/RefineStatsCalculator/RefineStatsCalculator";
import RefineUser from "./Simulator/RefineUser/RefineUser";
import { query as _queryRefineMaterial, queryByChineseName, queryDistinct } from "./Table/RefineMaterialTable/RefineMaterialTableQuerier";
import { query as _queryRefineProbability } from "./Table/RefineProbabilityTable/RefineProbabilityTableQuerier";

export function queryRefineMaterial(props: RefineMaterialQueryProps) {
  return _queryRefineMaterial(props);
}

export function queryRefineMaterialDistinct(props: RefineMaterialQueryProps) {
  return queryDistinct(props);
}

export function queryRefineMaterialByChineseName(name: string) {
  return queryByChineseName(name);
}

export function queryRefineProbability(props: RefineProbabilityQueryProps) {
  return _queryRefineProbability(props);
}

export function calculateStats(refineUserProps: RefineUserProps, refinePriceProps: RefinePriceProps) {
  const user = new RefineUser(refineUserProps);
  const refineResults = user.refine();
  const calculator = new RefineStatsCalculator({
    refinePriceProps,
    refineResults,
    numSample: refineUserProps.numSamples
  });
  return calculator.calculate();
}