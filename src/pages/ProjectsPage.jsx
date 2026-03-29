import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import PageShell from "../layout/PageShell";
import { projects } from "../constants";
import { styles } from "../styles";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <PageShell>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <p className={styles.sectionSubText}>My work</p>
        <h1 className={`${styles.sectionHeadText} mb-4`}>All projects.</h1>
        <p className='text-secondary text-[17px] max-w-3xl leading-[30px] mb-4'>
          Same project cards as the home page — useful for sharing a direct
          link. For narrative context, pair with posts in the{" "}
          <Link to='/blog' className='text-[#915EFF]'>
            blog
          </Link>
          .
        </p>
        <p className='mb-12'>
          <Link to='/' className='text-white underline'>
            ← Back to home
          </Link>
        </p>

        <div className='flex flex-wrap gap-7'>
          {projects.map((project, index) => (
            <ProjectCard key={`all-${project.name}`} index={index} {...project} />
          ))}
        </div>
      </motion.div>
    </PageShell>
  );
};

export default ProjectsPage;
