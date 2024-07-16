import { expect, it } from "vitest"
import { isArray } from "unfun"

it("should return false when the provided value is not an array", () => {
  expect(isArray("abc")).toBe(false)
  expect(isArray(false)).toBe(false)
  expect(isArray(true)).toBe(false)
  expect(isArray(null)).toBe(false)
  expect(isArray(123)).toBe(false)
  expect(isArray({})).toBe(false)
})

it("should return true when the provided value is an array", () => {
  expect(isArray(["a", "b", "c"])).toBe(true)
  expect(isArray([1, 2, 3])).toBe(true)
  expect(isArray([[], []])).toBe(true)
  expect(isArray([])).toBe(true)
})
