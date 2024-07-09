import { expect, it } from "vitest"
import { isEnum } from "unfun"

enum NumberEnum {
  Foo,
  Bar,
}

enum StringEnum {
  Foo = "foo",
  Bar = "bar",
}

it("should return false when a value that does not match an enum is passed", () => {
  // NumberEnum
  expect(isEnum(NumberEnum, "Foo")).toBe(false)
  expect(isEnum(NumberEnum, "Bar")).toBe(false)
  expect(isEnum(NumberEnum, -1)).toBe(false)
  expect(isEnum(NumberEnum, 2)).toBe(false)

  // StringEnum
  expect(isEnum(StringEnum, "Foo")).toBe(false)
  expect(isEnum(StringEnum, "Bar")).toBe(false)
  expect(isEnum(StringEnum, -1)).toBe(false)
  expect(isEnum(StringEnum, 2)).toBe(false)
})

it("should return true when a value that matches an enum is passed", () => {
  // NumberEnum
  expect(isEnum(NumberEnum, 0)).toBe(true)
  expect(isEnum(NumberEnum, 1)).toBe(true)

  // StringEnum
  expect(isEnum(StringEnum, "foo")).toBe(true)
  expect(isEnum(StringEnum, "bar")).toBe(true)
})

it("should return a partially applied function when only the first enum argument is passed", () => {
  const isNumberEnum = isEnum(NumberEnum)
  const isStringEnum = isEnum(StringEnum)

  expect(isNumberEnum).toBeInstanceOf(Function)
  expect(isStringEnum).toBeInstanceOf(Function)

  expect(isNumberEnum(0)).toBe(true)
  expect(isNumberEnum(1)).toBe(true)
  expect(isNumberEnum(3)).toBe(false)

  expect(isStringEnum("foo")).toBe(true)
  expect(isStringEnum("bar")).toBe(true)
  expect(isStringEnum("baz")).toBe(false)
})
