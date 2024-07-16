import { expect, it } from "vitest"
import { enums } from "unfun"

enum NumberEnum {
  Foo,
  Bar,
}

enum StringEnum {
  Foo = "foo",
  Bar = "bar",
}

it("should return the enum values of a numeric enum object", () => {
  expect(enums(NumberEnum)).toEqual([0, 1])
})

it("should return the enum values of a string enum object", () => {
  expect(enums(StringEnum)).toEqual(["foo", "bar"])
})
