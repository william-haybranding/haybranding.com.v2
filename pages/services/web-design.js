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
        title="Hay Branding - Tech & Developers"
        description="At Hay Branding, we build innovative digital experiences to help your brand thrive in today’s competitive market."
      />
      <main className={`w-full flex flex-wrap relative`}>
        <div className="relative w-full">
          <Title title="Tech & Developers" phrase="" />
        </div>
        <div className="relative w-full  flex flex-wrap">
          <div className="text-xl w-full max-w-screen-2xl mx-auto p-4">
            At Hay Branding, we build innovative digital experiences to help
            your brand thrive in today’s competitive market.
          </div>

          {/* Tech & Developers */}
          <div className="w-full mt-10 bg-black/5 flex flex-wrap px-4 py-10  md:text-black  transition ease-in-out">
            <div className="w-full flex flex-wrap px-4 py-10 max-w-screen-2xl mx-auto">
              <div className="w-full md:w-2/6 font-mulish uppercase text-3xl md:pr-10">
                {/* <h3 className="font-black mb-4">Tech & Developers</h3> */}
                <h4 className="mb-10">
                  Innovative Solutions for the Digital Age
                </h4>
              </div>
              <div className="w-full md:w-4/6 flex flex-wrap">
                <div className="w-full flex flex-wrap mb-8">
                  <h5 className="w-full md:w-3/6 font-black font-mulish md:text-end md:pr-4 text-xl">
                    User Experience
                  </h5>
                  <p className="w-full md:w-3/6">
                    We design seamless and intuitive user experiences that keep
                    your audience engaged and satisfied.
                  </p>
                </div>
                <div className="w-full flex flex-wrap mb-8">
                  <h5 className="w-full md:w-3/6 font-black font-mulish md:text-end md:pr-4 text-xl">
                    Web Design
                  </h5>
                  <p className="w-full md:w-3/6">
                    Our designs are both aesthetically pleasing and functional,
                    ensuring your website leaves a lasting impression.
                  </p>
                </div>
                <div className="w-full flex flex-wrap mb-8">
                  <h5 className="w-full md:w-3/6 font-black font-mulish md:text-end md:pr-4 text-xl">
                    Web Development
                  </h5>
                  <p className="w-full md:w-3/6">
                    From front-end to back-end, we build robust websites and
                    applications that perform flawlessly.
                  </p>
                </div>
                <div className="w-full flex flex-wrap mb-0">
                  <h5 className="w-full md:w-3/6 font-black font-mulish md:text-end md:pr-4 text-xl">
                    Web Technologies
                  </h5>
                  <p className="w-full md:w-3/6">
                    Stay ahead of the curve with the latest web technologies and
                    innovations integrated into your digital presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Tech & Developers */}
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
