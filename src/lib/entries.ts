import type { Entries } from "./types"

export const entries = <T extends object>(x: T): Entries<T> =>
  Object.entries(x) as Entries<T>
