/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import { FaHamburger } from 'react-icons/fa';

const Navbar = () => {
  const handleToggle = () => {
    //toggle nav-links to show/hide
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  };
  const closeToggle = () => {
    //close nav-links when link is clicked
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('show');
  };

  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <Link href="/" onClick={closeToggle}>
            <Image
              className="logo-img"
              src="/images/frey-logo-no-bg.png"
              alt="eric frey logo"
              height={75}
              width={75}
            />
          </Link>
        </div>
        <div className="hamburger-menu">
          <button className="hamburger-btn" onClick={handleToggle}>
            <FaHamburger />
          </button>
          <ul className="nav-links">
            <li>
              <a href="./#about" onClick={handleToggle}>
                About
              </a>
            </li>
            <li>
              <a href="./#projects" onClick={handleToggle}>
                Projects
              </a>
            </li>
            <li>
              <a href="./#skills" onClick={handleToggle}>
                Skills
              </a>
            </li>
            <li>
              <a href="./#contact" onClick={handleToggle}>
                Contact
              </a>
            </li>
            <li className="dropdown-li">
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
            </li>
            <li className="resume-li">
              <a
                href="https://www.canva.com/design/DAFU7pzn9IA/geB-AZ8qfF6QD8lW0ucS7g/view?website#2"
                target="_blank"
                onClick={handleToggle}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
