"use client";
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import brand from "@/public/brand-person.webp";
import social from "@/public/social-person.webp";
import web from "@/public/web-person.webp";

export default function ServiceTabs() {
  const tabs = [
    {
      title: "Branding",
      value: "branding",
      content: (
        <div className="flex w-full overflow-hidden relative h-full rounded-3xl p-10 bg-gradient-to-br from-orange-500 to-orange-600">
          <div className="relative w-full flex items-end content-between flex-wrap h-full">
            <div className="absolute top-0 left-0 hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="none"
                viewBox="0 0 132 132"
              >
                <g clip-path="url(#a)">
                  <path
                    fill="#fff"
                    d="M132 32.225C132 14.429 117.571 0 99.77 0H66v32.225C66 14.429 51.57 0 33.775 0H0v33.775C0 51.575 14.43 66 32.225 66H0v33.775C0 117.576 14.43 132 32.225 132H66V99.775C66 117.576 80.43 132 98.225 132H132V98.225C132 80.425 117.571 66 99.775 66H132V32.225ZM66 66v32.225C66 80.425 51.57 66 33.775 66H66V33.775C66 51.575 80.43 66 98.225 66H66Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h132v132H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="w-full md:w-2/6">
              <h3 className="font-mulish uppercase font-black text-2xl md:text-4xl text-white">
                Branding
              </h3>
              <p className="text-white text-md mt-2">
                We craft a strong visual identity for your brand that clearly
                communicates your values and sets you apart from the
                competition.
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
        <div className="flex w-full overflow-hidden relative h-full rounded-3xl p-10 bg-gradient-to-br from-orange-500 to-orange-600">
          <div className="relative w-full flex items-end content-between flex-wrap h-full">
            <div className="absolute top-0 left-0 hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="none"
                viewBox="0 0 132 132"
              >
                <g clip-path="url(#a)">
                  <path
                    fill="#fff"
                    d="M93.215 0H65.612v.581H38.787C17.365.581 0 17.895 0 39.253v54.074C0 114.685 17.365 132 38.787 132h54.428C114.635 132 132 114.686 132 93.327V38.671C132 17.314 114.635 0 93.215 0ZM66 104.478c0-19.682-14.749-35.931-33.827-38.359C49.73 64.064 63.699 50.321 66.04 32.902c2.794 18.622 18.903 32.904 38.357 32.904h.39C83.367 65.806 66 83.12 66 104.478Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h132v132H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="w-full md:w-2/6">
              <h3 className="font-mulish uppercase font-black text-2xl md:text-4xl text-white">
                Digital Marketing
              </h3>
              <p className="text-white text-md mt-2">
                We develop digital marketing strategies to boost your online
                presence and effectively reach your target audience through SEO,
                social media, and paid advertising.
              </p>
            </div>
            <div className="w-1/6 hidden md:block"></div>
            <div className="w-full md:w-3/6 md:pl-10 h-60 md:h-full">
              <div className="relative bg-white h-full p-5">
                <div className="bg-social bg-cover h-full p-5"></div>
                <div className="absolute -top-4 -right-4 -bottom-4 -left-4 flex justify-center items-center">
                  <Image
                    src={social}
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
      title: "Webdesign & Development",
      value: "webdesign",
      content: (
        <div className="flex w-full overflow-hidden relative h-full rounded-3xl p-10 bg-gradient-to-br from-orange-500 to-orange-600">
          <div className="relative w-full flex items-end content-between flex-wrap h-full">
            <div className="absolute top-0 left-0 hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="none"
                viewBox="0 0 132 132"
              >
                <path
                  fill="#fff"
                  d="M132 66c0-36.451-29.529-66-65.958-66v66H99.02l-33.063 66V66H0c0 36.451 29.53 66 65.957 66h65.956L99.02 66H132Z"
                />
              </svg>
            </div>
            <div className="w-full md:w-2/6">
              <h3 className="font-mulish uppercase font-black text-2xl md:text-4xl text-white">
                Web Design & Development
              </h3>
              <p className="text-white text-md mt-2">
                We design visually appealing and user-friendly websites that
                enhance your online presence and provide an exceptional user
                experience.
              </p>
            </div>
            <div className="w-1/6 hidden md:block"></div>
            <div className="w-full md:w-3/6 md:pl-10 h-60 md:h-full">
              <div className="relative bg-white h-full p-5">
                <div className="bg-web bg-cover h-full p-5"></div>
                <div className="absolute -top-4 -right-4 -bottom-4 -left-4 flex justify-center items-center">
                  <Image
                    src={web}
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
  ];

  return (
    <div className="relative w-full mt-5 mb-0">
      <h2 className="font-mulish font-black uppercase text-3xl">About</h2>
      <p className="text-xl my-10">
        We are a marketing agency based in Dubai, London and New York,
        specializing in creating innovative and impactful strategies for brands
        looking to stand out in the global market. Our multidisciplinary team of
        experts is dedicated to providing customized solutions that not only
        meet our clients' needs but also propel their businesses to the next
        level. From small businesses to large corporations, our focus is always
        on delivering results that exceed expectations.
      </p>
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return <>ADD IMAGE</>;
};
