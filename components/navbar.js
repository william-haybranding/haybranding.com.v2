import Header from "@/components/Header/index";
import Phrase from "./Phrase";
import Image from "next/image";
import logo from "@/public/logo-tag-orange.webp";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();

  const isHomePage = router.pathname === "/";

  return (
    <div className="bg-white">
      <div className="w-full max-w-screen-2xl mx-auto p-4 flex flex-wrap justify-between">
        <div>
          <Link href="/">
            <Image src={logo} alt="Logo" className="w-20" layout="fixed" />
          </Link>
        </div>
        {isHomePage && (
          <div className="hidden md:flex">
            <Phrase />
          </div>
        )}
        <div>
          <Header />
        </div>
      </div>
    </div>
  );
}
