import React from 'react';

function Hero() {
  return (
    <div className="py-10 px-4 text-center">
      <h1 className="text-3xl py-6 ">
        A modern <br className="sm:hidden" /> publishing platform
      </h1>
      <p>Grow your audience and build your online brand</p>
      <div className="flex gap-2 justify-center py-8">
        <button className="btn">Start For Free</button>
        <button className="btn bg-opacity-0 text-white border hover:bg-white hover:text-Primary-light">
          Learn More
        </button>
      </div>
    </div>
  );
}
export default Hero;
