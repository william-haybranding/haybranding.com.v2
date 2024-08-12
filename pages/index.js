import Image from "next/image";
import { Inter } from "next/font/google";
import ServiceTabs from "@/components/tabs";
import Layout from "@/components/Layout";
import FlipWordsDemo from "@/components/Phrase";
import VideoHome from "@/components/VideoHome";
import Clients from "@/components/Clients";
import Culture from "@/components/Culture";
import Partners from "@/components/Partners";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main className={`w-full flex flex-wrap `}>
        <div className="relative w-full max-w-screen-2xl mx-auto p-4 flex md:hidden">
          <FlipWordsDemo />
        </div>
        <div className="relative w-full max-w-screen-2xl mx-auto p-4 flex ">
          <VideoHome />
        </div>
        <div className="relative w-full max-w-screen-2xl mx-auto p-4 flex z-10">
          <ServiceTabs />
        </div>
        <div className="relative w-full bg-black flex mt-0 md:-mt-20 z-0">
          <Clients />
        </div>
        <div className="relative w-full max-w-screen-2xl mx-auto p-4 flex ">
          <Culture />
        </div>
        <div className="relative w-full bg-black/5 flex mt-0 z-0">
          <Partners />
        </div>
      </main>
    </Layout>
  );
}
