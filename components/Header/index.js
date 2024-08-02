"use client";
import styles from "./style.module.css";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "@/components/Header/Nav";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-wrap w-full uppercase gap-4 z-50">
      <div className="border py-1 px-5 rounded-full border-black font-bold">
        Let's Talk
      </div>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={`${styles.button} text-white z-50`}
      >
        <div className={`${isActive ? "text-white" : "text-black font-bold"}`}>
          Menu
        </div>
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        ></div>
      </div>

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}
