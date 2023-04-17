import Head from "next/head";
import { Suspense } from "react";

import dynamic from "next/dynamic";
const Sequencer = dynamic(() => import("./sequencer"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Synth App</title>
      </Head>
      <div className="flex justify-around">
        <h1 className="font-sharetech text-4xl text-emerald">Sequencer</h1>
      </div>
      <div className="p-2">
        <Suspense>
          <Sequencer />
        </Suspense>
      </div>
    </>
  );
}
