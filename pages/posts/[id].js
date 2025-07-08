import Head from "next/head";

// Komponen detail post
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
                <p className="text-sm text-gray-500">Posted on: {new Date(post.date).toLocaleDateString()}</p>
            </div>
        </>
    );
}

// Ambil data post berdasarkan ID dari URL
export async function getStaticProps(context) {
    const { id } = context.params;

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await res.json();

        // Jika post tidak valid atau tidak ditemukan
        if (!data || !data.id) {
            return { notFound: true };
        }

        return {
            props: {
                post: {
                    title: data.title,
                    content: data.body,
                    date: new Date().toISOString(), // karena API tidak punya tanggal
                },
            },
        };
    } catch (error) {
        return { notFound: true };
    }
}

// Konfigurasi dynamic routing agar bisa render saat diminta
export async function getStaticPaths() {
    return {
        paths: [], // tidak perlu render semua post di awal
        fallback: "blocking", // render saat ada request
    };
}
