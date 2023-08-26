// pages/[page].tsx
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import MainPage from '@/components/MainPage';
import Blog from '@/components/Blog';
import { Post, getAllPosts } from '../lib/posts';

interface Props {
  posts: Post[];
}

const Page = ({ posts }: Props) => {
  const router = useRouter();
  const { page } = router.query;

  switch (page) {
    case 'home':
      return <MainPage />;
    case 'blog':
      return <Blog posts={posts} />;
    default:
      return <div>Page not found</div>;
  }
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts }
  };
}

export default Page;