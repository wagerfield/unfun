import type { Predicate } from "./types"

export function partition<T>(fn: Predicate<T>, arr: T[]): [T[], T[]] {
  const left: T[] = []
  const right: T[] = []
  for (const item of arr) {
    if (fn(item)) {
      left.push(item)
    } else {
      right.push(item)
    }
  }
  return [left, right]
}
