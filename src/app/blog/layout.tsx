import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog - Urban Boutique Hotel",
  description: "Explore articles and guides about Pristina and our hotel experiences.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}
