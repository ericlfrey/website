/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="/images/profile.jpg"
        className="profile-img"
        width={400}
        height={400}
        alt="eric personal headshot"
        priority
      />
      <div className="hero-text">
        <h1>Howdy! I'm Eric Frey</h1>
        <p>I'm a software developer based in Nashville, Tennessee.</p>
        <p>Welcome to my portfolio site!</p>
        <div className="social-icons">
          <a
            href="https://github.com/ericlfrey"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ericlfrey/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
