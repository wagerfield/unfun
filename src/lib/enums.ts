import { isNumber } from "./isNumber"
import { values } from "./values"

export function enums<Enum>(enums: Record<string, Enum>): Enum[] {
  const v = values(enums)

  return v.some(isNumber) ? v.filter(isNumber) : v
}
