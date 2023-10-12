/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            My journey has been diverse, with experience as a Professional
            Musician, Festival Promoter, Home Inspector, and Handyman/Remodeler.
            Throughout these roles, I honed valuable skills in teamwork, project
            management, problem-solving, and incremental learning, which have
            seamlessly translated into my software development career. I find
            great joy in building innovative solutions to complex problems and
            collaborating with like-minded individuals. My tech stack includes
            JavaScript, React, Next.js, Python, Django, CSS, HTML, SQL, and I'm
            always eager to expand my knowledge. When not coding, you can find
            me playing the Upright Bass or working on creative projects in my
            shop. Feel free to browse my repositories and don't hesitate to get
            in touch via{' '}
            <strong>
              <a
                href="https://www.linkedin.com/in/ericlfrey"
                target="_blank"
                style={{ color: '#2fac66' }}
              >
                LinkedIn
              </a>{' '}
            </strong>
            if you want to discuss a project or just say hi!
          </p>
          <p>
            Throughout my career, I have worked on a wide range of projects,
            from simple static websites to full stack applications. I am
            experienced in working with a variety of development tools and
            frameworks, including JavaScript, React, Next.js, Python, Django. I
            am always eager to learn and explore new technologies, and I am
            constantly seeking out opportunities to improve my skills and
            knowledge.
          </p>
        </div>
        <div className="about-img">
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
        </div>
      </div>
    </div>
  );
};

export default About;
