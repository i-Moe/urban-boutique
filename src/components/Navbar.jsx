"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);  // Referência para capturar cliques externos

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    // Fecha o menu ao rolar a página
    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) {
                closeMenu();
            }
        };

        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                closeMenu();
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header className="bg-cream text-choco border-b border-choco sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center h-16 px-4 relative">
                {/* Logo (Rola para o topo ao clicar) */}
                <div
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-2xl font-bold cursor-pointer"
                    aria-label="Urban Boutique Hotel - Home"
                >
                    Urban Boutique Hotel
                </div>

                {/* Menu Hamburguer (Mobile) */}
                <div className="sm:hidden">
                    <button
                        onClick={toggleMenu}
                        aria-label="Open Main Menu"
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
                    </button>
                </div>

                {/* Menu Desktop */}
                <nav className="hidden sm:flex space-x-6">
                    <a
                        href="#about"
                        onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
                        className="hover:text-mint"
                    >
                        About
                    </a>
                    <a
                        href="#rooms"
                        onClick={() => window.scrollTo({ top: 1500, behavior: "smooth" })}
                        className="hover:text-mint"
                    >
                        Rooms
                    </a>
                    <a
                        href="#gallery"
                        onClick={() => window.scrollTo({ top: 2200, behavior: "smooth" })}
                        className="hover:text-mint"
                    >
                        Gallery
                    </a>
                    <a
                        href="#contact"
                        onClick={() => window.scrollTo({ top: 3000, behavior: "smooth" })}
                        className="hover:text-mint"
                    >
                        Contact
                    </a>
                </nav>
            </div>

            {/* Dropdown Mobile */}
            <div
                ref={menuRef}
                id="mobile-menu"
                className={`absolute top-0 left-0 w-full bg-choco border-b border-choco transition-transform transform ease-in-out duration-300 ${
                    isOpen ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <nav className="flex flex-col items-center pt-20 pb-10 space-y-4">
                    <a
                        href="#about"
                        className="block text-cream text-lg hover:text-mint"
                        onClick={closeMenu}
                    >
                        About
                    </a>
                    <a
                        href="#rooms"
                        className="block text-cream text-lg hover:text-mint"
                        onClick={closeMenu}
                    >
                        Rooms
                    </a>
                    <a
                        href="#gallery"
                        className="block text-cream text-lg hover:text-mint"
                        onClick={closeMenu}
                    >
                        Gallery
                    </a>
                    <a
                        href="#contact"
                        className="block text-cream text-lg hover:text-mint"
                        onClick={closeMenu}
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
