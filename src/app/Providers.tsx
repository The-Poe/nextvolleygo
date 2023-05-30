"use client";

//TODO: update cache head setting when nextjs support emotion SSR
//目前想到是像styled-components做的一樣作法:
//https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components
//但是還是等官方解法出來好了

export function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
