import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import '../index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    // Close the dropdown menu when scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) {
                closeMenu();
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    return (
        <header className="bg-cream text-choco border-b border-choco sticky top-0 z-50 h-full">
            <div className="container-max-w-5xl bg-cream pt-1 flex justify-between items-center relative h-11 sm:h-14">
                {/* Logo */}
                <Link
                    to="/"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-xl lg:text-2xl font-bold"
                >
                    Urban Boutique Hotel
                </Link>

                {/* Hamburger Menu (Mobile) */}
                <div className="sm:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
                        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>

                {/* Menu (Desktop) */}
                <nav className="hidden sm:flex space-x-6">
                    <a href="#about" className="text-lg hover:text-mint">About</a>
                    <a href="#rooms" className="text-lg hover:text-mint">Rooms</a>
                    <a href="#gallery" className="text-lg hover:text-mint">Gallery</a>
                    <a href="#contact" className="text-lg hover:text-mint">Contact</a>
                </nav>
            </div>

            {/* Dropdown Menu (Mobile) */}
            <div
                className={`absolute top-0 left-0 w-full z-[-10] bg-choco transition-transform duration-300 ease-in-out transform ${
                    isOpen ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <nav className="flex flex-col items-center pt-20 pb-5">
                    <a href="#about" className="block px-4 py-2 text-cream text-lg w-full text-center hover:text-cream">
                        About
                    </a>
                    <a href="#rooms" className="block px-4 py-2 text-cream text-lg w-full text-center hover:text-cream">
                        Rooms
                    </a>
                    <a href="#gallery" className="block px-4 py-2 text-cream text-lg w-full text-center hover:text-cream">
                        Gallery
                    </a>
                    <a href="#contact" className="block px-4 py-2 text-cream text-lg w-full text-center hover:text-cream">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
