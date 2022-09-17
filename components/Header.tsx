import Image from 'next/image';
import React, { useState } from 'react';
import Headerlink from './Headerlink';
import Hero from './Hero';
import close from '../public/icon-close.svg';
import MobileMenu from './MobileMenu';

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className=" py-8 px-4 text-white font-ubuntu maxw">
      <div className="flex gap-12 justify-between sm:justify-end items-center py-8 sm:py-0">
        <div>
          <Image src="/logo.svg" alt="logo" width={90} height={35} />
        </div>
        <div className="hidden gap-6 sm:flex sm:flex-grow relative">
          <Headerlink link="Product" />
          <Headerlink link="Company" />
          <Headerlink link="Connect" />
        </div>
        <div>
          <span onClick={() => setIsVisible(!isVisible)} className="sm:hidden">
            {isVisible ? (
              <Image src={close} alt="close" />
            ) : (
              <Image
                src="/icon-hamburger.svg"
                alt="ham"
                width={30}
                height={15}
              />
            )}
          </span>
          <button className="hidden sm:inline-block btn bg-opacity-0 text-white mr-2  ">
            Login
          </button>
          <button className="hidden sm:inline-block btn  text-Primary-light">
            Sign Up
          </button>
        </div>
        {isVisible && (
          <div className="absolute top-28 right-[50vw]">
            <MobileMenu />
          </div>
        )}
      </div>
      <Hero />
    </div>
  );
}
export default Header;
