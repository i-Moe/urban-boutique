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
                <p className="text-sm my-2">&copy; {new Date().getFullYear()} Urban Boutique Hotel. All rights reserved.</p>
            </div>
        </footer>

        </>
    );
};

export default Footer;