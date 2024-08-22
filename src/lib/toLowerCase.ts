/**
 * Converts a string to `lowercase`.
 */
export const toLowerCase = <T extends string>(str: T) =>
  str.toLowerCase() as Lowercase<T>

export const toLower = toLowerCase
