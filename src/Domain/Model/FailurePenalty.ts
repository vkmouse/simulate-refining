interface FailurePenalty {
  execute(refiningLevel: number): number;
}

export default FailurePenalty;