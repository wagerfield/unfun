import { curry } from "./curry"

export const pow = curry((base: number, exponent: number) => base ** exponent)
