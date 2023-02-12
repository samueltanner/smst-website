import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";
import { CutoutShape } from "../components/CutoutShape";
import { InteractiveSubHeader } from "../components/InteractiveSubHeader";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-[400px]">
        {/* <CutoutShape /> */}
        <InteractiveSubHeader />
      </div>

      <div className="flex flex-col text-black "></div>
      <div className="bg-zinc-900 h-screen w-full" />
    </>
  );
}
