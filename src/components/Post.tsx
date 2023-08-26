import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Post, getAllPosts, getPostBySlug } from '../lib/posts';
import { serialize } from 'next-mdx-remote/serialize';

interface PostProps {
    post: Post;
}

type Params = {
    params: {
      slug: string;
    }
}
  
export function Post({ post }: PostProps) {
    const { content } = post;

    return (
        <div>
        <MDXRemote {...content} />
        </div>
    );
}

export async function getStaticProps({ params }: Params) {
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
}