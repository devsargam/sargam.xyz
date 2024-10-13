import React from 'react';

const mockBlogs = [];

function BlogSection() {
  return (
    <div className="flex flex-col gap-y-4 text-black dark:text-white w-full">
      <h2 className="font-bold text-2xl md:text-4xl tracking-tight">Blogs</h2>
      {mockBlogs.length > 0 ? null : (
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I haven&apos;t written any blogs yet but I do plan to write some
          soon...
        </p>
      )}
    </div>
  );
}

export default BlogSection;
