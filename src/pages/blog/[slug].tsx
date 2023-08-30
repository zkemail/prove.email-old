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
  return (
    <div>
      <MDXRemote {...post.content} />
    </div>
  );
}

export const getStaticProps = async ({ params }: Params) => {
  const post = getPostBySlug(params.slug);
  const mdxSource = await serialize(post.content);

  return {
    props: {
      post: {
        ...post,
        content: mdxSource,
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
