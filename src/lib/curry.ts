import type { AnyFunction, CurryParameters } from "./types"

export function curry<F extends AnyFunction>(
  fn: F,
  ...args: Partial<Parameters<F>>
) {
  return <P extends CurryParameters<Parameters<F>>>(...nextArgs: P) => {
    const allArgs = [...args, ...nextArgs]

    return allArgs.length < fn.length
      ? curry(fn, ...(allArgs as Parameters<F>))
      : fn(...allArgs)
  }
}
