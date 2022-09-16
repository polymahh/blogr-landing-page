import { useState } from 'react';
import arrowLight from '../public/icon-arrow-light.svg';
// import arrowDark from '../public/icon-arrow-dark.svg';
import Image from 'next/image';

function Headerlink({ link }) {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => setClicked(!clicked)}
      className="flex gap-1 items-center hover:cursor-pointer font-ubuntu "
    >
      {link}
      <span>
        <Image src={arrowLight} alt="lst" />
      </span>
    </button>
  );
}
export default Headerlink;
