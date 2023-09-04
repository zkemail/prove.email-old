import { GetStaticPaths, GetStaticProps } from "next";
import { Post as PostType, getAllPosts, getPostBySlug } from "../../lib/posts";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

interface PostProps {
  post: PostType;
}

type Params = {
  params: {
    slug: string;
  };
};

export default function Post({ post }: PostProps) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <div style={{ 
      padding: '0 1em', 
      width: isMobile ? '100%' : '66.66%', 
      margin: isMobile ? '0' : '0 auto' 
    }}>
      <h1>{post.title}</h1>
      <MDXRemote {...post.content} />
    </div>
  );
}

export const getStaticProps = async ({ params }: Params) => {
  const post = await getPostBySlug(params.slug);
  // const mdxSource = await serialize(post.content);

  return {
    props: {
      post: {
        ...post,
        content: post.content,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};
