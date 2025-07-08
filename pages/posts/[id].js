import Head from "next/head";

export default function PostDetail({ post }) {
  if (!post) {
    return (
      <div className="max-w-2xl mx-auto py-8 px-4">
        <h1 className="text-xl font-semibold text-red-500">Post not found</h1>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.content} />
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

// ✅ Server-side rendering: data di-fetch setiap kali halaman dibuka
export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    // Jika tidak ada post valid
    if (!res.ok || !data.id) {
      return { notFound: true };
    }

    return {
      props: {
        post: {
          title: data.title,
          content: data.body,
          date: new Date().toISOString(), // bisa kamu ganti ke tanggal dari backend kalau ada
        },
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
