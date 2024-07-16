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

export type RequiredFirstParam<Func extends AnyFunction> =
  Parameters<Func> extends [infer Head, ...infer Tail]
    ? [Head, ...Partial<Tail>]
    : []

export type RemainingParams<
  AppliedParams extends any[],
  ExpectedParams extends any[],
> = AppliedParams extends [any, ...infer AppliedTail]
  ? ExpectedParams extends [any, ...infer ExpectedTail]
    ? RemainingParams<AppliedTail, ExpectedTail>
    : []
  : ExpectedParams

export type CurriedFunction<Func extends AnyFunction> = <
  AppliedParams extends RequiredFirstParam<Func>,
  ExpectedParams extends Parameters<Func>,
>(
  ...args: AppliedParams
) => RemainingParams<AppliedParams, ExpectedParams> extends [any, ...any[]]
  ? CurriedFunction<
      (
        ...args: RemainingParams<AppliedParams, ExpectedParams>
      ) => ReturnType<Func>
    >
  : ReturnType<Func>
