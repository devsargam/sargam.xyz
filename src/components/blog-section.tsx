import React from 'react';
import Link from 'next/link';
import { getAllBlogPosts } from '@/utils/get-blog-posts';
import BookIcon from './icons/book-icon';

// Get blog posts at build time
const blogPosts = getAllBlogPosts();

function BlogSection() {
  return (
    <div className="flex flex-col gap-y-4 text-black dark:text-white w-full">
      <h2 className="font-bold text-2xl md:text-4xl tracking-tight">Blogs</h2>
      <p className="text-gray-600 dark:text-gray-400">
        My thoughts, ideas, and insights about development, design, and more
      </p>

      {blogPosts.length > 0 ? (
        <div className="flex flex-col w-full">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}
              className="dark:hover:bg-zinc-800 dark:border-zinc-800 border-2 border-zinc-800 rounded-md py-2 w-full mb-4 hover:bg-gray-50 flex flex-row items-center space-x-2 px-2"
            >
              <BookIcon />
              <span className="font-bold">{post.title}</span>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">
          I haven&apos;t written any blogs yet but I do plan to write some
          soon...
        </p>
      )}
    </div>
  );
}

export default BlogSection;
