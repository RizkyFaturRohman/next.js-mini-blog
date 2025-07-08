import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const stored = localStorage.getItem("posts");
    const posts = stored ? JSON.parse(stored) : [];

    const newPost = {
      id: posts.length + 1,
      title,
      content,
      createdAt: new Date().toISOString(), // Untuk fitur tanggal nanti
    };

    const updatedPosts = [newPost, ...posts];
    localStorage.setItem("posts", JSON.stringify(updatedPosts));

    Swal.fire({
      icon: "success",
      title: "Post berhasil ditambahkan!",
      showConfirmButton: false,
      timer: 1500,
    });

    setTimeout(() => {
      router.push("/");
    }, 1600);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Tambah Post Baru</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow space-y-4"
      >
        <input
          type="text"
          placeholder="Judul"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          placeholder="Isi Konten"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full h-32 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          ➕ Tambah
        </button>
      </form>
    </div>
  );
}
