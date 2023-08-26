import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export interface Post {
  slug: string;
  title: string;
  date: string;
  content: any;
}

export function getAllPosts(): Post[] {
  const posts = fs.readdirSync('posts');

  return posts.map(filename => {
    const markdownWithMeta = fs.readFileSync(`posts/${filename}`);

    const { data } = matter(markdownWithMeta);

    const mdxSource = serialize(data.content);

    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
      content: mdxSource
    };
  });
}

export function getPostBySlug(slug: string): Post {
  const filePath = path.join('posts', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContents);

  return {
    slug: slug,
    title: data.title,
    date: data.date,
    content: content
  };
}