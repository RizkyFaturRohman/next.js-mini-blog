import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Next.js Mini Blog</title>
        <meta name="description" content="Tentang penulis blog ini, Rizky" />
      </Head>
      <main className="max-w-2xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        
        {/* Foto profil */}
        <div className="mb-4">
          <Image 
            src="/cuy.jpeg" // pastikan file ini ada di folder public/
            alt="Foto Rizky"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>

        <p className="mb-2">
          Halo! Saya Rizky, penulis blog ini. Saat ini saya belajar dan mengembangkan aplikasi web menggunakan Next.js dan React.
        </p>
        <p className="mb-2">
          Blog ini dibuat sebagai proyek pembelajaran sekaligus berbagi tutorial seputar programming.
        </p>

        {/* Tambah detail lainnya */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">My Skills</h2>
        <ul className="list-disc list-inside mb-4">
          <li>HTML, CSS, JavaScript</li>
          <li>React.js & Next.js</li>
          <li>Basic Node.js & API development</li>
          <li>Version control (Git & Github)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Find me on</h2>
        <ul>
          <li>
            <a href="https://github.com/RizkyFaturRohman" target="_blank" className="text-blue-500 underline">
              Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/" target="_blank" className="text-blue-500 underline">
              LinkedIn
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
