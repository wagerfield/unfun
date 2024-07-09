import { curry } from "./curry"

export const min = curry((a: number, b: number) => Math.min(a, b))
