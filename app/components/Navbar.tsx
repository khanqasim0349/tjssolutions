'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-500 text-white p-0 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center" style={{height:70}} >
        <Link href="/" className="flex items-center">
          <Image src="/tjslogo.png" alt="TJS Solutions" width={200} height={100} className="mr-2" />
        </Link>

        {/* Desktop Menu (hidden on mobile) */}
        <div className="hidden sm:flex space-x-6" style={{paddingRight:20}}>
          <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link href="/services" className="hover:text-gray-300 transition-colors">Services</Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          <Link href="/consultation" className="hover:text-gray-300 transition-colors">Free Consultation</Link>
        </div>

        {/* Hamburger Icon (visible on mobile, right-aligned) */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu (full-screen overlay) */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 text-white flex flex-col items-center justify-center space-y-8 sm:hidden z-20">
          <button
            className="absolute top-4 right-4 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <div className="flex flex-col items-center space-y-6 text-xl">
            <Link href="/" className="hover:text-gray-300 transition-colors fade-in" onClick={toggleMenu}>Home</Link>
            <Link href="/services" className="hover:text-gray-300 transition-colors fade-in" onClick={toggleMenu}>Services</Link>
            <Link href="/about" className="hover:text-gray-300 transition-colors fade-in" onClick={toggleMenu}>About</Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors fade-in" onClick={toggleMenu}>Contact</Link>
            <Link href="/consultation" className="hover:text-gray-300 transition-colors fade-in" onClick={toggleMenu}>Free Consultation</Link>
          </div>
        </div>
      )}
    </nav>
  );
}