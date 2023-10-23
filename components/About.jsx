/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

const About = () => {
  return (
    <div className="about-container" id="about">
      <h2>About Me</h2>
      <div className="about-text">
        <p>
          My journey has been diverse, with experience as a Professional
          Musician, Festival Promoter, Home Inspector, and Handyman/Remodeler.
          Throughout these roles, I honed valuable skills in teamwork, project
          management, problem-solving, and incremental learning, which have
          seamlessly translated into my software development career.
        </p>
        <p>
          In my software development career, I've been drawn to building
          innovative solutions to complex problems and collaborating with
          like-minded individuals. When not coding, you can find me playing the
          Upright Bass or working on creative projects in my shop.
        </p>
        <p>
          Throughout my career, I have worked on a wide range of projects, from
          simple static websites to full-stack applications. I am experienced in
          working with a variety of development tools and frameworks, always
          eager to learn and explore new technologies, and constantly seeking
          out opportunities to improve my skills and knowledge.
        </p>
        <p>
          Feel free to browse my repositories and don't hesitate to get in touch
          via{' '}
          <u>
            <strong>
              <a
                href="https://www.linkedin.com/in/ericlfrey"
                target="_blank"
                // style={{ color: 'blue' }}
              >
                LinkedIn
              </a>{' '}
            </strong>
          </u>
          if you want to discuss a project or just say hi!
        </p>
        {/* <div className="about-img">
          <Image
            src="/images/bass.jpeg"
            className="profile-img"
            width={300}
            height={100}
            alt="Eric Playing an upright bass"
          />
          <Image
            src="/images/desktop.png"
            className="profile-img"
            width={300}
            height={100}
            alt="Rubber Duck and Friends"
          />
        </div> */}
      </div>
    </div>
  );
};

export default About;
