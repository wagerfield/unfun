import type { List } from "./types"
import { isString } from "./isString"
import { isArray } from "./isArray"

export interface ConcatFunc {
  /**
   * Concatenates two arrays or two strings.
   */
  <T extends unknown[], U extends unknown[]>(
    arr1: [...T],
    arr2: [...U],
  ): [...T, ...U]

  <T extends string, U extends string>(str1: T, str2: U): `${T}${U}`
}

export const concat: ConcatFunc = <T extends List>(a: T, b: T): any => {
  if (isString(a) && isString(b)) return `${a}${b}`
  if (isArray(a) && isArray(b)) return [...a, ...b]

  throw new Error("concat: arguments must be of the same type")
}
