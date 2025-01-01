import { ReactNode } from "react";
import "@/styles/globals.css";
import "@/styles/tailwind.css";

// Metadados globais (para todas as páginas)
export const metadata = {
  title: {
    default: "Urban Boutique Hotel - Prishtina, Kosovo",
    template: "%s | Urban Boutique",
  },
  description:
    "Discover Urban Boutique Hotel in Prishtina, Kosovo. A perfect blend of comfort, style, and convenience.",
  authors: [{ name: "Urban Boutique Hotel" }],
  metadataBase: new URL("https://urban-boutique.vercel.app"),
  openGraph: {
    title: "Urban Boutique Hotel - Prishtina, Kosovo",
    description:
      "Discover Urban Boutique Hotel in Prishtina, Kosovo. Book your stay today!",
    url: "https://urban-boutique.vercel.app",
    siteName: "Urban Boutique Hotel",
    images: [
      {
        url: "/images/hotel.jpg",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

// Viewport e ThemeColor (Exportação separada para Next.js 14+)
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const themeColor = "#028e87";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
        <div className="container mx-auto max-w-5xl px-4">
          {children}
        </div>

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
