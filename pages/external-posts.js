import React from "react";

export async function getServerSideProps() {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=5');
    const posts = await res.json();

    return {
        props: {posts}
    };
}

export default function ExternalPosts({ posts }) {
    return (
        <div>
            <h1>External Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}