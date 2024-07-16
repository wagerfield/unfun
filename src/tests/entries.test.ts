import { expect, it } from "vitest"
import { entries } from "unfun"

it("should return the entries of an object", () => {
  expect(entries({ foo: 1, bar: 2, baz: 3 })).toEqual([
    ["foo", 1],
    ["bar", 2],
    ["baz", 3],
  ])
})

it("should return the entries of an array", () => {
  expect(entries([1, 2, 3])).toEqual([
    ["0", 1],
    ["1", 2],
    ["2", 3],
  ])
})
