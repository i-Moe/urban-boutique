import Hero from "@/components/Hero";
import Blog from "@/components/Blog";

// Metadata API (Sem uso de <Head>)
export const metadata = {
  title: "Urban Boutique Hotel - Pristina, Kosovo",
  description: "Discover Urban Boutique Hotel in Pristina, Kosovo. A perfect blend of comfort, style, and convenience.",
  keywords: "Hotel, Boutique, Pristina, Kosovo, Luxury, Stay",
  authors: [{ name: "Urban Boutique Hotel" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Urban Boutique Hotel - Pristina, Kosovo",
    description: "Discover the best boutique hotel in Pristina, Kosovo.",
    url: "https://urbanboutiquehotel.com",
    images: [
      {
        url: "/images/hero1200w.webp",
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
    canonical: "https://urbanboutiquehotel.com",
  },
};

export default function Home() {
  return (
    <main className="container-max-w-5xl">
      <Hero />
      <Blog />
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Experience the Difference</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Urban Boutique Hotel is designed for guests seeking a unique
          experience, blending luxury, comfort, and a touch of Kosovo's rich
          culture.
        </p>
        <a
          href="/about"
          className="mt-8 inline-block px-6 py-3 bg-vitamin text-white font-semibold rounded-lg shadow-lg hover:bg-lemon transition"
          aria-label="See more about Urban Boutique Hotel"
        >
          See More
        </a>
      </section>
    </main>
  );
}
