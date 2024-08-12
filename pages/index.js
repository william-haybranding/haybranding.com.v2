import Image from "next/image";
import { Inter } from "next/font/google";
import ServiceTabs from "@/components/tabs";
import Layout from "@/components/Layout";
import FlipWordsDemo from "@/components/Phrase";
import VideoHome from "@/components/VideoHome";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main className={`w-full flex flex-wrap p-4 `}>
        <div className="relative w-full max-w-screen-xl mx-auto p-4 flex md:hidden">
          <FlipWordsDemo />
        </div>
        <div className="relative w-full max-w-screen-xl mx-auto p-4 flex ">
          <VideoHome />
        </div>
        <div className="relative w-full max-w-screen-xl mx-auto p-4 flex ">
          <ServiceTabs />
        </div>
      </main>
    </Layout>
  );
}
