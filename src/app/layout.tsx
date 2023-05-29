import "./css/globals.css";
import "./css/reset.css";
import './css/mapbox-gl.css';
import './css/cluster.css';
import { Inter } from "next/font/google";
import { Providers } from "./Providers";
import { Metadata } from "next";

// import createEmotionServer from "@emotion/server/create-instance";
// import createEmotionCache from "../utils/createEmotionCache";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(
): Promise<Metadata> {

  return {
    title: "Volley Go",
    description: "Where you go for volleyball",
    viewport: {
      width: 'device-width',
      viewportFit:'cover',
      initialScale: 1,
      maximumScale: 1,
      userScalable: false
    }
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bodyLayout`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
