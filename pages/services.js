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
          {/* branding */}
          <div className="w-full mt-10 bg-indigo-500 md:bg-white hover:bg-indigo-600 flex flex-wrap px-4 py-10 text-white md:text-black hover:text-white transition ease-in-out">
            <div className="w-full flex flex-wrap px-4 py-10   max-w-screen-2xl mx-auto">
              <div className="w-full md:w-2/6 font-mulish uppercase text-3xl md:pr-10">
                <h3 className="font-black mb-4">Branding</h3>
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
          {/* Social Media Marketing */}
          <div className="w-full bg-indigo-600 md:bg-black/5 hover:bg-indigo-600 flex flex-wrap px-4 py-10 text-white md:text-black hover:text-white transition ease-in-out">
            <div className="w-full flex flex-wrap px-4 py-10 max-w-screen-2xl mx-auto">
              <div className="w-full md:w-2/6 font-mulish uppercase text-3xl md:pr-10">
                <h3 className="font-black mb-4">Social Media Marketing</h3>
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
          {/* Tech & Developers */}
          <div className="w-full bg-indigo-700 md:bg-white hover:bg-indigo-600 flex flex-wrap px-4 py-10 text-white md:text-black hover:text-white transition ease-in-out">
            <div className="w-full flex flex-wrap px-4 py-10 max-w-screen-2xl mx-auto">
              <div className="w-full md:w-2/6 font-mulish uppercase text-3xl md:pr-10">
                <h3 className="font-black mb-4">Tech & Developers</h3>
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
