"use client";
import styles from "./style.module.css";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "@/components/Header/Nav";
import Link from "next/link";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-wrap w-full uppercase gap-4 z-50">
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={`${
          isActive
            ? "fixed top-10 flex right-10 z-50 text-white text-xl font-thin cursor-pointer"
            : "hidden"
        }`}
      >
        X Close
      </div>
      <div className="border py-1 px-5 rounded-full border-black font-bold">
        <Link href="/contact">Let's Talk</Link>
      </div>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={`${styles.button} text-white z-0`}
      >
        <div
          className={`${
            isActive ? "text-black font-bold" : "text-black font-bold"
          }`}
        >
          Menu
        </div>

        <div className={`${styles.burger} ${isActive ? "" : ""}`}></div>
      </div>

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}
