// components/Layout.js
import React from "react";
import Navbar from "@/components/navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <header className="relative w-full z-20">
        <Navbar />
      </header>
      <main className="relative w-full z-0">{children}</main>

      <footer className="relative w-full z-0 bg-indigo-600 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
