import Link from 'next/link';

const BlogNavbar = () => {
    return (
        <header className="bg-cream text-choco border-b border-choco shadow-md sticky top-0 z-50 h-full">
            <div className="container-max-w-5xl bg-cream pt-1 flex justify-between items-center relative h-11 sm:h-14">
                {/* Logo */}
                <Link 
                    href="/" 
                    className="text-xl lg:text-2xl font-bold"
                    // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    Urban Boutique Hotel
                </Link>
                <Link href="/blog" className="text-lg underline-effect-mint hover:text-mint">
                    Blog Top
                </Link>
            </div>
        </header>
    );
};

export default BlogNavbar;
