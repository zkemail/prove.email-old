import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col items-center gap-[20px] mt-24">
      <h1 style={{ fontSize: "2em", fontWeight: "bold" }}>Blog</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li key={post.slug} className="my-[10px]">
            <Link
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none", color: "blue" }}
            >
              <h2 style={{ fontSize: "1.5em" }}>{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
