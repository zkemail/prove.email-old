"use client";

import { MDXProvider } from "@mdx-js/react";
import { MDXRemote } from "next-mdx-remote";
import { Post } from "@/lib/posts";

interface PostProps {
  post: Post;
}

const Post = ({ post }: PostProps) => {
  return (
    <div style={{ padding: "80px" }}>
      <h1>{post.title}</h1>
      <MDXProvider components={{}}>
        <MDXRemote {...post.content} />
      </MDXProvider>
    </div>
  );
};

export default Post;
