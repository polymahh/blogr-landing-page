import Image from 'next/image';
import React from 'react';
import img1 from '../public/illustration-editor-mobile.svg';

function PartOne() {
  return (
    <div className="my-12">
      <h1 className="title">Designed for the future</h1>
      <div>
        <Image src={img1} alt="image" />
      </div>
      <h1 className="title">Itroduction an extensible editor</h1>
      <p className="paragraph">
        Blogr features an exceedingly intuitive interface which lets you focus
        on one thing: creating content.The editor supports management of
        multiple blogs and allows easy manipulation of embeds such as images,
        videos, and Markdown. Extensibility with plugins and themes provide easy
        ways to add functionality or change the looks of a blog.
      </p>
      <h1 className="title">Robust content management</h1>
      <p className="paragraph">
        Flexible content management enables users to easily move through posts.
        Increase the usability of your blog by adding customized catagories,
        sections, format, or flow. With this functionality, you&apos;re in full
        control.
      </p>
    </div>
  );
}
export default PartOne;
