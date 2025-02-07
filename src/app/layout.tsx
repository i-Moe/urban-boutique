import { Cormorant_Garamond } from "next/font/google";
import { ReactNode } from "react";
import "@/styles/globals.css";
import "@/styles/tailwind.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap", // Prevents invisible text issues
  variable: "--font-cormorant", // Creates a CSS variable for Tailwind
});

// Metadados globais (para todas as páginas)
export const metadata = {
  title: {
    default: "Urban Boutique Hotel - Prishtina, Kosovo",
    template: "%s | Urban Boutique",
  },
  description:
    "Discover Urban Boutique Hotel in Prishtina, Kosovo. A perfect blend of comfort, style, and convenience.",
  authors: [{ name: "Urban Boutique Hotel" }],
  metadataBase: new URL("https://stayurbanhotel.com"),  // 🔧 URL ajustada
  openGraph: {
    title: "Urban Boutique Hotel - Prishtina, Kosovo",
    description:
      "Discover Urban Boutique Hotel in Prishtina, Kosovo. Book your stay today!",
    url: "https://stayurbanhotel.com",  // 🔧 URL corrigida
    siteName: "Urban Boutique Hotel",
    images: [
      {
        url: "https://stayurbanhotel.com/images/hotel.jpg",  // 🔧 URL completa
        width: 1200,
        height: 800,
        alt: "Urban Boutique Hotel Exterior",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// Viewport e ThemeColor (Configuração separada para Next.js 14+)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",  // 🔧 Evita zoom acidental
  interactiveWidget: "resizes-visual",
};

export const themeColor = "#028e87";

// Layout principal do site
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cormorant.variable} aria-label="Urban Boutique Hotel Official Site">
      <head>
        <link
          rel="preload"
          href="/images/hero1200w.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body className="font-sans text-choco bg-cream">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PDHMFD2M"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          ></iframe>
        </noscript>

        {/* Conteúdo Principal */}
        <div>{children}</div>

        {/* Google Tag Manager Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PDHMFD2M');
            `,
          }}
        />
      </body>
    </html>
  );
}
