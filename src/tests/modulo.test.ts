import { expect, it } from "vitest"
import { modulo } from "unfun"

it("should divide the first value by the second and return the remainder", () => {
  expect(modulo(3, 2)).toBe(1)
  expect(modulo(5, 3)).toBe(2)
  expect(modulo(-17, 5)).toBe(-2)
})

it("should return a partially applied function", () => {
  const modulo9 = modulo(9)

  expect(modulo9(3)).toBe(0)
  expect(modulo9(4)).toBe(1)
  expect(modulo9(5)).toBe(4)
})
