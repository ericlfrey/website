import Image from 'next/image';
import { skillsData } from '../pages/api/data';

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h2>Skills</h2>
      <div className="grid-skills">
        {skillsData?.map(skill => (
          <div className="skill-card node" key={skill.id}>
            <Image src={skill.link} alt={skill.title} height={50} width={50} />
            <p>{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
