/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          <Image
            className="logo-img"
            src="/images/green-logo.png"
            alt="eric frey logo"
            height={100}
            width={100}
          />
        </Link>
      </div>
      <a
        href="https://www.canva.com/design/DAFU7pzn9IA/geB-AZ8qfF6QD8lW0ucS7g/view"
        className="cta-btn"
        target="_blank"
      >
        Resume
      </a>
    </div>
  );
};

export default Navbar;
