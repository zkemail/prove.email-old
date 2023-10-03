import Link from "next/link";
import { GetStaticProps } from "next";
import { Post, getAllPosts } from "../../../../lib/posts";

interface Props {
  posts: Post[];
}

export default function Blog({ posts }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <h1 style={{ fontSize: '2em', fontWeight: 'bold' }}>Blog</h1>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map((post) => (
          <li key={post.slug} style={{ margin: '10px 0' }}>
            <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'blue' }}>
              <h2 style={{ fontSize: '1.5em' }}>{post.title}</h2>
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
