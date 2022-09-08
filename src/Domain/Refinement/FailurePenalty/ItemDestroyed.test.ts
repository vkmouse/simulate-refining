import ItemDestroyed from "./ItemDestroyed";

test('ItemDestroyed', () => {
  const failurePenalty = new ItemDestroyed();
  expect(failurePenalty.execute(0)).toBe(-1);
  expect(failurePenalty.execute(1)).toBe(-1);
  expect(failurePenalty.execute(2)).toBe(-1);
  expect(failurePenalty.execute(3)).toBe(-1);
  expect(failurePenalty.execute(4)).toBe(-1);
  expect(failurePenalty.execute(5)).toBe(-1);
  expect(failurePenalty.execute(6)).toBe(-1);
  expect(failurePenalty.execute(7)).toBe(-1);
  expect(failurePenalty.execute(8)).toBe(-1);
  expect(failurePenalty.execute(9)).toBe(-1);
  expect(failurePenalty.execute(10)).toBe(-1);
  expect(failurePenalty.execute(11)).toBe(-1);
  expect(failurePenalty.execute(12)).toBe(-1);
  expect(failurePenalty.execute(13)).toBe(-1);
  expect(failurePenalty.execute(14)).toBe(-1);
  expect(failurePenalty.execute(15)).toBe(-1);
  expect(failurePenalty.execute(16)).toBe(-1);
  expect(failurePenalty.execute(17)).toBe(-1);
  expect(failurePenalty.execute(18)).toBe(-1);
  expect(failurePenalty.execute(19)).toBe(-1);
});
