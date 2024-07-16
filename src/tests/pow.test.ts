import { expect, it } from "vitest"
import { pow } from "unfun"

it("should multiply a base value by an exponent and return the result", () => {
  expect(pow(2, 3)).toBe(8)
  expect(pow(-2, 1)).toBe(-2)
})

it("should return a partially applied function", () => {
  const raise2by = pow(2)

  expect(raise2by(2)).toBe(4)
  expect(raise2by(4)).toBe(16)
})
