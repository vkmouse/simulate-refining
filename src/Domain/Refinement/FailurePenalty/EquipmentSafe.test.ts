import EquipmentSafe from "./EquipmentSafe";

test('EquipmentSafe', () => {
  const failurePenalty = new EquipmentSafe();
  expect(failurePenalty.execute(0)).toBe(0);
  expect(failurePenalty.execute(1)).toBe(1);
  expect(failurePenalty.execute(2)).toBe(2);
  expect(failurePenalty.execute(3)).toBe(3);
  expect(failurePenalty.execute(4)).toBe(4);
  expect(failurePenalty.execute(5)).toBe(5);
  expect(failurePenalty.execute(6)).toBe(6);
  expect(failurePenalty.execute(7)).toBe(7);
  expect(failurePenalty.execute(8)).toBe(8);
  expect(failurePenalty.execute(9)).toBe(9);
  expect(failurePenalty.execute(10)).toBe(10);
  expect(failurePenalty.execute(11)).toBe(11);
  expect(failurePenalty.execute(12)).toBe(12);
  expect(failurePenalty.execute(13)).toBe(13);
  expect(failurePenalty.execute(14)).toBe(14);
  expect(failurePenalty.execute(15)).toBe(15);
  expect(failurePenalty.execute(16)).toBe(16);
  expect(failurePenalty.execute(17)).toBe(17);
  expect(failurePenalty.execute(18)).toBe(18);
  expect(failurePenalty.execute(19)).toBe(19);
});
