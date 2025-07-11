import Head from "next/head";
import { useRouter } from "next/router";

export default function SeoHead({ title, description }) {
    const router = useRouter();
    const baseUrl = "https://next-js-mini-blog-jho5f3nre-superrizky3456-gmailcoms-projects.vercel.app";

    return (
        <Head>
            <title> {title} </title>
            <meta name="description" content={description} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${baseUrl}${router.asPath}`} />
            <meta property="og:image" content={`${baseUrl}/seo-thumbnail.jpg`} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${baseUrl}/seo-thumbnail.jpg`} />

            {/* Canonical URL */}
            <link rel="canonical" href={`${baseUrl}${router.asPath}`} />
    </Head>
  );
}