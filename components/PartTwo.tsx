import Image from 'next/image';
import React from 'react';
import img1 from '../public/illustration-phones.svg';

function PartTwo() {
  return (
    <>
      <div className="relative bg-Neutral-darkBlackBlue bg-[url('/bg-pattern-circles.svg')] bg-cover pb-16 rounded-bl-[80px] rounded-tr-[80px] flex flex-col mt-60 ">
        <div className="-mt-60">
          <Image src={img1} alt="image" />
        </div>
        <h1 className="title text-white pt-0">
          State of the Art Infrastructure
        </h1>
        <p className="paragraph text-white">
          With reliability and speed in mind, worldwide for ultra-fast
          connectivity. This ensures your site will load instantly, no matter
          where your readers are, keeping your site competitive.
        </p>
      </div>
    </>
  );
}
export default PartTwo;
