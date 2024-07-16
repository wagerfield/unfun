import { curry } from "./curry"

export const min = curry((x: number, y: number) => Math.min(x, y))
