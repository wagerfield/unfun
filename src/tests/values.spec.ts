import { expect, it } from "vitest"
import { values } from "unfun"

it("should return the values of an object", () => {
  expect(values({ foo: 1, bar: 2 })).toEqual([1, 2])
})

it("should return the values of an array", () => {
  expect(values([1, 2, 3])).toEqual([1, 2, 3])
})
