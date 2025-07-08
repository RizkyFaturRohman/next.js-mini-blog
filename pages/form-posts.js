import { useState } from "react";

export default function FormPosts() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [response, setResponse] = useState(null); // ✅ diperbaiki dari "setRespponse"

  const handleSubmit = async (e) => { // ✅ diperbaiki dari "handleSubmiy"
    e.preventDefault();

    const res = await fetch('/api/posts', { // ✅ tambahkan "/" di depan path
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // ✅ kapitalisasi header
      },
      body: JSON.stringify({ title, content })
    });

    const data = await res.json();
    setResponse(data);
  };

  return (
    <div>
      <h1>Tambah Form Posts</h1>
      <form onSubmit={handleSubmit}> {/* ✅ tidak pakai tanda kutip */}
        <input 
          type="text"
          placeholder="Judul"
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <br />
        <textarea
          placeholder="Isi Konten"
          value={content}
          onChange={(e) => setContent(e.target.value)} 
          required
        />
        <br />
        <button type="submit">Kirim</button>
      </form>

      {response && (
        <div>
          <h2>Response dari API:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
