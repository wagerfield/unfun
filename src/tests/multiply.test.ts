import { expect, it } from "vitest"
import { multiply } from "unfun"

it("should multiply two numbers and return the result", () => {
  expect(multiply(5, 2)).toBe(10)
  expect(multiply(2, -3)).toBe(-6)
  expect(multiply(-2, -4)).toBe(8)
})

it("should return a partially applied function", () => {
  const multiplyBy3 = multiply(3)

  expect(multiplyBy3(4)).toBe(12)
})
