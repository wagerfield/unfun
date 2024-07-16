import { curry } from "./curry"

export const modulo = curry((x: number, y: number) => x % y)
