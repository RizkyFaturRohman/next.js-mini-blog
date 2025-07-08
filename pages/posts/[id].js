import Head from "next/head";

export default function PostDetail({ post }) {
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