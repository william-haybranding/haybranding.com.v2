"use client";
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import brand from "@/public/brand-person.webp";

export default function ServiceTabs() {
  const tabs = [
    {
      title: "Branding",
      value: "branding",
      content: (
        <div className="flex w-full overflow-hidden relative h-full rounded-3xl p-10 bg-gradient-to-br from-orange-500 to-orange-600">
          <div className="w-full flex items-end content-between flex-wrap h-full">
            <div className="w-full md:w-2/6">
              <h3 className="font-mulish uppercase font-black text-2xl text-white">
                Branding
              </h3>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="w-1/6 hidden md:block"></div>
            <div className="w-full md:w-3/6 md:pl-10 h-60 md:h-full">
              <div className="relative bg-white h-full p-5">
                <div className="bg-brand bg-cover h-full p-5"></div>
                <div className="absolute -top-4 -right-4 -bottom-4 -left-4 flex justify-center items-center">
                  <Image
                    src={brand}
                    alt="Branding"
                    quality="100"
                    className="h-full w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Digital Marketing",
      value: "digitalmarketing",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-500 to-orange-600">
          <p>Digital Marketing</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Webdesign & Development",
      value: "webdesign",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-500 to-orange-600">
          <p>Webdesign & Development</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full mt-5 mb-0">
      <h2 className="font-mulish font-black uppercase text-3xl">About</h2>
      <p className="text-xl my-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return <>ADD IMAGE</>;
};
