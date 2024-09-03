// components/Layout.js
import React from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import logo from "@/public/logo-tag-orange.webp";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <header className="relative w-full z-20">
        <Navbar />
      </header>
      <main className="relative w-full z-0">{children}</main>

      <footer className="bg-indigo-600 pt-8 md:pt-0">
        <div className="w-full max-w-screen-2xl mx-auto p-4 md:py-8">
          <div className="flex flex-wrap sm:items-center justify-center sm:justify-between">
            <Link
              href="/"
              className="w-full md:w-auto flex flex-wrap items-center justify-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <Image src={logo} alt="Logo" className="w-20" layout="fixed" />
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 justify-center md:justify-end">
              <li>
                <Link href="/services" className="hover:underline me-4 md:me-6">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-white text-center ">
            &copy; {new Date().getFullYear()} Hay Branding
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
