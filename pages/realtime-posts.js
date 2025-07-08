import { useState } from "react";

export default function RealtimePosts() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [posts, setPosts] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = {
            id: posts.length + 1,
            title,
            content
        };

        setPosts([newPost, ...posts]);
        setTitle("");
        setContent("");
    };

    return (
        <div>
            <h1>Form + Realtime Posts</h1>
            <form onSubmit={handleSubmit} >
                <input 
                type="text"
                placeholder="Judul"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                 />
                 <br />

                 <textarea placeholder="Isi Konten"
                 value={content}
                 onChange={(e) => setContent(e.target.value)}
                 required
                  />
                  <br />
                  <button type="submit">Tambah</button>
            </form>

            <hr />
            <h2>Daftar Posts</h2>
            <ul>
                {posts.map((post) =>(
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}