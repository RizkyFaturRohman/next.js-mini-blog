import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function EditPostPage() {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && id) {
      const stored = localStorage.getItem("posts");
      if (stored) {
        const posts = JSON.parse(stored);
        const post = posts.find((p) => p.id === Number(id));
        if (post) {
          setTitle(post.title);
          setContent(post.content);
        }
      }
    }
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const stored = localStorage.getItem("posts");
    const posts = stored ? JSON.parse(stored) : [];

    const updatedPosts = posts.map((post) =>
      post.id === Number(id) ? { ...post, title, content } : post
    );

    localStorage.setItem("posts", JSON.stringify(updatedPosts));

    Swal.fire({
      icon: "success",
      title: "Post berhasil diperbarui!",
      showConfirmButton: false,
      timer: 1500,
    });

    setTimeout(() => {
      router.push("/");
    }, 1600);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          className="border w-full p-2 mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="border w-full p-2 mb-3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}
