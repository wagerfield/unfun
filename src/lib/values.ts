import type { Values } from "./types"

export const values = <T extends {}>(obj: T): Values<T> => Object.values(obj)
