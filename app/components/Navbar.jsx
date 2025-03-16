'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => setOpen(!open);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div
        onClick={handleOpenMenu}
        className="text-4xl absolute top-4 right-3 md:hidden cursor-pointer"
      >
        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
      </div>
      <div
        className={`${
          open ? 'top-20 left-0' : 'top-[-496px]'
        } flex flex-col md:flex-row md:justify-around items-center text-nowrap md:pb-0 py-3 absolute md:static bg-white md:bg-[transparent] gap-5 w-full md:w-auto pl-3 md:border-none border-2 border-blue-400 rounded-b-2xl transition-all duration-500 ease-in-out z-10`}
      >
      </div>
    </header>
  );
};

export default Header;
