import { useState } from 'react';
import arrowLight from '../public/icon-arrow-light.svg';
// import arrowDark from '../public/icon-arrow-dark.svg';
import Image from 'next/image';

function Headerlink({ link }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setClicked(!clicked)}
        className="flex gap-1 items-center hover:cursor-pointer hover:underline font-ubuntu  "
      >
        {link}
        <span>
          <Image
            src={arrowLight}
            alt="lst"
            className={
              clicked ? 'rotate-180 transition-all' : 'rotate-0 transition-all'
            }
          />
        </span>
      </button>
      {clicked && (
        <div className="flex flex-col gap-2 p-4 bg-white text-Neutral-darkBlackBlue text-sm font-Overpass rounded-md absolute -left-3 top-10 w-32">
          <span className="cursor-pointer hover:font-semibold">Contact</span>
          <span className="cursor-pointer hover:font-semibold">Newsletter</span>
          <span className="cursor-pointer hover:font-semibold">LinkedIn</span>
        </div>
      )}
    </div>
  );
}
export default Headerlink;
