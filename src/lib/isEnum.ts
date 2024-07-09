import { enums as _enums } from "./enums"
import { curry } from "./curry"

export const _isEnum = <Enum>(
  enums: Record<string, Enum>,
  value: unknown,
): value is Enum => _enums(enums).includes(value as Enum)

export const isEnum = curry(_isEnum)
