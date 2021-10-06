import { solution } from "../recursion";

const question = "12345678";
it("length 8 no exception", () => {
  expect(solution(question)).toBe(false);
});

it("length 4 no exception", () => {
  const question = "1233";
  expect(solution(question)).toBe(true);
});

it("length 12 no exception", () => {
  const question = "123412341234";
  expect(solution(question)).toBe(false);
});
