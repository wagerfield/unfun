import type { AnyObject } from "./types"
import { isArray } from "./isArray"

export const isObject = (val: unknown): val is AnyObject =>
  val != null && typeof val === "object" && !isArray(val)
