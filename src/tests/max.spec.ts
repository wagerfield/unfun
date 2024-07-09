import { expect, it } from "vitest"
import { max } from "unfun"

it("should return the maximum of two numbers", () => {
  expect(max(2, 8)).toBe(8)
  expect(max(-2, -5)).toBe(-2)
})

it("should return a partially applied function", () => {
  const max3 = max(3)

  expect(max3(5)).toBe(5)
  expect(max3(1)).toBe(3)
})
