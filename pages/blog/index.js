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
        <div className="relative w-full  flex flex-wrap">
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <a href={`/posts/${post.slug}`}>{post.title}</a>
                <p>{post.date}</p>
              </li>
            ))}
          </ul>
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
