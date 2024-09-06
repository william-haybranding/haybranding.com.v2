import Image from "next/image";
import { Inter } from "next/font/google";
import ServiceTabs from "@/components/tabsAlone.js";
import Layout from "@/components/Layout";
import FlipWordsDemo from "@/components/Phrase";
import VideoHome from "@/components/VideoHome";
import Clients from "@/components/Clients";
import Culture from "@/components/Culture";
import Partners from "@/components/Partners";
import Title from "@/components/Title";
import SeoHead from "@/components/SeoHead";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <SeoHead
        title="Hay Branding - Services"
        description="Explore the wide range of services offered by Hay Branding, including Branding, Social Media Marketing, and Tech & Developers solutions tailored to help your business grow."
      />
      <main className={`w-full flex flex-wrap relative`}>
        <div className="relative w-full">
          <Title
            title="Services"
            phrase="End-to-end digital solutions across tech and marketing..."
          />
        </div>
        <div className="relative w-full  flex flex-wrap">
          <div className="text-xl w-full max-w-screen-2xl mx-auto p-4">
            At Hay Branding, we craft compelling brand stories, optimize social
            media presence, and build innovative digital experiences. Explore
            our services designed to elevate your brand in today’s competitive
            market.
          </div>

          <div className="text-xl w-full max-w-screen-2xl mx-auto p-4">
            <ServiceTabs />
          </div>
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
