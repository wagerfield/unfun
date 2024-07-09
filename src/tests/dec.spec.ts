import { expect, it } from "vitest"
import { dec } from "unfun"

it("should decrement a value by 1", () => {
  expect(dec(5)).toBe(4)
  expect(dec(1)).toBe(0)
  expect(dec(0)).toBe(-1)
  expect(dec(-1)).toBe(-2)
})
