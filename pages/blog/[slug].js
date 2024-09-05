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

export default function Post({ post }) {
  return (
    <Layout>
      <SeoHead
        title={`Hay Branding - ${post.title}`}
        description={post.excerpt}
      />
      <main className={`w-full flex flex-wrap relative blog`}>
        <div className="relative w-full">
          <Title title={post.title} />
        </div>
        <div className="relative w-full max-w-screen-2xl mx-auto p-4 pt-0 flex">
          <div className="relative w-full flex flex-wrap flex-row-reverse justify-between">
            <div className="relative top-0 w-full md:w-2/6 bg-white  h-48 md:h-72  z-20 mb-10">
              <Image
                src={`${post.image}`}
                alt={post.title}
                width={400}
                height={300}
                loading="lazy"
                quality="100"
                className="rounded-xl w-full absolute top-0 left-0 shadow-2xl"
              />
              <span className="absolute top-4 left-4 bg-orange text-white font-mulish px-2 rounded-xl font-bold">
                {post.date}
              </span>
            </div>
            <div key={post.id} className="w-full md:w-3/5">
              <div className="w-full">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
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

export async function getStaticPaths() {
  // Gerar os caminhos (paths) baseados no slug
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Encontrar o post baseado no slug
  const post = posts.find((p) => p.slug === params.slug);

  return {
    props: {
      post,
    },
  };
}
