import { Suspense } from 'react';
import { MarkdownRenderer } from '@/components/markdown-renderer';
import { BlogNavigation } from '@/components/blog-navigation';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { z } from 'zod';
import { beautifyDate } from '@/utils/beautify-date';

interface PageProps {
  params: {
    slug: string;
  };
}

const blogSchema = z.object({
  title: z.string(),
  date: z.string(),
  tags: z.array(z.string()).optional(),
  description: z.string().optional(),
});

async function getPost(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'src/content', `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    const { success, data: validatedData, error } = blogSchema.safeParse(data);

    if (!success) {
      console.error(data);
      throw new Error('Invalid data');
    }

    return { ...validatedData, content };
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    return notFound();
  }

  const title = post.title;
  const date = beautifyDate(post.date);

  return (
    <main className="container mx-auto px-4 py-8">
      <BlogNavigation />
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
        {title}
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-4">{date}</p>
      <Suspense fallback={<div>Loading...</div>}>
        <MarkdownRenderer content={post.content} />
      </Suspense>
    </main>
  );
}
