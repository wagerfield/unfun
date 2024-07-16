import { expect, it } from "vitest"
import { divide } from "unfun"

it("should divide two numbers and return the result", () => {
  expect(divide(6, 2)).toBe(3)
  expect(divide(8, -2)).toBe(-4)
})

it("should return a partially applied function", () => {
  const divide3by = divide(12)

  expect(divide3by(3)).toBe(4)
})
