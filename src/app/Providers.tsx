"use client";

import { ThemeProvider } from "@mui/material";
import { theme } from "@/utils/theme";
import createEmotionCache from "@/utils/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();

//TODO: update cache head setting when nextjs support emotion SSR
//目前想到是像styled-components做的一樣作法: 
//https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components
//但是還是等官方解法出來好了

export function Providers({
  children,
  emotionCache = clientSideEmotionCache,
}: {
  children: React.ReactNode;
  emotionCache?: EmotionCache;
}) {
  return (
    <CacheProvider value={emotionCache}> 
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
