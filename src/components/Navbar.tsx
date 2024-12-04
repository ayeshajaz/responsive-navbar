'use client'
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar({ setIsMenuOpen}:{ setIsMenuOpen: (value: boolean) => void }) {
  const [navigation, setNavigation] = useState(false);

  const handleNavigation = () => {
    setNavigation(!navigation);
    setIsMenuOpen(!navigation); // Update the state when menu is opened/closed
  };

  return (
    <>
      <header className="w-full bg-slate-950 text-white top-0 left-0 z-30">
        <nav className="w-full max-w-[1400px] mx-auto h-[90px] flex justify-between items-center px-7 py-4">
          <Link href="/">
            <p className="font-bold text-3xl lg:text-2xl xl:text-4xl cursor-pointer">eAyvora</p>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex uppercase font-semibold text-[14px] xl:text-[16px] cursor-pointer text-white">
            <li className="hover:text-blue-300 transition duration-300">
              <Link href="#home">Home</Link>
            </li>
            <li className="ml-12 hover:text-blue-300 transition duration-300">
              <Link href="#about">About</Link>
            </li>
            <li className="ml-12 hover:text-blue-300 transition duration-300">
              <Link href="#contact">Contact</Link>
            </li>
            <li className="ml-12 hover:text-blue-300 transition duration-300">
              <Link href="#services">Services</Link>
            </li>
          </ul>

          {/* Mobile Burger Menu Icon */}
          <div onClick={handleNavigation} className="block lg:hidden">
            {navigation ? (
              <AiOutlineClose size={22} className="text-white" />
            ) : (
              <AiOutlineMenu size={22} className="text-white" />
            )}
          </div>

          {/* Mobile Menu */}
          <div
            className={
              navigation
                ? 'lg:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-slate-950 text-center ease-in duration-300'
                : 'lg:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'
            }
          >
            <ul className="px-10 uppercase font-semibold cursor-pointer">
              <li onClick={handleNavigation} className="m-4 hover:text-blue-300 transition duration-300">
                <Link href="#home">Home</Link>
              </li>
              <li onClick={handleNavigation} className="m-4 hover:text-blue-300 transition duration-300">
                <Link href="#about">About</Link>
              </li>
              <li onClick={handleNavigation} className="m-4 hover:text-blue-300 transition duration-300">
                <Link href="#contact">Contact</Link>
              </li>
              <li onClick={handleNavigation} className="m-4 hover:text-blue-300 transition duration-300">
                <Link href="#services">Services</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
