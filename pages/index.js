import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";
import { CutoutShape } from "../components/CutoutShape";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sam Tanner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="h-[400px] ">
        <CutoutShape />
      </div>

      <div className="flex flex-col text-black ">
        {/* <div className="h-screen w-screen">hey there chicken butt</div> */}
      </div>
      <div className="bg-zinc-900 h-screen w-full" />
    </>
  );
}
