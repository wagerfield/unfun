import type { Keys } from "./types"

export const keys = <T extends object>(x: T): Keys<T> =>
  Object.keys(x) as Keys<T>
