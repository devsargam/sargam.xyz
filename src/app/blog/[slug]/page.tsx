import { Suspense } from 'react';
import { MarkdownRenderer } from '@/components/markdown-renderer';
import { BlogNavigation } from '@/components/blog-navigation';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  try {
    const filePath = path.join(
      process.cwd(),
      'src/app/blog/posts',
      `${slug}.md`
    );
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return { ...data, content };
  } catch (error) {
    return null;
  }
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-zinc-600 dark:text-zinc-500">
        {post.title}
      </h1>
      <BlogNavigation />
      <Suspense fallback={<div>Loading...</div>}>
        <MarkdownRenderer content={post.content} />
      </Suspense>
    </main>
  );
}
