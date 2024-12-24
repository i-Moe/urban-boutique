import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Urban Boutique Hotel | Prishtina, Kosovo',
    template: '%s | Urban Boutique Hotel',
  },
  description: 'Desfrute de uma estadia de luxo no Urban Boutique Hotel em Prishtina, Kosovo.',
  keywords: 'hotel boutique, Prishtina, Kosovo, hospedagem de luxo',
  openGraph: {
    title: 'Urban Boutique Hotel | Prishtina',
    description: 'Urban Boutique Hotel oferece uma experiência única de hospedagem em Kosovo.',
    url: 'https://stayurbanhotel.com',
    siteName: 'Urban Boutique Hotel',
    images: [
      {
        url: '/cat_no_bg.png', // Imagem padrão do site
        width: 800,
        height: 600,
        alt: 'Urban Boutique Hotel Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/cat_no_bg.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Urban Boutique Hotel" />

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PDHMFD2M');
            `,
          }}
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PDHMFD2M"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
