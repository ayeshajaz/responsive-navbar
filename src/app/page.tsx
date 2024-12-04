"use client"
import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
   <Navbar setIsMenuOpen={setIsMenuOpen} />   

      {/* Content */}
      <div
        className={`flex flex-col items-center justify-center py-28 md:flex-row md:flex-wrap cursor-pointer px-2 bg-slate-300 ${
          isMenuOpen ? 'hidden' : '' // Hide content when menu is open
        }`}
      >
        <div className="bg-red-400 h-[160px] border border-red-900 lg:h-80 lg:w-1/2 w-full lg:flex-1 p-6 lg:rounded transform transition duration-300 hover:scale-105">
          <p className="font-serif m-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi omnis aliquid dolorem, iste aut impedit.
          </p>
        </div>
        <div className="bg-blue-400 h-40 lg:h-80 border border-blue-900 lg:w-1/2 w-full md:w-1/2 lg:flex-1 p-6 lg:rounded transform transition duration-300 hover:scale-105">
          <p className="font-serif m-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quos sunt harum odio asperiores fugit.
          </p>
        </div>
        <div className="bg-green-400 h-40 lg:h-80 border border-green-900 lg:w-1/2 w-full md:w-1/2 lg:flex-1 p-6 lg:rounded transform transition duration-300 hover:scale-105">
          <p className="font-serif m-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quas repudiandae quaerat nam obcaecati expedita.
          </p>
        </div>
      </div>
    </>
  );
}
