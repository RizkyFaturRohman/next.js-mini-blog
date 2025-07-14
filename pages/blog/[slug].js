// pages/blog/[slug].js
import Head from "next/head";
import { posts } from "../../data/posts";

export default function BlogPost({ post }) {
  if (!post) {
    return <div>Post not found</div>;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.content.slice(0, 150),
    datePublished: post.date,
    author: { "@type": "Person", name: "Rizky" },
  };

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.content.slice(0, 150)} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <div className="max-w-2xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
        <p className="text-gray-700 mb-4">{post.content}</p>
        <p className="text-sm text-gray-500">
          Posted on: {new Date(post.date).toLocaleDateString()}
        </p>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: {
      slug: post.title.toLowerCase().replace(/\s+/g, "-"),
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = posts.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  ) || null;
  return { props: { post } };
}
