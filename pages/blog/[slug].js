import posts from "@/data/posts";

export async function getStaticPaths() {
    const paths = posts.map((post) => ({
        params: {slug: post.slug}
    }));
    return {
        paths,
        fallback: false // Jika tidak ditemukan, akan menampilkan 404
    };
}

export async function getStaticProps({ params }) {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) {
        return {
            notFound: true, // Jika post tidak ditemukan, akan menampilkan 404
        };
    }
    return {
        props: {
            post,
        },
    };
}

export default function PostPage({ post }) {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}