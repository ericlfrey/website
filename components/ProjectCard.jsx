import Image from 'next/image';
import React, { useState } from 'react';

export default function ProjectCard({
  title,
  description,
  logoImg,
  gitHubLink,
  loomLink,
  deployedLink,
}) {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="project-card">
        <div
          className="project-card-hover-container"
          onMouseEnter={() => setShow(false)}
          onMouseLeave={() => setShow(true)}
        >
          {show ? (
            <Image
              className="project-card-img"
              src={logoImg}
              alt="project logo"
              width={300}
              height={300}
            />
          ) : (
            <div>
              <h3>{title}</h3>
              <p className="project-description">{description}</p>
            </div>
          )}
        </div>
        <div className="project-card-links">
          <a href={deployedLink} target="_blank">
            <i className="fa-solid fa-link"></i>
          </a>
          <a href={loomLink} target="_blank">
            <i className="fa-solid fa-video"></i>
          </a>
          <a href={gitHubLink} target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </>
  );
}
