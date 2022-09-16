import Image from 'next/image';
import React from 'react';
import Headerlink from './Headerlink';
import Hero from './Hero';
// import arrowLight from '../public/icon-arrow-light.svg';
// import arrowDark from '../public/icon-arrow-dark.svg';

function Header() {
  return (
    <div className=" py-8 px-4 text-white font-ubuntu">
      <div className="flex gap-12 justify-between sm:justify-end items-center py-8 sm:py-0">
        <div>
          <Image src="/logo.svg" alt="logo" width={90} height={35} />
        </div>
        <div className="hidden gap-6 sm:flex sm:flex-grow">
          <Headerlink link="Product" />
          <Headerlink link="Company" />
          <Headerlink link="Connect" />
        </div>
        <div>
          <span className="sm:hidden">
            <Image
              src="/icon-hamburger.svg"
              alt="logo"
              width={30}
              height={15}
            />
          </span>
          <button className="hidden sm:inline-block btn bg-opacity-0 text-white ml-2  ">
            Login
          </button>
          <button className="hidden sm:inline-block btn bg-opacity-0 text-white">
            Sign Up
          </button>
        </div>
      </div>
      <Hero />
    </div>
  );
}
export default Header;
