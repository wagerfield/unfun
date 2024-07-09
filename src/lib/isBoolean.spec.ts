import { expect, it } from "vitest"
import { isBoolean } from "./isBoolean"

it("should return false when the provided value is not a boolean", () => {
  expect(isBoolean("abc")).toBe(false)
  expect(isBoolean(null)).toBe(false)
  expect(isBoolean(123)).toBe(false)
  expect(isBoolean({})).toBe(false)
  expect(isBoolean([])).toBe(false)
})

it("should return true when the provided value is a boolean", () => {
  expect(isBoolean(false)).toBe(true)
  expect(isBoolean(true)).toBe(true)
})
