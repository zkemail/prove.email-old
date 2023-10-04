import { serialize } from "next-mdx-remote/serialize";

import { Post, getAllPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import PostSegment from "@/components/post/Post";

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) notFound();

  return <PostSegment post={post} />;
}
