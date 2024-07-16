import { expect, it } from "vitest"
import { noop } from "unfun"

it("should return undefined", () => {
  expect(noop()).toBeUndefined()
})
