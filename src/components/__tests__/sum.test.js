import { sum } from "../sum";

test("Calculate sum of two number", () => {
  const result = sum(3, 4);

  //Assertion
  expect(result).toBe(7);
});
