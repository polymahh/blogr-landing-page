import Image from 'next/image';
import React from 'react';
import Headerlink from './Headerlink';
import Hero from './Hero';
// import arrowLight from '../public/icon-arrow-light.svg';
// import arrowDark from '../public/icon-arrow-dark.svg';

function Header() {
  return (
    <div className=" py-8 px-4 text-white font-ubuntu">
      <div className="flex justify-between items-center py-8 sm:py-0">
        <div>
          <Image src="/logo.svg" alt="logo" width={90} height={35} />
        </div>
        <div className="hidden gap-6 sm:flex">
          <Headerlink link="Product" />
          <Headerlink link="Company" />
          <Headerlink link="Connect" />
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
