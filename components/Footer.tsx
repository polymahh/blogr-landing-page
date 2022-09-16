import Image from 'next/image';
import logo from '../public/logo.svg';

function Footer() {
  return (
    <div className="grid gap-4 p-8 justify-center">
      <div className="my-8">
        <Image src={logo} alt="logo" />
      </div>
      <div className="footerList">
        <h2 className="footerH">Product</h2>
        <span>Overview</span>
        <span>Pricing</span>
        <span>Marketplace</span>
        <span>Features</span>
        <span>Integrations</span>
      </div>
      <div className="footerList ">
        <h2 className="footerH">Company</h2>
        <span>Team</span>
        <span>Blog</span>
        <span>Careers</span>
      </div>
      <div className="footerList">
        <h2 className="footerH">Connect</h2>
        <span>Contact</span>
        <span>Newsletter</span>
        <span>LinkedIn</span>
      </div>
    </div>
  );
}
export default Footer;
