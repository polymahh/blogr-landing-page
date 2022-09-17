import Image from 'next/image';
import React from 'react';
import img1 from '../public/illustration-laptop-mobile.svg';

function PartThree() {
  return (
    <div className="partThree mt-20 mb-20 pt-4  sm:grid sm:grid-cols-2 items-center relative bg-opacity-0 maxw  ">
      <div className="sm:hidden">
        <Image src={img1} alt="image" />
      </div>
      <div className="row-span-2"></div>
      <div>
        <h1 className="title col-span-2">Free, open, simple</h1>
        <p className="paragraph">
          Blogr is a free and open source application backed by a large
          community of helpful developers.It supports features such as code
          syntax highlighting, RSS feeds, social media intergration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
        <h1 className="title">Powerful tooling</h1>
        <p className="paragraph">
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </div>
    </div>
  );
}
export default PartThree;
