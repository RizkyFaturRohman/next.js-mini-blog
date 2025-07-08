// components/Layout.js
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <Link href="/">🏠 Beranda</Link> |{" "}
        <Link href="/new">✍️ Buat Post</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}
