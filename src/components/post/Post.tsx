// @ts-nocheck

"use client";

import { MDXProvider } from "@mdx-js/react";
import { MDXRemote } from "next-mdx-remote";
import { Post } from "contentlayer/generated";

interface PostProps {
  post: Post;
}

const Post = ({ post }: PostProps) => {
  return (
    <div style={{ padding: "80px" }}>
      <h1>{post.title}</h1>
    </div>
  );
};

export default Post;
