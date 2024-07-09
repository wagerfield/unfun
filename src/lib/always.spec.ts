import { expect, it } from "vitest"
import { always } from "./always"

it("should return primitive values", () => {
  expect(always("abc")()).toBe("abc")
  expect(always(false)()).toBe(false)
  expect(always(true)()).toBe(true)
  expect(always(null)()).toBe(null)
  expect(always(123)()).toBe(123)
})

it("should return objects by reference", () => {
  const obj = { foo: "bar" }
  const arr = [1, 2, 3]
  const fn = () => "baz"

  expect(always(obj)()).toBe(obj)
  expect(always(arr)()).toBe(arr)
  expect(always(fn)()).toBe(fn)
})
