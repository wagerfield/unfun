import type { Values } from "./types"

export const values = <T extends object>(x: T): Values<T> => Object.values(x)
