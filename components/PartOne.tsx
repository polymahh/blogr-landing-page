import React from 'react';

function PartOne() {
  return (
    <div className="my-12 grid grid-cols-2 bg-[url('/illustration-editor-desktop.svg')] bg-[length:70%] bg-right-top bg-no-repeat">
      <h1 className="title col-span-2">Designed for the future</h1>
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
      <div className="row-span-2"></div>
    </div>
  );
}
export default PartOne;
