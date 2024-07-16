import type { List } from "./types"
import { isString } from "./isString"
import { isArray } from "./isArray"

export const isList = (val: unknown): val is List =>
  isString(val) || isArray(val)
