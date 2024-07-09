import type { Nil } from "./types"

export const isNil = (x: unknown): x is Nil => x === null || x === undefined
