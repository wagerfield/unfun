import { curry } from "./curry"

export const _isEnum = <Enum>(
  enums: Record<string, Enum>,
  value: unknown,
): value is Enum => Object.values(enums).includes(value as Enum)

export const isEnum = curry(_isEnum)
