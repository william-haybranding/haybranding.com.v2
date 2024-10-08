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
import SeoHead from "@/components/SeoHead";
import { Contact } from "lucide-react";
import FormContact from "@/components/FormContact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <SeoHead
        title="Hay Branding - Contact"
        description="Get in touch with Hay Branding. Contact us to discuss your branding and marketing needs or to learn more about how we can help elevate your brand."
      />

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
        <div className="relative w-full max-w-screen-2xl mx-auto flex flex-wrap mt-8 p-4">
          <div className="w-full md:w-3/6 p-0">
            <h4 className="font-mulish text-5xl font-bold mb-8">
              Contact Information
            </h4>
            <h3 className="mb-4 font-mulish font-bold text-xl">Email Us</h3>
            <p className="mb-4 text-lg">
              For general inquiries or to learn more about how we can assist
              your brand:
            </p>
            <Link href="mailto:info@haybranding.com" legacyBehavior>
              <a className="text-indigo-600 hover:underline">
                info@haybranding.com
              </a>
            </Link>
            <h3 className="mb-4 font-mulish font-bold mt-10 text-xl">
              Call Us
            </h3>
            <p className="mb-4 text-lg">
              Speak directly with our team to discuss your project needs or
              schedule a consultation:
            </p>
            <Link href="tel:+971544742119" legacyBehavior>
              <a className="text-indigo-600 hover:underline">
                +971 54 474 2119
              </a>
            </Link>
            <h3 className="mb-4 font-mulish font-bold mt-10 text-xl">
              Visit Us
            </h3>
            <p className="mb-4 text-lg">
              We’re located in the heart of Dubai and always welcome
              face-to-face meetings:
            </p>
            <p className="text-orange-600">
              HAY BRANDING MARKETING SERVICES FZCO <br />
              Ofice 2704A, Tower A, Business Central Towers <br />
              Dubai - UAE
            </p>
          </div>
          <div className="w-full md:w-3/6 text-xl bg-black/5 p-0 rounded-2xl">
            <h4 className="font-mulish text-5xl font-bold mb-8 p-4">
              It will be a pleasure to talk to you.
            </h4>
            <FormContact />
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
