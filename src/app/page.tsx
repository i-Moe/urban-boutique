import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Rooms from "@/components/Rooms";
import Footer from "@/components/Footer";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

// Metadata API (Sem uso de <Head>)
export const metadata = {
  title: "Urban Boutique Hotel - Pristina, Kosovo",
  description:
    "Discover Urban Boutique Hotel in Pristina, Kosovo. A perfect blend of comfort, style, and convenience.",
  authors: [{ name: "Urban Boutique Hotel" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Urban Boutique Hotel - Pristina, Kosovo",
    description: "Discover the best boutique hotel in Pristina, Kosovo.",
    url: "https://stayurbanhotel.com",
    images: [
      {
        url: "https://stayurbanhotel.com/images/hero1200w.webp",
        width: 1200,
        height: 800,
        alt: "Urban Boutique Hotel Hero Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://stayurbanhotel.com",
  },
};

// 🔧 Viewport deve ser exportado separadamente
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
};

// Página principal do site
export default function Home() {
  return (
    <>
      <Header />
      <main aria-label="Urban Boutique Hotel Homepage">
        <Hero />  {/* 🔧 Hero já cuida da imagem */}
        <About />
        <Rooms />
        <Blog />

        <section className="py-16 text-center" aria-label="Unique guest experience at Urban Boutique Hotel">
          <h2 className="text-3xl font-bold mb-6" aria-label="Experience the Difference">
            Experience the Difference
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Urban Boutique Hotel is designed for guests seeking a unique
            experience, blending luxury, comfort, and a touch of Kosovo's rich
            culture.
          </p>

          <Link href="/about" passHref legacyBehavior>
            <a
              className="mt-8 inline-block px-6 py-3 bg-vitamin text-white font-semibold rounded-lg shadow-lg hover:bg-lemon transition"
              aria-label="Learn more about Urban Boutique Hotel"
            >
              See More
            </a>
          </Link>
        </section>

        <WhatsAppButton />


        {/* Schema.org - WebSite e Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Urban Boutique Hotel",
            "url": "https://stayurbanhotel.com",
            "publisher": {
              "@type": "Organization",
              "name": "Urban Boutique Hotel",
              "logo": {
                "@type": "ImageObject",
                "url": "https://stayurbanhotel.com/images/logo.webp",
                "width": 600,
                "height": 60
              }
            }
          }
        `,
          }}
        />
      </main>

      <Footer />

    </>
  );
}
