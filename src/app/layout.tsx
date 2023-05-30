import "./globalCss/globals.css";
import "./globalCss/reset.css";
import "./globalCss/mapbox-gl.css";
import "./globalCss/cluster.css";
import pageStyle from "./page.module.css";
import { Inter } from "next/font/google";
import { Providers } from "./Providers";
import { Metadata } from "next";

// import createEmotionServer from "@emotion/server/create-instance";
// import createEmotionCache from "../utils/createEmotionCache";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Volley Go",
    description: "Where you go for volleyball",
    viewport: {
      width: "device-width",
      viewportFit: "cover",
      initialScale: 1,
      maximumScale: 1,
      userScalable: false,
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/volleyIcon.ico" sizes="any" />
      <body className={`${inter.className} ${pageStyle.bodyLayout}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
