import { expect, it } from "vitest"
import { isList } from "unfun"

it("should return false when the provided value is not an array or string", () => {
  expect(isList(undefined)).toBe(false)
  expect(isList(false)).toBe(false)
  expect(isList(true)).toBe(false)
  expect(isList(null)).toBe(false)
  expect(isList(123)).toBe(false)
  expect(isList({})).toBe(false)
  expect(isList(0)).toBe(false)
})

it("should return true when the provided value is null or undefined", () => {
  expect(isList("abc")).toBe(true)
  expect(isList("")).toBe(true)

  expect(isList([1, 2, 3])).toBe(true)
  expect(isList([])).toBe(true)
})
