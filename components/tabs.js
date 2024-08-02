"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";

export default function ServiceTabs() {
  const tabs = [
    {
      title: "Branding",
      value: "branding",
      content: (
        <div className="flexw-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-500 to-orange-600">
          <p>Branding</p>
          <p>Branding</p>
          <p>Branding</p>
          <p>Branding</p>
          <p>Branding</p>
          <p>Branding</p>
          <p>Branding</p>
          <p>Branding</p>
          <p>Branding</p>
          <p>Branding</p>
          <p>Branding</p>
          <p>Branding</p>
          <p>Branding</p>
          <p>Branding</p>
          <p>Branding</p>
          <p>Branding</p>
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
    <div className="w-full mb-0">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return <>ADD IMAGE</>;
};
