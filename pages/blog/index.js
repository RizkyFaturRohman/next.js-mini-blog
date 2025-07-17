import Link from "next/link";
import { posts } from "../../data/posts";

export default function BlogPage({ currentPosts, currentPage, totalPages }) {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul>
        {currentPosts.map((post) => (
          <li key={post.id} className="mb-4">
            <Link href={`/posts/${post.id}`}>
              <span className="text-blue-600 hover:underline">{post.title}</span>
            </Link>
            <p className="text-gray-600 text-sm">
              {new Date(post.date).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex justify-between mt-6">
        {currentPage > 1 ? (
          <Link href={`/blog?page=${currentPage - 1}`}>
            <span className="text-blue-600 hover:underline">← Previous</span>
          </Link>
        ) : <span />}

        {currentPage < totalPages ? (
          <Link href={`/blog?page=${currentPage + 1}`}>
            <span className="text-blue-600 hover:underline">Next →</span>
          </Link>
        ) : <span />}
      </div>
    </div>
  );
}

// Pagination logic
export async function getServerSideProps({ query }) {
  const page = parseInt(query.page) || 1;
  const perPage = 3; // tampilkan 3 post per halaman

  const start = (page - 1) * perPage;
  const end = start + perPage;

  const currentPosts = posts.slice(start, end);
  const totalPages = Math.ceil(posts.length / perPage);

  return {
    props: {
      currentPosts,
      currentPage: page,
      totalPages,
    },
  };
}
