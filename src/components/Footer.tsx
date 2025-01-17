import Image from 'next/image'; // Import Next.js Image component
// import VDivider from '../assets/something/triangleNegative.svg'; // Adjust the path as needed

const Footer = () => {
  return (
      <footer className="bg-choco text-cream py-4">
        <div className="container mx-auto text-center">
          <div className="mt-2">
            <a href="#about" className="text-cream hover:text-vitamin mx-2">About</a>
            <a href="#rooms" className="text-cream hover:text-vitamin mx-2">Rooms</a>
            <a href="#blog" className="text-cream hover:text-vitamin mx-2">Blog</a>
            <a href="#contact" className="text-cream hover:text-vitamin mx-2">Contact</a>
          </div>
          <p className="text-sm my-2">&copy; {new Date().getFullYear()} Godines Hotel. All rights reserved.</p>
        </div>
      </footer>
  );
};

export default Footer;
