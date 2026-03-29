import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import PageShell from "../layout/PageShell";
import { blogPosts } from "../data/blogPosts";
import { styles } from "../styles";

const BlogList = () => {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <PageShell>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <p className={styles.sectionSubText}>Writing</p>
        <h1 className={`${styles.sectionHeadText} mb-4`}>Blog.</h1>
        <p className='text-secondary text-[17px] max-w-2xl leading-[30px] mb-12'>
          Longer notes on projects, hackathons, and tools. Sources live in{" "}
          <code className='text-white'>src/content/blog/*.md</code> if you want
          to edit copy without touching layout code.
        </p>

        <ul className='space-y-10'>
          {sorted.map((post) => (
            <li
              key={post.slug}
              className='border-b border-white/10 pb-10 last:border-0'
            >
              <p className='text-secondary text-sm'>{post.date}</p>
              <h2 className='text-white text-2xl font-bold mt-2'>
                <Link
                  to={`/blog/${post.slug}`}
                  className='hover:text-[#915EFF] transition-colors'
                >
                  {post.title}
                </Link>
              </h2>
              <p className='text-secondary mt-3 max-w-3xl'>{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className='inline-block mt-4 text-[#915EFF] font-medium'
              >
                Read →
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </PageShell>
  );
};

export default BlogList;
