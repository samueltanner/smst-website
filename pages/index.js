import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";
import { CutoutShape } from "../components/CutoutShape";
import { InteractiveSubHeader } from "../components/InteractiveSubHeader";
import { useState, useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   console.log("theme", theme);
  // }, [theme]);

  return (
    <div className="default">
      <Header />  
      <div className="h-[400px]">
        {/* <CutoutShape /> */}
        <InteractiveSubHeader />
      </div>

      <div className="flex flex-col text-black "></div>
      <div className="h-screen w-full bg-primary" />
    </div>
  );
}
