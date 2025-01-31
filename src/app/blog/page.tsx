import { Suspense } from 'react';
import { MarkdownRenderer } from '@/components/markdown-renderer';
import { BlogNavigation } from '@/components/blog-navigation';
import matter from 'gray-matter';

const SAMPLE_POST = `---
title: Hello World
date: 2021-01-01
---

# Heading 1
This is a sample blog post with **markdown** support.

## Features
- Simple
- Fast
- Minimal`;

export default function BlogPage() {
  const { content, data } = matter(SAMPLE_POST);
  console.log(data);
  console.log(content);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-zinc-600 dark:text-zinc-500">
        {data.title}
      </h1>
      <BlogNavigation />
      <Suspense fallback={<div>Loading...</div>}>
        <MarkdownRenderer content={content} />
      </Suspense>
    </main>
  );
}
