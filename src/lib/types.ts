export type AnyFunction = (...args: any[]) => any

export type Predicate<T> = (value: T) => boolean

export interface Filterable {}

export interface Iterable {}

export interface Functor {}

export interface ArrayLike<T> {
  [index: number]: T
  length: number
}

export type Iterator<T, U> = (
  item: T,
  index: number,
  length: number,
  array: ArrayLike<T>,
) => U

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
