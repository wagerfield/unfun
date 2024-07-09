import type { AnyObject } from "./types"
import { isArray } from "./isArray"

export const isObject = (x: unknown): x is AnyObject =>
  x != null && typeof x === "object" && !isArray(x)
