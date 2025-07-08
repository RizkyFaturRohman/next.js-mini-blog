export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/posts');
    const posts = await res.json();

    return {
        props: {
            posts,
        }
    };
}

export default function ServerPosts({ posts }) {
    return (
        <div>
            <h1>Server-Side Rendered Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}