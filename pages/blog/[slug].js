import posts from "@/data/posts.json";

export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
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
