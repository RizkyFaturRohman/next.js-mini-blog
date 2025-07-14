import { posts } from "../../data/posts";  // atau "@/data/posts"

export default function BlogPost({ post }) {
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <p className="text-gray-700 mb-4">{post.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { slug: post.title.toLowerCase().replace(/\s+/g, "-") },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = posts.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  ) || null;
  return { props: { post } };
}
