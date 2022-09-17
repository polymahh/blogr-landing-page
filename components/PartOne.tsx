import Image from 'next/image';
import img1 from '../public/illustration-editor-mobile.svg';
import React from 'react';

function PartOne() {
  return (
    <div className="partOne mt-12 pt-4 pb-[32vh] sm:pb-14 sm:grid sm:grid-cols-2  relative bg-opacity-0 maxw  ">
      <h1 className="title col-span-2 sm:text-center">
        Designed for the future
      </h1>
      <div className="sm:hidden sm:row-span-2 flex justify-center ">
        <Image src={img1} alt="img" />
      </div>
      <div>
        <h1 className="title">Itroduction an extensible editor</h1>
        <p className="paragraph">
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content.The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>
        <h1 className="title">Robust content management</h1>
        <p className="paragraph">
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          catagories, sections, format, or flow. With this functionality,
          you&apos;re in full control.
        </p>
      </div>
      <div className="row-span-2 "></div>
    </div>
  );
}
export default PartOne;
