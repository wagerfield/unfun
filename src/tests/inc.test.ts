import { expect, it } from "vitest"
import { inc } from "unfun"

it("should increment a value by 1", () => {
  expect(inc(0)).toBe(1)
  expect(inc(5)).toBe(6)
  expect(inc(-1)).toBe(0)
  expect(inc(-9)).toBe(-8)
})
