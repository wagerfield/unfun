import { expect, it } from "vitest"
import { subtract } from "unfun"

it("should subtract two numbers and return the result", () => {
  expect(subtract(5, 2)).toBe(3)
  expect(subtract(2, -2)).toBe(4)
  expect(subtract(-2, 2)).toBe(-4)
})

it("should return a partially applied function", () => {
  const subtractFrom3 = subtract(3)

  expect(subtractFrom3(2)).toBe(1)
  expect(subtractFrom3(-4)).toBe(7)
})
