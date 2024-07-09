import { expect, it } from "vitest"
import { min } from "unfun"

it("should return the minimum of two numbers", () => {
  expect(min(2, 8)).toBe(2)
  expect(min(-2, 5)).toBe(-2)
})

it("should return a partially applied function", () => {
  const min3 = min(3)

  expect(min3(5)).toBe(3)
  expect(min3(1)).toBe(1)
})
