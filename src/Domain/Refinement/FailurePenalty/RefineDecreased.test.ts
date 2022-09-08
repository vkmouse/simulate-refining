import RefineDecreased from "./RefineDecreased";

test('RefineDecreased 1 level', () => {
  const failurePenalty = new RefineDecreased(1);
  expect(failurePenalty.execute(0)).toBe(0);
  expect(failurePenalty.execute(1)).toBe(0);
  expect(failurePenalty.execute(2)).toBe(1);
  expect(failurePenalty.execute(3)).toBe(2);
  expect(failurePenalty.execute(4)).toBe(3);
  expect(failurePenalty.execute(5)).toBe(4);
  expect(failurePenalty.execute(6)).toBe(5);
  expect(failurePenalty.execute(7)).toBe(6);
  expect(failurePenalty.execute(8)).toBe(7);
  expect(failurePenalty.execute(9)).toBe(8);
  expect(failurePenalty.execute(10)).toBe(9);
  expect(failurePenalty.execute(11)).toBe(10);
  expect(failurePenalty.execute(12)).toBe(11);
  expect(failurePenalty.execute(13)).toBe(12);
  expect(failurePenalty.execute(14)).toBe(13);
  expect(failurePenalty.execute(15)).toBe(14);
  expect(failurePenalty.execute(16)).toBe(15);
  expect(failurePenalty.execute(17)).toBe(16);
  expect(failurePenalty.execute(18)).toBe(17);
  expect(failurePenalty.execute(19)).toBe(18);
});

test('RefineDecreased 3 level', () => {
  const failurePenalty = new RefineDecreased(3);
  expect(failurePenalty.execute(0)).toBe(0);
  expect(failurePenalty.execute(1)).toBe(0);
  expect(failurePenalty.execute(2)).toBe(0);
  expect(failurePenalty.execute(3)).toBe(0);
  expect(failurePenalty.execute(4)).toBe(1);
  expect(failurePenalty.execute(5)).toBe(2);
  expect(failurePenalty.execute(6)).toBe(3);
  expect(failurePenalty.execute(7)).toBe(4);
  expect(failurePenalty.execute(8)).toBe(5);
  expect(failurePenalty.execute(9)).toBe(6);
  expect(failurePenalty.execute(10)).toBe(7);
  expect(failurePenalty.execute(11)).toBe(8);
  expect(failurePenalty.execute(12)).toBe(9);
  expect(failurePenalty.execute(13)).toBe(10);
  expect(failurePenalty.execute(14)).toBe(11);
  expect(failurePenalty.execute(15)).toBe(12);
  expect(failurePenalty.execute(16)).toBe(13);
  expect(failurePenalty.execute(17)).toBe(14);
  expect(failurePenalty.execute(18)).toBe(15);
  expect(failurePenalty.execute(19)).toBe(16);
});
