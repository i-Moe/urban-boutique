import React from 'react';
import VDivider from '../assets/something/triangleNegative.svg';

const Footer = () => {
    return (
        <>

        <img
        src={VDivider}
        alt="V divider"
        className="block w-full 
          relative top-[2px]
          h-[40px] sm:h-[60px] lg:h-[80px]"
      />

        <footer className="bg-choco text-cream py-4">
            <div className="container mx-auto text-center">
                <div className="mt-2">
                    <a href="#about" className="text-cream hover:text-lemon mx-2">About</a>
                    <a href="#services" className="text-cream hover:text-lemon mx-2">Services</a>
                    <a href="#clients" className="text-cream hover:text-vitamin mx-2">Clients</a>
                    <a href="#contact" className="text-cream hover:text-vitamin mx-2">Contact</a>
                </div>
                <p className="text-sm my-2">&copy; {new Date().getFullYear()} The Lazy Cat. All rights reserved.</p>
            </div>
        </footer>

        </>
    );
};

export default Footer;