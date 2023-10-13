import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import SortAndFilter from "@/components/Blog/SortAndFilter";
import Pagination from "@/components/Pagination";

interface BlogProps {
  searchParams: { search: string; recommended: boolean; newest: boolean };
}

export default function Blog({ searchParams }: BlogProps) {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date!), new Date(b.date!))
  );

  const filteredPosts = !searchParams.search
    ? posts
    : allPosts.filter((post) =>
        post.title
          .toLowerCase()
          .includes(searchParams.search.toLowerCase().replace("%20", " "))
      );

  return (
    <div className="flex flex-col items-center mt-24">
      <h1 className="md:text-5xl text-3xl font-semibold mb-16">BLOG</h1>

      <div className="flex mr-auto gap-x-12 w-full">
        <SortAndFilter />
        <Pagination posts={filteredPosts} />
      </div>
    </div>
  );
}
