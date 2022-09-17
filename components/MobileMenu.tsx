import MobileLink from './MobileLink';

function MobileMenu() {
  return (
    <div className="w-[80vw] p-8 bg-white relative right-[-50%] rounded-md shadow-xl  text-center">
      <div>
        <MobileLink link="Product" />
        <MobileLink link="Company" />
        <MobileLink link="Contact" />
      </div>
      <hr />
      <button className="btn text-Primary-dark text-lg font-Overpass  ">
        Login
      </button>
      <br />
      <button className="btn px-10 bg-gradient-to-r from-Primary-veryLight to-Primary-light text-lg font-Overpass text-white">
        Sign Up
      </button>
    </div>
  );
}
export default MobileMenu;
