import { expect, it } from "vitest"
import { keys } from "unfun"

it("should return the keys of an object", () => {
  expect(keys({ foo: 1, bar: 2 })).toEqual(["foo", "bar"])
})

it("should return the keys of an array", () => {
  expect(keys([1, 2, 3])).toEqual(["0", "1", "2"])
})
