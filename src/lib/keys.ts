import type { Keys } from "./types"

export const keys = <T extends {}>(obj: T) => Object.keys(obj) as Keys<T>
