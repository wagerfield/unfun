import { expect, it } from "vitest"
import { isString } from "./isString"

it("should return false when the provided value is not a string", () => {
  expect(isString(false)).toBe(false)
  expect(isString(true)).toBe(false)
  expect(isString(null)).toBe(false)
  expect(isString(123)).toBe(false)
  expect(isString({})).toBe(false)
  expect(isString([])).toBe(false)
})

it("should return true when the provided value is a string", () => {
  expect(isString("abc")).toBe(true)
})
