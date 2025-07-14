// pages/blog/index.js
import Link from "next/link";
import { posts } from "../../data/posts";

export default function BlogList() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-4">
            <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>
              <span className="text-blue-600 hover:underline">{post.title}</span>
            </Link>
            <p className="text-gray-600 text-sm">
              {new Date(post.date).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
