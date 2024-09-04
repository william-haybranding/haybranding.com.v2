import Image from "next/image";
import { Inter } from "next/font/google";
import ServiceTabsInner from "@/components/tabsInner";
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
        title="Hay Branding - About Us"
        description="Learn more about Hay Branding, a leading marketing agency dedicated to transforming brands and empowering growth. Discover our mission, values, and the team behind our success."
      />
      <main className={`w-full flex flex-wrap relative`}>
        <div className="relative w-full">
          <Title
            title="About Us"
            phrase="Transforming Brands, Empowering Growth..."
          />
        </div>
        <div className="relative w-full  flex flex-wrap">
          <div className="text-xl w-full max-w-screen-2xl mx-auto p-4">
            We believe in a collaborative approach, working closely with our
            clients to understand their unique needs and challenges. Our process
            is rooted in research, creativity, and a deep understanding of the
            ever-changing digital landscape. We don’t just create campaigns; we
            build relationships that last, ensuring your brand remains relevant
            and compelling..
          </div>
        </div>
        <div className="relative w-full max-w-screen-2xl mx-auto p-4 flex flex-wrap mt-8">
          <div className="w-full md:w-3/6">
            <h4 className="font-mulish text-5xl font-bold mb-8">Who We Are</h4>
          </div>
          <div className="w-full md:w-3/6 text-xl">
            <p>
              Hay Branding is a dynamic and innovative marketing agency
              committed to elevating brands in today’s fast-paced digital
              landscape. With a passion for creativity and a focus on strategy,
              we bring together a team of experienced professionals dedicated to
              crafting meaningful and impactful brand stories.
            </p>
            <h5 className="mt-8 mb-4 font-mulish text-3xl">Our Mission</h5>
            <p>
              At Hay Branding, our mission is to empower businesses by
              transforming their brand presence into powerful tools for growth
              and success. We believe that a well-crafted brand is more than
              just a logo or a tagline—it's an experience, a promise, and a
              connection with your audience. Our goal is to help you build that
              connection through strategic branding, targeted social media
              marketing, and cutting-edge digital solutions.
            </p>
          </div>
        </div>
        <div className="bg-black/5 w-full mt-8 pb-10">
          <div className="relative w-full max-w-screen-2xl mx-auto p-4 flex flex-wrap z-10 mt-8">
            <div className="w-full md:w-6/6 mb-8">
              <h4 className="font-mulish text-5xl font-bold">What We Do</h4>
              <p className="text-xl mt-4">We specialize in three core areas</p>
            </div>
            <ServiceTabsInner />
          </div>
        </div>
        <div className="relative w-full max-w-screen-2xl mx-auto p-4 flex flex-wrap mt-8">
          <div className="w-full md:w-3/6">
            <h4 className="font-mulish text-5xl font-bold mb-8">
              Our Approach
            </h4>
          </div>
          <div className="w-full md:w-3/6 text-xl">
            <p>
              We believe in a collaborative approach, working closely with our
              clients to understand their unique needs and challenges. Our
              process is rooted in research, creativity, and a deep
              understanding of the ever-changing digital landscape. We don’t
              just create campaigns; we build relationships that last, ensuring
              your brand remains relevant and compelling.
            </p>
          </div>
        </div>
        <div className="relative w-full max-w-screen-2xl mx-auto p-4 flex flex-wrap mt-8">
          <div className="w-full md:w-3/6">
            <h4 className="font-mulish text-5xl font-bold mb-8">
              Why Choose Hay Branding?
            </h4>
          </div>
          <div className="w-full md:w-3/6 text-xl">
            <p>
              Choosing Hay Branding means partnering with a team that is as
              invested in your success as you are. We are dedicated to helping
              your brand thrive, offering personalized solutions that meet your
              specific needs. Let’s work together to create something amazing.
            </p>
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
