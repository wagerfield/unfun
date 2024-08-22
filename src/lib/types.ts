import type { __ } from "./__"

export type Nil = null | undefined

export type List<T = any> = string | T[]

export type AnyObject = Record<string, any>

export type AnyFunction = (...args: any[]) => any

export type Predicate<T> = (val: T) => boolean

export type Keys<T extends {}> = (keyof T)[]

export type Values<T extends {}> = T[keyof T][]

export type Entries<T extends {}> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]

export type Head<T extends readonly unknown[]> = T extends [
  ...infer U extends [unknown],
  ...unknown[],
]
  ? U
  : never

export type Tail<T extends readonly unknown[]> = T extends [unknown, ...infer U]
  ? U
  : never

export type WithPlaceholder<T extends readonly unknown[]> = {
  [K in keyof T]: T[K] | __
}

export type CurryParameters<T extends readonly unknown[]> = WithPlaceholder<
  [...Head<T>, ...Partial<Tail<T>>]
>
