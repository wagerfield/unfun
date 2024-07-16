import { expect, it } from "vitest"
import { isObject } from "unfun"

it("should return false when the provided value is not an object", () => {
  expect(isObject("abc")).toBe(false)
  expect(isObject(false)).toBe(false)
  expect(isObject(true)).toBe(false)
  expect(isObject(null)).toBe(false)
  expect(isObject(123)).toBe(false)
  expect(isObject([])).toBe(false)
})

it("should return true when the provided value is an object", () => {
  expect(isObject({ obj: { foo: "bar" }, arr: [1, 2, 3] })).toBe(true)
  expect(isObject({ foo: "bar" })).toBe(true)
  expect(isObject({})).toBe(true)
})
