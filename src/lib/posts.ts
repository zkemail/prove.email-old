import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export interface Post {
  slug: string;
  title: string;
  date: string;
  content: any;
}

export async function getAllPosts(): Promise<Post[]> {
  const root = process.cwd();
  const postsPath = path.join(root, "posts");
  const posts = fs.readdirSync(postsPath);

  const processedPosts = await Promise.all(
    posts.map(async (filename) => {
      const markdownWithMeta = fs.readFileSync(`posts/${filename}`);

      const { data } = matter(markdownWithMeta);

      const mdxSource = await serialize(data.content);

      return {
        slug: filename.replace(".md", ""),
        title: data.title,
        date: data.date.toISOString(),
        content: mdxSource,
      };
    })
  );
  return processedPosts;
}

export function getPostBySlug(slug: string): Post {
  const filePath = path.join("posts", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug: slug,
    title: data.title,
    date: data.date.toISOString(),
    content: content,
  };
}
