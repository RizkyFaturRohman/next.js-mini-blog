// components/Layout.js
import Link from "next/link";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Next.js Mini Blog" />
        <meta property="og:description" content="A simple blog built with Next.js" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://next-js-mini-blog.vercel.app" />
        <meta property="og:image" content="https://next-js-mini-blog.vercel.app/og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Next.js Mini Blog" />
        <meta name="twitter:description" content="Blog sederhana dibuat dengan Next.js oleh Rizky" />
        <meta name="twitter:image" content="https://next-js-mini-blog.vercel.app/og-image.png" />
      </Head>
      <nav style={{ marginBottom: "20px" }}>
        <Link href="/">🏠 Beranda</Link> |{" "}
        <Link href="/new">✍️ Buat Post</Link> |{" "}
        <Link href="/about">👤 About</Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
