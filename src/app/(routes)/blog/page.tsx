"use client";

import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import SortAndFilter from "@/components/Blog/SortAndFilter";
import Pagination from "@/components/Pagination";
import { useSearchParams } from "next/navigation";

export default function Blog() {
  const searchParams = useSearchParams();
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date!), new Date(b.date!))
  );

  const searchInput = searchParams.get("search");

  const filteredPosts = !searchInput
    ? posts
    : allPosts.filter((post) => {
        post.title
          .toLowerCase()
          .includes(searchInput.toLowerCase().replace("%20", " "));
      });

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
