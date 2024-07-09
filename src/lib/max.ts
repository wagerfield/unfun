import { curry } from "./curry"

export const max = curry((a: number, b: number) => Math.max(a, b))
