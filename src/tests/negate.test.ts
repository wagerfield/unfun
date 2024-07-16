import { expect, it } from "vitest"
import { negate } from "unfun"

it("should return negated value", () => {
  expect(negate(0)).toBe(-0)
  expect(negate(1)).toBe(-1)
  expect(negate(-1)).toBe(1)
})
