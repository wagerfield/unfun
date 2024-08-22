import type { Entries } from "./types"

export const entries = <T extends {}>(obj: T) =>
  Object.entries(obj) as Entries<T>

export const toPairs = entries
