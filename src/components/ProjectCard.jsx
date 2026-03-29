import React from "react";
import { useNavigate } from "react-router-dom";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { github } from "../assets";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  coverGradient,
  coverLabel,
  source_code_link,
  privateRepo,
  pipelineImage,
  pipelineCaption,
  blogSlug,
}) => {
  const showGradient =
    Array.isArray(coverGradient) && coverGradient.length >= 2;
  const navigate = useNavigate();

  const openRepo = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (source_code_link) window.open(source_code_link, "_blank");
  };

  const goToBlog = () => {
    if (blogSlug) navigate(`/blog/${blogSlug}`);
  };

  const handleCardKeyDown = (e) => {
    if (!blogSlug) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      goToBlog();
    }
  };

  return (
    <div className='w-full sm:w-[360px] flex flex-col gap-4'>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <div
          role={blogSlug ? "link" : undefined}
          tabIndex={blogSlug ? 0 : undefined}
          onClick={blogSlug ? goToBlog : undefined}
          onKeyDown={handleCardKeyDown}
          className={
            blogSlug
              ? "cursor-pointer rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#915EFF] focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              : ""
          }
        >
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-tertiary p-5 rounded-2xl w-full'
          >
            <div className='relative w-full h-[230px]'>
              {showGradient ? (
                <div
                  className='w-full h-full rounded-2xl relative overflow-hidden flex items-center justify-center'
                  style={{
                    background: `linear-gradient(135deg, ${coverGradient[0]}, ${coverGradient[1]})`,
                  }}
                >
                  <div
                    className='pointer-events-none absolute inset-0 opacity-[0.4]'
                    style={{
                      background:
                        "radial-gradient(ellipse 85% 55% at 20% 25%, rgba(255,255,255,0.14) 0%, transparent 52%), radial-gradient(ellipse 70% 50% at 85% 75%, rgba(145,94,255,0.22) 0%, transparent 48%)",
                    }}
                  />
                  <div className='pointer-events-none absolute inset-0 opacity-[0.4] bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[length:22px_22px]' />
                  <span className='relative z-[1] text-center font-black text-white text-2xl sm:text-[1.65rem] tracking-tight drop-shadow-md px-4 leading-tight'>
                    {coverLabel}
                  </span>
                </div>
              ) : (
                <img
                  src={image}
                  alt={name}
                  className='w-full h-full object-cover object-center rounded-2xl'
                />
              )}

              <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                {privateRepo ? (
                  <div
                    className='backdrop-blur-md bg-black/45 border border-white/15 w-auto px-3 h-10 rounded-full flex justify-center items-center text-white/90 text-xs font-semibold z-10 shadow-lg'
                    onClick={(e) => e.stopPropagation()}
                  >
                    Private repo
                  </div>
                ) : (
                  <div
                    onClick={openRepo}
                    onKeyDown={(e) => e.stopPropagation()}
                    className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-10'
                    role='button'
                    tabIndex={0}
                    aria-label='Open GitHub repository'
                  >
                    <img
                      src={github}
                      alt='source code'
                      className='w-1/2 h-1/2 object-contain pointer-events-none'
                    />
                  </div>
                )}
              </div>
            </div>

            <div className='mt-5'>
              <h3 className='text-white font-bold text-[24px]'>{name}</h3>
              <p className='mt-2 text-secondary text-[14px]'>{description}</p>
              {blogSlug && (
                <p className='mt-2 text-[#915EFF] text-xs font-semibold'>
                  Read story →
                </p>
              )}
            </div>

            <div className='mt-4 flex flex-wrap gap-2'>
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>

            {pipelineImage && (
              <div className='mt-6 rounded-xl overflow-hidden border border-white/10 bg-black-100/50'>
                <img
                  src={pipelineImage}
                  alt={`${name} — pipeline diagram`}
                  className='w-full h-auto object-contain'
                />
                {pipelineCaption && (
                  <p className='text-secondary text-xs px-3 py-2 leading-relaxed'>
                    {pipelineCaption}
                  </p>
                )}
              </div>
            )}
          </Tilt>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
