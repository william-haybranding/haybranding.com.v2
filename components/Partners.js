import { useEffect, useRef } from "react";
import ClientsSwiper from "./Clients/ClientsSwiper";
import Image from "next/image";
import facebook from "@/public/partners/facebook.png";
import google from "@/public/partners/google.png";
import hubspot from "@/public/partners/hubspot.png";
import snapchat from "@/public/partners/snapchat.png";
import tiktok from "@/public/partners/tiktok.png";

export default function Partners() {
  return (
    <div className="relative w-full max-w-screen-2xl mx-auto p-4 flex flex-wrap">
      <div className="w-full md:w-5/5 py-14 text-center md:text-start">
        <h2 className="font-mulish uppercase text-3xl font-black pb-0">
          Our partners
        </h2>
      </div>
      <div className="w-full md:w-5/5 pb-14 gap-20 md:gap-0 flex flex-wrap justify-center md:justify-between items-center">
        <Image src={facebook} alt="facebook" className="w-26 h-auto" />
        <Image src={google} alt="google" className="w-26" />
        <Image src={hubspot} alt="hubspot" className="w-26" />
        <Image src={snapchat} alt="snapchat" className="w-26" />
        <Image src={tiktok} alt="tiktok" className="w-26" />
      </div>
    </div>
  );
}
