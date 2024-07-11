import type { Iterator } from "./types"
import { each } from "./each"

export function map<T, U>(array: ArrayLike<T>, fn: Iterator<T, U>): U[] {
  const result: U[] = []
  each(array, (item, index, length) => {
    result.push(fn(item, index, length, array))
  })
  return result
}
