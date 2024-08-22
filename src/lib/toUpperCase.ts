/**
 * Converts a string to `UPPERCASE`.
 */
export const toUpperCase = <T extends string>(str: T) =>
  str.toUpperCase() as Uppercase<T>

export const toUpper = toUpperCase
