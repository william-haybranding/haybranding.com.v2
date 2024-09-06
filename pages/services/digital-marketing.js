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
        title="Hay Branding - Social Media Marketing"
        description="At Hay Branding, we optimize social media presence, ensuring your
            brand stands out in today’s competitive market."
      />
      <main className={`w-full flex flex-wrap relative`}>
        <div className="relative w-full">
          <Title title="Social Media Marketing" phrase="" />
        </div>
        <div className="relative w-full  flex flex-wrap">
          <div className="text-xl w-full max-w-screen-2xl mx-auto p-4">
            At Hay Branding, we optimize social media presence, ensuring your
            brand stands out in today’s competitive market.
          </div>
          {/* Social Media Marketing */}
          <div className="w-full mt-10 bg-black/5 flex flex-wrap px-4 py-10  md:text-black  transition ease-in-out">
            <div className="w-full flex flex-wrap px-4 py-10 max-w-screen-2xl mx-auto">
              <div className="w-full md:w-2/6 font-mulish uppercase text-3xl md:pr-10">
                {/* <h3 className="font-black mb-4">Social Media Marketing</h3> */}
                <h4 className="mb-10">Amplify Your Voice</h4>
              </div>
              <div className="w-full md:w-4/6 flex flex-wrap">
                <div className="w-full flex flex-wrap mb-8">
                  <h5 className="w-full md:w-3/6 font-black font-mulish md:text-end md:pr-4 text-xl">
                    Channel Management
                  </h5>
                  <p className="w-full md:w-3/6">
                    We manage your social media channels to ensure consistent
                    and engaging communication across all platforms.
                  </p>
                </div>
                <div className="w-full flex flex-wrap mb-8">
                  <h5 className="w-full md:w-3/6 font-black font-mulish md:text-end md:pr-4 text-xl">
                    Community Management
                  </h5>
                  <p className="w-full md:w-3/6">
                    Foster a loyal and engaged community around your brand,
                    responding to interactions and cultivating meaningful
                    connections.
                  </p>
                </div>
                <div className="w-full flex flex-wrap mb-8">
                  <h5 className="w-full md:w-3/6 font-black font-mulish md:text-end md:pr-4 text-xl">
                    Influencer Marketing
                  </h5>
                  <p className="w-full md:w-3/6">
                    Partner with the right influencers to expand your reach and
                    build credibility within your industry.
                  </p>
                </div>
                <div className="w-full flex flex-wrap mb-8">
                  <h5 className="w-full md:w-3/6 font-black font-mulish md:text-end md:pr-4 text-xl">
                    Paid Social Media Advertising
                  </h5>
                  <p className="w-full md:w-3/6">
                    Maximize your ROI with targeted paid advertising campaigns
                    that reach the right audience at the right time.
                  </p>
                </div>
                <div className="w-full flex flex-wrap mb-8">
                  <h5 className="w-full md:w-3/6 font-black font-mulish md:text-end md:pr-4 text-xl">
                    Reporting & Analysis
                  </h5>
                  <p className="w-full md:w-3/6">
                    We provide detailed reports and analyses to track the
                    success of your social media efforts and guide future
                    strategies.
                  </p>
                </div>
                <div className="w-full flex flex-wrap mb-0">
                  <h5 className="w-full md:w-3/6 font-black font-mulish md:text-end md:pr-4 text-xl">
                    Content Creation
                  </h5>
                  <p className="w-full md:w-3/6">
                    Our creative team develops high-quality content tailored to
                    your brand’s voice and objectives, from visuals to
                    copywriting.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Social Media Marketing */}
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
