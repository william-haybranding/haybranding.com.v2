"use client";

import React, { useState } from "react";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "@/components/Header/anim";
import LinkComponent from "./Link";
import Link from "next/link";
import Curve from "@/components/Header/Curve";

import {
  PiInstagramLogo,
  PiFacebookLogo,
  PiLinkedinLogo,
} from "react-icons/pi";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={`${styles.menu} bg-indigo-700 z-10`}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          {/* <div className={styles.header}>
            <p>Navigation</p>
          </div> */}
          {navItems.map((data, index) => {
            return (
              <LinkComponent
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></LinkComponent>
            );
          })}
        </div>
        <div className={styles.footer}>
          <Link legacyBehavior href="/contact">
            <a className="text-2xl">
              <PiInstagramLogo />
            </a>
          </Link>
          <Link legacyBehavior href="/contact">
            <a className="text-2xl">
              <PiFacebookLogo />
            </a>
          </Link>
          <Link legacyBehavior href="/contact">
            <a className="text-2xl">
              <PiLinkedinLogo />
            </a>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex">
        <Curve />
      </div>
    </motion.div>
  );
}
