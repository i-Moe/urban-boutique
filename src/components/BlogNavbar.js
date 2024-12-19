import React from 'react';
import { Link } from "react-router-dom";
import '../index.css';

const BlogNavbar = () => {
    return (
        <header className="bg-cream text-choco border-b border-choco shadow-md sticky top-0 z-50 h-full">
            <div className="container-max-w-5xl bg-cream pt-1 flex justify-between items-center relative h-11 sm:h-14">
                {/* Logo */}
                <Link
                    to="/"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-xl lg:text-2xl font-bold"
                >
                    Urban Boutique Hotel
                </Link>
            </div>
        </header>
    );
};

export default BlogNavbar;
