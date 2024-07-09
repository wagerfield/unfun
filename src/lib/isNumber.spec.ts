import { expect, it } from "vitest"
import { isNumber } from "./isNumber"

it("should return false when the provided value is not a number", () => {
  expect(isNumber("abc")).toBe(false)
  expect(isNumber(false)).toBe(false)
  expect(isNumber(true)).toBe(false)
  expect(isNumber(null)).toBe(false)
  expect(isNumber({})).toBe(false)
  expect(isNumber([])).toBe(false)
})

it("should return true when the provided value is a number", () => {
  expect(isNumber(123)).toBe(true)
})
