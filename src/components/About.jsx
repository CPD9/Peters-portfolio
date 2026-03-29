import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { contactEmail, services, socialLinks } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const MailIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-5 h-5 shrink-0 text-[#915EFF]'
    aria-hidden
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
    />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox='0 0 24 24' className='w-6 h-6' fill='currentColor' aria-hidden>
    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546 1.426-1.335 1.806-1.335 1.806-1.089.745.083.729.083.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox='0 0 24 24' className='w-6 h-6' fill='currentColor' aria-hidden>
    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
  </svg>
);

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className='xs:w-[250px] w-full'
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const [photoOk, setPhotoOk] = useState(true);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='mt-10 flex flex-col lg:flex-row gap-10 lg:gap-14 items-start'>
        <div className='w-full flex justify-center lg:justify-start lg:w-auto lg:max-w-[min(100%,320px)] shrink-0'>
          {photoOk ? (
            <img
              src='/profile.jpg'
              alt='Peter Dike'
              className='w-full max-w-[280px] sm:max-w-[300px] lg:w-72 lg:max-w-none aspect-[3/4] rounded-2xl object-cover object-top border border-[#915EFF]/40 shadow-xl'
              onError={() => setPhotoOk(false)}
            />
          ) : (
            <div className='w-full max-w-[280px] aspect-[3/4] rounded-2xl bg-tertiary border border-[#915EFF]/40 flex items-center justify-center text-secondary text-sm text-center px-4'>
              Add <span className='text-white font-semibold'> public/profile.jpg</span> for your
              photo
            </div>
          )}
        </div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='flex-1 min-w-0 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[30px] space-y-5'
        >
          <p className='text-white-100'>
            Hey there! I&apos;m a skilled software developer with expertise in
            TypeScript and JavaScript, and frameworks like React, Node.js, and
            Three.js. But that&apos;s not all — I&apos;m also an entrepreneur with a
            passion for exploring the cutting edge of technology. From blockchain
            to artificial intelligence and 3D printing, I&apos;ve journeyed through
            the world of tech and emerged as a true expert.
          </p>
          <p>
            Whether you need a scalable, user-friendly solution for your business
            or a groundbreaking new project that pushes the boundaries of what&apos;s
            possible, I have the skills and expertise to help. So why not join
            forces with me today and let&apos;s bring your ideas to life? Together,
            we&apos;ll embark on a journey of innovation and discovery, exploring
            new frontiers and pushing the limits of what&apos;s possible in the world
            of technology. Let&apos;s make it happen!
          </p>
          <p className='pt-2 text-[15px] sm:text-base'>
            <span className='text-white font-medium'>Luzern</span>{" "}
            <span className='text-xl' role='img' aria-label='Switzerland'>
              🇨🇭
            </span>
          </p>
          <div className='flex flex-wrap items-center gap-x-6 gap-y-3 pt-2'>
            <a
              href={socialLinks.email}
              className='inline-flex items-center gap-2 text-[15px] sm:text-base text-white hover:text-[#915EFF] transition-colors'
            >
              <MailIcon />
              <span>{contactEmail}</span>
            </a>
            <a
              href={socialLinks.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-secondary hover:text-white transition-colors'
              aria-label='GitHub profile'
            >
              <GitHubIcon />
            </a>
            <a
              href={socialLinks.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='text-secondary hover:text-white transition-colors'
              aria-label='LinkedIn profile'
            >
              <LinkedInIcon />
            </a>
          </div>
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10 justify-center lg:justify-start'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
