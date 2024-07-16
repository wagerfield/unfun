import type { Nil } from "./types"

export const isNil = (val: unknown): val is Nil => val == null
