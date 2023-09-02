import Link from "next/link";
import { GetStaticProps } from "next";
import { Post, getAllPosts } from "../../lib/posts";

interface Props {
  posts: Post[];
}

export default function Blog({ posts }: Props) {
  return (
    <div>
      <h1>Blog</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <span>{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: { posts },
  };
};
