import { useState } from 'react';
import arrowLight from '../public/icon-arrow-dark.svg';
// import arrowDark from '../public/icon-arrow-dark.svg';
import Image from 'next/image';

function MobileLink({ link }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="relative mb-6 ">
      <button
        onClick={() => setClicked(!clicked)}
        className="flex gap-1 items-center m-auto  font-Overpass font-semibold text-Primary-dark "
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
        <div className="flex flex-col gap-2 p-4 justify-center items-center bg-neutral-200 text-Neutral-darkGrayishBlue text-sm font-Overpass font-semibold rounded-md mx-auto ">
          <span className="cursor-pointer hover:font-semibold">Contact</span>
          <span className="cursor-pointer hover:font-semibold">Newsletter</span>
          <span className="cursor-pointer hover:font-semibold">LinkedIn</span>
        </div>
      )}
    </div>
  );
}
export default MobileLink;
