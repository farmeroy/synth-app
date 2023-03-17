import Head from "next/head";
import { Suspense } from "react";
import Sequencer from "./sequencer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Synth App</title>
      </Head>
      <div className="flex justify-around">
        <h1>Synth App</h1>
      </div>
      <Suspense>
        <Sequencer />
      </Suspense>
    </>
  );
}
