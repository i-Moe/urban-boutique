import Link from 'next/link';

const BlogFooter = () => {
    return (
        <footer className="bg-choco text-cream py-4">
            <div className="container mx-auto text-center">
            <div className="mt-2">
            <Link href="/" className="text-cream hover:text-vitamin mx-2">Home</Link>
            <Link href="/blog" className="text-cream hover:text-vitamin mx-2">Blog Top</Link>
          </div>
                <p className="text-sm my-2">&copy; {new Date().getFullYear()} Urban Boutique Hotel. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default BlogFooter;
