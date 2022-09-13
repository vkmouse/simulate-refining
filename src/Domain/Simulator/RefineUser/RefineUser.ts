import { RefineUserProps } from "../../../Core/Simulator";
import RefineResult from "../RefineResult";
import SingleSampleRefiner from "./SingleSampleRefiner";

class RefineUser {
  private readonly props: RefineUserProps;
  private readonly results: RefineResult[];

  constructor(props: RefineUserProps) {
    this.props = props;
    this.results = RefineResult.createResults(props);
  }

  refine() {
    const singleSampleRefiner = new SingleSampleRefiner(this.props);
    for (let i = 0; i < this.props.numSamples; i++) {
      const currResults = singleSampleRefiner.refine();
      this.combineResults(currResults);
    }
    return this.results.filter(p => p.numSuccess !== 0);
  }

  private combineResults(currResults: RefineResult[]) {
    for (let i = 0; i < currResults.length; i++) {
      const refineLevel = currResults[i].refineLevel;
      this.results[refineLevel].numBlessings += currResults[i].numBlessings;
      this.results[refineLevel].numSuccess += currResults[i].numSuccess;
      this.results[refineLevel].refineTimes += currResults[i].refineTimes;
    }
  }
}

export default RefineUser;