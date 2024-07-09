import { expect, it } from "vitest"
import { noop } from "./noop"

it("should return undefined", () => {
  expect(noop()).toBeUndefined()
})
