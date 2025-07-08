import { useEffect, useState } from "react";

export default function ExternalFilter() {
    const [posts, setPosts] = useState([]);
    const [userId,  setUserId] = useState(1);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(res => res.json())
        .then(data => setPosts(data));
    }, [userId]);

    return (
        <div>
            <h1>Filter post by User ID</h1>

            <label>User ID:</label>
            <select value={userId} onChange={(e) => setUserId(Number(e.target.value))}>
                <option value={1}>User 1</option>
                <option value={2}>User 2</option>
                <option value={3}>User 3</option>
            </select>

            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}