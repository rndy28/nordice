import * as React from "react";

export function createCtx<A extends {}>() {
  const ctx = React.createContext<A>({} as A);
  function useCtx() {
    const c = React.useContext(ctx);
    if (c === undefined) throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider] as const; // 'as const' makes TypeScript infer a tuple
}
