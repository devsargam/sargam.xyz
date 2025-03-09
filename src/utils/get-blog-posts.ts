import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { z } from 'zod';

export interface BlogPost {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: string[];
}

export const blogSchema = z.object({
  title: z.string(),
  date: z.string(),
  tags: z.array(z.string()).optional(),
  description: z.string().optional(),
});

/**
 * Get all blog posts from content directory
 */
export function getAllBlogPosts(): BlogPost[] {
  try {
    const contentDir = path.join(process.cwd(), 'src/content');
    const files = fs.readdirSync(contentDir);

    const posts = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        const filePath = path.join(contentDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);

        const { success, data: validatedData } = blogSchema.safeParse(data);

        if (!success) {
          console.error(`Invalid frontmatter in ${file}`);
          return null;
        }

        return {
          ...validatedData,
          slug: file.replace('.md', ''),
          // Set a default description if none exists
          description:
            validatedData.description || 'Read more about this topic...',
        };
      })
      .filter(Boolean) as BlogPost[];

    // Sort by date, newest first
    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error('Error getting blog posts:', error);
    return [];
  }
}
