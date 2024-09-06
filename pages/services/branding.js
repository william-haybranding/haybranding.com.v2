import Image from "next/image";
import { Inter } from "next/font/google";
import ServiceTabs from "@/components/tabs";
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
        title="Hay Branding - Branding"
        description="At Hay Branding, we craft compelling brand stories designed to
            elevate your brand in today’s competitive market."
      />
      <main className={`w-full flex flex-wrap relative`}>
        <div className="relative w-full">
          <Title title="Branding" phrase="" />
        </div>
        <div className="relative w-full  flex flex-wrap">
          <div className="text-xl w-full max-w-screen-2xl mx-auto p-4">
            At Hay Branding, we craft compelling brand stories designed to
            elevate your brand in today’s competitive market.
          </div>
          {/* branding */}
          <div className="w-full mt-10 bg-black/5 flex flex-wrap px-4 py-10  md:text-black  transition ease-in-out">
            <div className="w-full flex flex-wrap px-4 py-10   max-w-screen-2xl mx-auto">
              <div className="w-full md:w-2/6 font-mulish uppercase text-3xl md:pr-10">
                {/* <h3 className="font-black mb-4">Branding</h3> */}
                <h4 className="mb-10">Your Brand, Our Strategy</h4>
              </div>
              <div className="w-full md:w-4/6 flex flex-wrap">
                <div className="w-full flex flex-wrap mb-8">
                  <h5 className="w-full md:w-3/6 font-black font-mulish md:text-end md:pr-4 text-xl">
                    Brand Identity & Strategy
                  </h5>
                  <p className="w-full md:w-3/6">
                    We help you define and establish a strong brand identity
                    that resonates with your target audience, combining
                    creativity with strategic insight.
                  </p>
                </div>
                <div className="w-full flex flex-wrap mb-8">
                  <h5 className="w-full md:w-3/6 font-black font-mulish md:text-end md:pr-4 text-xl">
                    Brand Architecture
                  </h5>
                  <p className="w-full md:w-3/6">
                    We structure your brand's hierarchy, ensuring clarity and
                    consistency across all sub-brands and products.
                  </p>
                </div>
                <div className="w-full flex flex-wrap mb-8">
                  <h5 className="w-full md:w-3/6 font-black font-mulish md:text-end md:pr-4 text-xl pr-4">
                    Market Research / Competitive Analysis
                  </h5>
                  <p className="w-full md:w-3/6">
                    Gain insights into your market and competitors, enabling
                    informed decisions that position your brand for success.
                  </p>
                </div>
                <div className="w-full flex flex-wrap mb-8">
                  <h5 className="w-full md:w-3/6 font-black font-mulish md:text-end md:pr-4 text-xl">
                    Brand Position
                  </h5>
                  <p className="w-full md:w-3/6">
                    We identify and establish your brand's unique position in
                    the marketplace, ensuring it stands out and connects with
                    consumers.
                  </p>
                </div>
                <div className="w-full flex flex-wrap mb-8">
                  <h5 className="w-full md:w-3/6 font-black font-mulish md:text-end md:pr-4 text-xl">
                    Visual Identity
                  </h5>
                  <p className="w-full md:w-3/6">
                    Our team creates cohesive visual identities that capture the
                    essence of your brand, from logos to color schemes and
                    typography.
                  </p>
                </div>
                <div className="w-full flex flex-wrap mb-0">
                  <h5 className="w-full md:w-3/6 font-black font-mulish md:text-end md:pr-4 text-xl">
                    Brand Audit
                  </h5>
                  <p className="w-full md:w-3/6">
                    We evaluate your current brand strategy and performance,
                    identifying areas for improvement and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* branding */}
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
