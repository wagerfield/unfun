import { curry } from "./curry"

export const pow = curry((exponent: number, base: number) => base ** exponent)
