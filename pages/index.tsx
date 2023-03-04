import Head from "next/head";
import { Suspense } from "react";
import dynamic from "next/dynamic";

// const SynthWrapper = dynamic(
//   () => import("../src/components/synth/SynthWrapper"),
//   {
//     ssr: false,
//   }
// );
const Machine = dynamic(() => import("../src/components/machine/MachineView"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Synth App</title>
      </Head>
      <div className="flex justify-around">
        <h1>Synth App</h1>
      </div>
      {/* <Suspense> */}
      {/*   <SynthWrapper /> */}
      {/* </Suspense> */}
      <Suspense>
        <Machine></Machine>
      </Suspense>
    </>
  );
}
