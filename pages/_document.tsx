import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="twitter:card" content="Synth-App" />
        <meta property="og:title" content="Synth-App" />
        <meta property="og:description" content="Synth-App" />
        <meta property="og:image" content="/synth-app-1.png" />
      </Head>
      <body className="bg-violetdark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
