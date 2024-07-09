import { expect, it } from "vitest"
import { add } from "unfun"

it("should add two numbers and return the result", () => {
  expect(add(1, 2)).toBe(3)
  expect(add(-2, 2)).toBe(0)
})

it("should return a partially applied function", () => {
  const add3 = add(3)

  expect(add3(2)).toBe(5)
  expect(add3(-6)).toBe(-3)
})
