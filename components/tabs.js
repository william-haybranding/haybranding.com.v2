"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";

export default function ServiceTabs() {
  const tabs = [
    {
      title: "Branding",
      value: "branding",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-500 to-orange-600">
          <p>Branding</p>
          <DummyContent />
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
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return <>ADD IMAGE</>;
};
