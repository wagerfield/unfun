import { expect, it } from "vitest"
import { identity } from "unfun"

it("should return primitive values", () => {
  expect(identity("abc")).toBe("abc")
  expect(identity(false)).toBe(false)
  expect(identity(true)).toBe(true)
  expect(identity(null)).toBe(null)
  expect(identity(123)).toBe(123)
})

it("should return objects by reference", () => {
  const obj = { foo: "bar" }
  const arr = [1, 2, 3]
  const fn = () => "baz"

  expect(identity(obj)).toBe(obj)
  expect(identity(arr)).toBe(arr)
  expect(identity(fn)).toBe(fn)
})
