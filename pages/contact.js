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
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main className={`w-full flex flex-wrap relative`}>
        <div className="relative w-full">
          <Title title="Contact" phrase="Get in Touch with Us" />
        </div>
        <div className="relative w-full  flex flex-wrap">
          <div className="text-xl w-full max-w-screen-2xl mx-auto p-4">
            At Hay Branding, we’re here to help you transform your brand and
            elevate your digital presence. Whether you have a question, need
            more information about our services, or are ready to start a
            project, we’d love to hear from you!
          </div>
        </div>
        <div className="relative w-full max-w-screen-2xl mx-auto p-4 flex flex-wrap mt-8">
          <div className="w-full md:w-3/6">
            <h4 className="font-mulish text-5xl font-bold mb-8">
              Contact Information
            </h4>
          </div>
          <div className="w-full md:w-3/6 text-xl">
            <h3 className="mb-4 font-mulish font-bold">Email Us</h3>
            <p className="mb-4 text-lg">
              For general inquiries or to learn more about how we can assist
              your brand:
            </p>
            <Link href="mailto:info@haybranding.com" legacyBehavior>
              <a className="text-indigo-600 hover:underline">
                info@haybranding.com
              </a>
            </Link>
            <h3 className="mb-4 font-mulish font-bold mt-10">Call Us</h3>
            <p className="mb-4 text-lg">
              Speak directly with our team to discuss your project needs or
              schedule a consultation:
            </p>
            <Link href="tel:+97141234567" legacyBehavior>
              <a className="text-indigo-600 hover:underline">+971 4 123 4567</a>
            </Link>
            <h3 className="mb-4 font-mulish font-bold mt-10">Visit Us</h3>
            <p className="mb-4 text-lg">
              We’re located in the heart of Dubai and always welcome
              face-to-face meetings:
            </p>
            <p className="text-orange-600">
              Al Barsha Business Centre, Office 501, Dubai, UAE
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
