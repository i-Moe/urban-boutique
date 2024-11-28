import React, { useState, useEffect } from 'react';
// import { bubble as Menu } from 'react-burger-menu';
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
        <header className="bg-cream text-choco border-b border-choco sticky top-0 z-50">
            <div className="container-max-w-5xl bg-cream flex justify-between items-center h-16 relative">
                {/* Logo */}
                <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-bold cat-cursor"
        >
          Urban Boutique Hotel
        </div>

                {/* Hamburger Menu (Mobile) */}
                <div className="sm:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
                        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>

                {/* Menu (Desktop) */}
                <nav className="hidden sm:flex space-x-6">
                    <a href="#about" className="hover:text-mint">About</a>
                    <a href="#rooms" className="hover:text-mint">Rooms</a>
                    <a href="#gallery" className="hover:text-mint">Gallery</a>
                    <a href="#contact" className="hover:text-mint">Contact</a>
                </nav>
            </div>

 {/* Dropdown Menu (Mobile) */}
<div
    className={`absolute top-0 left-0 w-full z-[-10] bg-choco border-b border-choco transition-transform duration-300 ease-in-out transform ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
    }`}
>
    <nav className="flex flex-col items-center pt-20 pb-5">
        <a
            href="#about"
            className={`block px-4 py-2 text-cream w-full text-center transform transition duration-300 hover:text-cream`}
        >
            About
        </a>
        <a
            href="#rooms"
            className={`block px-4 py-2 text-cream w-full text-center transform transition duration-300 hover:text-cream`}
        >
            Rooms
        </a>
        <a
            href="#gallery"
            className={`block px-4 py-2 text-cream w-full text-center transform transition duration-300 hover:text-cream`}
        >
            Gallery
        </a>
        <a
            href="#contact"
            className={`block px-4 py-2 text-cream w-full text-center transform transition duration-300 hover:text-cream`}
        >
            Contact
        </a>
    </nav>
</div>

        </header>
    );
};

export default Navbar;
