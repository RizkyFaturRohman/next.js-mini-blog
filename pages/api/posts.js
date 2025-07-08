export default function handler(req, res) {
    const posts = [
        {id: 1, title: 'Belajar Next.js', content: 'Next.js adalah framework React yang memungkinkan pengembangan aplikasi web dengan fitur seperti server-side rendering, static site generation, dan API routes. Ini sangat cocok untuk membuat aplikasi web yang cepat dan SEO-friendly.'},
        {id: 2, title: 'Belajar React', content: 'React adalah library JavaScript untuk membangun antarmuka pengguna. Dengan React, Anda dapat membuat komponen UI yang dapat digunakan kembali dan mengelola state aplikasi dengan lebih mudah.'},
        {id: 3, title: 'Belajar JavaScript', content: 'JavaScript adalah bahasa pemrograman yang digunakan untuk membuat halaman web interaktif. Ini adalah bahasa yang sangat penting untuk pengembangan web modern.'}
    ];

    res.status(200).json(posts);
}