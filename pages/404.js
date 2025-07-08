import Link from "next/link";

export default function NotFoundPage() {
    return(
        <div className="flex flex-col items-center justify-center h-screen text-center px-4">
            <h1 className="text-5xl font-bold mb-4 text-red-800">404</h1>
            <p className="text-xl mb-6 text-gray-600">Halaman yang kami cari tidak tersedia</p>
            <Link href= "/"className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Kembali ke Beranda
            </Link>
        </div>
    );
}