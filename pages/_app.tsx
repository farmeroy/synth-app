import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <Analytics />
    </RecoilRoot>
  );
}
