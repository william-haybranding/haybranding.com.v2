import Header from "@/components/Header/index";
import Phrase from "./Phrase";
import Image from "next/image";
import logo from "@/public/logo-tag-orange.webp";

export default function Navbar() {
  return (
    <div className="bg-white">
      <div className="w-full max-w-screen-2xl mx-auto p-4 flex flex-wrap justify-between">
        <div>
          <Image src={logo} alt="Logo" className="w-20" layout="fixed" />
        </div>
        <div className="hidden md:flex">
          <Phrase />
        </div>

        <div>
          <Header />
        </div>
      </div>
    </div>
  );
}
