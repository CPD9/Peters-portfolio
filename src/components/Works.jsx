import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Selected repositories and builds — hackathons, research, and client
          work. Each card links to GitHub where the repo is public. For longer
          write-ups, see the{" "}
          <Link to='/blog' className='text-white underline'>
            blog
          </Link>
          .{" "}
          <Link to='/projects' className='text-[#915EFF] font-semibold ml-1'>
            View all projects →
          </Link>
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 relative z-20'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
