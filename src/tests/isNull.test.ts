import { expect, it } from "vitest"
import { isNull } from "unfun"

it("should return false when the provided value is not null", () => {
  expect(isNull(undefined)).toBe(false)
  expect(isNull("abc")).toBe(false)
  expect(isNull(false)).toBe(false)
  expect(isNull(true)).toBe(false)
  expect(isNull(123)).toBe(false)
  expect(isNull({})).toBe(false)
  expect(isNull([])).toBe(false)
})

it("should return true when the provided value is null", () => {
  expect(isNull(null)).toBe(true)
})
