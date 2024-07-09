import type { AnyFunction, CurriedFunction, RequiredFirstParam } from "./types"

export function curry<F extends AnyFunction>(
  fn: F,
  ...args: Partial<Parameters<F>>
): CurriedFunction<F> {
  return (...nextArgs: RequiredFirstParam<F>) => {
    const allArgs = [...args, ...nextArgs]

    return allArgs.length < fn.length
      ? curry(fn, ...(allArgs as Parameters<F>))
      : fn(...allArgs)
  }
}
