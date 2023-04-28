import Head from "next/head";
import Image from "next/image";
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
      <div className="flex flex-row justify-center w-full pt-4 ">
        <div className="flex self-center justify-center w-full text-4xl flex-3 font-sharetech text-emerald">
          <h1>Sequencer</h1>
        </div>
      </div>
      <div className="sm:p-2 md:p-4 lg:px-6 xl:px-12">
        <Suspense>
          <Sequencer />
        </Suspense>
      </div>
      <footer className="flex flex-col items-center w-full h-full pt-8">
        <p className="self-center text-gray-300">
          &#169; <a href="https://raffaelecataldo.com">Raffaele Cataldo</a> 2023
        </p>
        <div className="self-center p-2 w-18 h-18 flex-end">
          <a href="https://github.com/farmeroy/synth-app">
            <Image
              alt="Link to Github"
              width={28}
              height={28}
              src="/github-mark-white.svg"
            />
          </a>
        </div>
      </footer>
    </>
  );
}
