import type { ArrayLike, Iterator } from "./types"

export function eachBy<T, U>(
  inc: number,
  arr: ArrayLike<T>,
  fn: Iterator<T, U>,
): void {
  for (let i = 0, l = arr.length; i < l; i += inc) fn(arr[i], i, l, arr)
}

export const each = <T, U>(array: ArrayLike<T>, fn: Iterator<T, U>) =>
  eachBy(1, array, fn)
