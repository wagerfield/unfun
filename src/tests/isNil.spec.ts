import { expect, it } from "vitest"
import { isNil } from "unfun"

it("should return false when the provided value is not null or undefined", () => {
  expect(isNil("abc")).toBe(false)
  expect(isNil(false)).toBe(false)
  expect(isNil(true)).toBe(false)
  expect(isNil(123)).toBe(false)
  expect(isNil({})).toBe(false)
  expect(isNil([])).toBe(false)
})

it("should return true when the provided value is null or undefined", () => {
  expect(isNil(undefined)).toBe(true)
  expect(isNil(null)).toBe(true)
})
