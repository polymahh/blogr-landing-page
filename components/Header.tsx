import Image from 'next/image';
import React from 'react';
import Hero from './Hero';

function Header() {
  return (
    <div className=" py-8 px-4 text-white font-ubuntu">
      <div className="flex justify-between items-center">
        <div>
          <Image src="/logo.svg" alt="logo" width={90} height={35} />
        </div>
        <div>
          <Image src="/icon-hamburger.svg" alt="logo" width={30} height={15} />
        </div>
      </div>
      <Hero />
    </div>
  );
}
export default Header;
