import { expect, it } from "vitest"
import { isUndefined } from "./isUndefined"

it("should return false when the provided value is not undefined", () => {
  expect(isUndefined("abc")).toBe(false)
  expect(isUndefined(false)).toBe(false)
  expect(isUndefined(true)).toBe(false)
  expect(isUndefined(null)).toBe(false)
  expect(isUndefined(123)).toBe(false)
  expect(isUndefined({})).toBe(false)
  expect(isUndefined([])).toBe(false)
})

it("should return true when the provided value is undefined", () => {
  expect(isUndefined(undefined)).toBe(true)
})
