// @ts-nocheck

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { MDXProvider } from "@mdx-js/react";
import { ThemeUIProvider } from "theme-ui";
import preset from "@theme-ui/preset-tailwind";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const getPost = async (slug: string) => {
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return post;
};

export default async function Post({ params }: Params) {
  const post = await getPostBySlug(params.slug);

  return (
    <ThemeUIProvider theme={preset}>
      <div style={{ padding: "80px" }}>
        <h1>{post.title}</h1>
        <MDXProvider components={{}}>
          <MDXRemote {...post.content} />
        </MDXProvider>
      </div>
    </ThemeUIProvider>
  );
}

// export const getStaticProps = async ({ params }: Params) => {
//   const post = await getPostBySlug(params.slug);
//   // const mdxSource = await serialize(post.content);

//   return {
//     props: {
//       post: {
//         ...post,
//         content: post.content,
//       },
//     },
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const posts = await getAllPosts();

//   return {
//     paths: posts.map((post) => ({
//       params: {
//         slug: post.slug,
//       },
//     })),
//     fallback: false,
//   };
// };
