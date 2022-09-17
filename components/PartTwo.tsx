import Image from 'next/image';
import React from 'react';
import img1 from '../public/illustration-phones.svg';

function PartTwo() {
  return (
    <div
      className="bg-Primary-dark bg-[url('/bg-pattern-circles.svg')] bg-[left_50%_top_90%] bg-no-repeat pb-20 sm:pb-0 rounded-bl-[80px] 
    rounded-tr-[80px] "
    >
      <div className=" bg-[right_-40px_top_-160px] grid sm:grid-cols-2 sm:mt-8 mt-12 maxw sm:pl-12 ">
        <div className="-mt-56 sm:-mt-4 sm:-mb-4 sm:scale-125  ">
          <Image
            src={img1}
            alt="image"
            objectPosition="top right"
            layout="responsive"
            objectFit="contain"
          />
        </div>

        <div className="sm:py-20">
          <h1 className="title text-white pt-4">
            State of the Art Infrastructure
          </h1>
          <p className="paragraph text-neutral-400">
            With reliability and speed in mind, worldwide for ultra-fast
            connectivity. This ensures your site will load instantly, no matter
            where your readers are, keeping your site competitive.
          </p>
        </div>
      </div>
    </div>
  );
}
export default PartTwo;
