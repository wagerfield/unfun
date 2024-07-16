import { curry } from "./curry"

export const max = curry((x: number, y: number) => Math.max(x, y))
