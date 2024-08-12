import { useEffect, useRef } from "react";
import ClientsSwiper from "./Clients/ClientsSwiper";
import Image from "next/image";
import spin from "@/public/spin.webp";

export default function Culture() {
  return (
    <div className="w-full text-black relative md:pt-20 pb-20 flex flex-wrap">
      <div className="w-full md:w-2/5 py-14 text-center md:text-end">
        <h3 className="uppercase font-bold">Our culture</h3>
        <h2 className="font-mulish uppercase text-3xl font-black pb-0">
          We develop bespoke websites with three things in mind
        </h2>
        <div className="w-full flex justify-end">
          <div className="w-full flex justify-end text-end mt-10">
            <Image src={spin} alt="Spin" quality="100" />
          </div>
        </div>
      </div>
      <div className="relative w-full md:w-3/5 md:pl-20">
        <div className="bg-team bg-cover bg-center w-full h-full rounded-3xl min-h-96"></div>
      </div>
    </div>
  );
}
