import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function HomePage() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("posts");
    const posts = stored ? JSON.parse(stored) : [];
    setPostList(posts);
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Yakin ingin menghapus?",
      text: "Data tidak bisa dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#aaa",
      confirmButtonText: "Ya, hapus",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        const updated = postList.filter((post) => post.id !== id);
        setPostList(updated);
        localStorage.setItem("posts", JSON.stringify(updated));

        Swal.fire({
          icon: "success",
          title: "Post berhasil dihapus!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Daftar Post</h1>
      <Link
        href="/new"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block mb-6"
      >
        ➕ Tambah Post
      </Link>

      <ul className="space-y-4">
        {postList.length === 0 && <p className="text-gray-500">Belum ada post.</p>}
        {postList.map((post) => (
          <li
            key={post.id}
            className="border p-4 rounded shadow"
          >
            <div className="mb-2">
              <Link
                href={`/posts/${post.id}`}
                className="text-xl font-semibold text-blue-700 hover:underline"
              >
                {post.title}
              </Link>
              {post.createdAt && (
                <p className="text-sm text-gray-500">
                  {new Date(post.createdAt).toLocaleString("id-ID", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>
              )}
            </div>
            <div className="flex space-x-4">
              <Link
                href={`/edit/${post.id}`}
                className="text-yellow-600 hover:underline"
              >
                ✏️ Edit
              </Link>
              <button
                onClick={() => handleDelete(post.id)}
                className="text-red-600 hover:underline"
              >
                🗑️ Hapus
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
