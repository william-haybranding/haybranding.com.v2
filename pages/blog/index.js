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

import posts from "@/data/posts.json";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <SeoHead
        title="Hay Branding - Blog"
        description="Welcome to Hay Branding's blog. Stay up to date with the latest insights and tips on branding, digital marketing, and technological development."
      />
      <main className={`w-full flex flex-wrap relative`}>
        <div className="relative w-full">
          <Title
            title="Blog"
            phrase="Discover insights and updates from the world of marketing and branding..."
          />
        </div>
        <div className="relative w-full max-w-screen-2xl mx-auto p-4 pt-0 flex">
          <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-10">
            {posts.map((post) => (
              <div key={post.id} className="w-full">
                <Link href={`/blog/${post.slug}`} legacyBehavior>
                  <a className="w-full flex flex-wrap relative h-full items-start ">
                    <div className="w-full">
                      <div className="w-full bg-white rounded-xl relative overflow-hidden h-48 md:h-72 shadow-2xl">
                        <Image
                          src={`${post.image}`}
                          alt={post.title}
                          width={400}
                          height={300}
                          loading="lazy"
                          quality="100"
                          className="rounded-lg w-full absolute top-0 left-0"
                        />
                      </div>
                      <h3 className="font-mulish font-bold py-4 text-2xl">
                        {post.title}
                      </h3>
                      <span className="absolute top-4 left-4 bg-orange text-white font-mulish px-2 rounded-xl font-bold">
                        {post.date}
                      </span>
                      <p>{post.excerpt}</p>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full max-w-screen-2xl mx-auto p-4 flex ">
          {/* <Culture /> */}
        </div>
        <div className="relative w-full bg-black/5 flex mt-0 z-0">
          {/* <Partners /> */}
        </div>
      </main>
    </Layout>
  );
}
