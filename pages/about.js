// pages/about.js
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Next.js Mini Blog</title>
        <meta name="description" content="Tentang penulis blog ini, Rizky" />
      </Head>
      <main className="max-w-2xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="mb-2">Halo! Saya Rizky, penulis blog ini. Saat ini saya belajar dan mengembangkan aplikasi web menggunakan Next.js dan React.</p>
        <p>Blog ini dibuat sebagai proyek pembelajaran sekaligus berbagi tutorial seputar programming.</p>
      </main>
    </>
  );
}
