import { Suspense } from 'react';
import { MarkdownRenderer } from '@/components/markdown-renderer';
import { BlogNavigation } from '@/components/blog-navigation';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { blogSchema } from '@/schema/blog';

async function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts');
  const files = fs.readdirSync(postsDirectory);

  const posts = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(postsDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);

      return {
        slug: file.replace('.md', ''),
        content,
        ...blogSchema.parse(data),
      };
    });

  return posts;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-zinc-600 dark:text-zinc-500">
        Blog Posts
      </h1>
      <BlogNavigation />
      <div className="grid gap-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border-b pb-6 dark:border-gray-800"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{post.date}</p>
            <Suspense fallback={<div>Loading...</div>}>
              <MarkdownRenderer content={post.content.slice(0, 200) + '...'} />
            </Suspense>
          </article>
        ))}
      </div>
    </main>
  );
}
