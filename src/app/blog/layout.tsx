import type { Metadata } from 'next';
import BlogNavbar from "@/components/BlogNavbar";
import BlogFooter from '@/components/BlogFooter';


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
    <>
      <BlogNavbar />
      <main lang="en" aria-label="Blog articles and guides">
        {children}
      </main>
      <BlogFooter />
    </>
  );
}
