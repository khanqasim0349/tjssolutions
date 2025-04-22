// 'use client';

// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname(); // detects current route

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   // Close menu when route changes
//   useEffect(() => {
//     closeMenu();
//   }, [pathname]);

//   return (
//     <nav className="fixed top-0 md:w-full w-full bg-blue-950 text-white p-0 shadow-md z-20">
//       <div className="container mx-auto flex justify-between items-center pr-4" style={{ height: 70 }}>
//         <Link href="/" className="flex items-center z-30">
//           <Image src="/tjslogo-01.png" alt="TJS Solutions" width={200} height={100} className="mr-2" />
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden sm:flex space-x-6" style={{ paddingRight: 20 }}>
//           <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
//           <Link href="/services" className="hover:text-gray-300 transition-colors">Services</Link>
//           <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
//           <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
//           <Link href="/consultation" className="hover:text-gray-300 transition-colors">Free Consultation</Link>
//         </div>

//         {/* Hamburger Icon */}
//         <button
//           className="sm:hidden focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="fixed w-screen h-screen -mt-18 bg-gray-900 bg-opacity-95 text-white flex flex-col items-start justify-between space-y-8 sm:hidden z-20 p-4">
//           <button
//             className="absolute top-4 right-4 focus:outline-none"
//             onClick={closeMenu}
//             aria-label="Close menu"
//           >
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>

//           <div className="flex flex-col items-start space-y-6 text-xl p-4 mt-16">
//             <Link href="/" onClick={closeMenu} className="hover:text-gray-300 transition-colors">Home</Link>
//             <Link href="/services" onClick={closeMenu} className="hover:text-gray-300 transition-colors">Services</Link>
//             <Link href="/about" onClick={closeMenu} className="hover:text-gray-300 transition-colors">About</Link>
//             <Link href="/contact" onClick={closeMenu} className="hover:text-gray-300 transition-colors">Contact</Link>
//             <Link href="/consultation" onClick={closeMenu} className="hover:text-gray-300 transition-colors">Free Consultation</Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null); // reference to mobile menu

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleMobileLinkClick = (path: string) => {
    closeMenu();
    router.push(path);
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full bg-blue-950 text-white p-0 shadow-md z-20">
      <div className="container mx-auto flex justify-between items-center pr-4" style={{ height: 70 }}>
        <Link href="/" className="flex items-center z-30">
          <Image src="/tjslogo-01.png" alt="TJS Solutions" width={200} height={100} className="mr-2" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6" style={{ paddingRight: 20 }}>
          <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link href="/services" className="hover:text-gray-300 transition-colors">Services</Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          <Link href="/consultation" className="hover:text-gray-300 transition-colors">Free Consultation</Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed w-screen h-screen -mt-18 bg-gray-900 bg-opacity-95 text-white sm:hidden z-20 p-4"
          ref={menuRef}
        >
          <button
            className="absolute top-4 right-4 focus:outline-none"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col items-start space-y-6 text-xl p-4 mt-16">
            <button onClick={() => handleMobileLinkClick('/')} className="hover:text-gray-300 transition-colors">Home</button>
            <button onClick={() => handleMobileLinkClick('/services')} className="hover:text-gray-300 transition-colors">Services</button>
            <button onClick={() => handleMobileLinkClick('/about')} className="hover:text-gray-300 transition-colors">About</button>
            <button onClick={() => handleMobileLinkClick('/contact')} className="hover:text-gray-300 transition-colors">Contact</button>
            <button onClick={() => handleMobileLinkClick('/consultation')} className="hover:text-gray-300 transition-colors">Free Consultation</button>
          </div>
        </div>
      )}
    </nav>
  );
}
