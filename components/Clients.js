import { useEffect, useRef } from "react";
import ClientsSwiper from "./Clients/ClientsSwiper";

export default function Clients() {
  return (
    <div className="w-full bg-black text-white relative md:pt-20 pb-20">
      <div className="relative w-full max-w-screen-xl mx-auto p-4 flex ">
        <h2 className="font-mulish uppercase text-3xl font-black py-10">
          Our Clients
        </h2>
      </div>
      <div className="relative w-full">
        <div className="absolute top-0 bottom-0 left-0 w-10 md:w-36 bg-gradient-to-r from-black z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-10 md:w-36 bg-gradient-to-l from-black z-10"></div>
        <ClientsSwiper />
      </div>
    </div>
  );
}
