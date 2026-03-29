import { Link, useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";

import PageShell from "../layout/PageShell";
import { getPostBySlug } from "../data/blogPosts";
import { styles } from "../styles";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to='/blog' replace />;
  }

  return (
    <PageShell>
      <motion.article
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className='max-w-3xl'
      >
        <p className='text-secondary text-sm'>{post.date}</p>
        <h1 className={`${styles.sectionHeadText} mt-2 mb-6`}>{post.title}</h1>
        {post.mediumUrl && (
          <p className='text-secondary mb-8'>
            Also on Medium:{" "}
            <a
              href={post.mediumUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#915EFF]'
            >
              open article
            </a>
          </p>
        )}

        <div className='blog-md text-secondary text-[17px] leading-[30px] space-y-4'>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
        </div>

        <p className='mt-14'>
          <Link to='/blog' className='text-[#915EFF] font-medium'>
            ← Back to blog
          </Link>
        </p>
      </motion.article>
    </PageShell>
  );
};

export default BlogPost;
