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
            src="/images/frey-logo-no-bg.png"
            alt="eric frey logo"
            height={100}
            width={100}
          />
        </Link>
      </div>
      <a href="./#about">About</a>
      <a href="./#projects">Projects</a>
      <a href="./#skills">Skills</a>
      <a href="./#contact">Contact</a>
      <div className="dropdown">
        <button className="dropbtn">Resume</button>
        <div className="dropdown-content">
          <a
            href="https://www.canva.com/design/DAFU7pzn9IA/geB-AZ8qfF6QD8lW0ucS7g/view?website#2"
            target="_blank"
          >
            View
          </a>
          <a
            href="/resume/ef-resume.pdf"
            target="_blank"
            download="ef-resume.pdf"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
