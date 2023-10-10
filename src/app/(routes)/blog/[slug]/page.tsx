import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { Mdx } from "@/components/Blog/Mdx";

export async function generateStaticParams() {
  const posts = allPosts;

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) return notFound();

  return (
    <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-y-10 px-10">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-semibold">{post.title}</h1>
        <div className="space-y-1">
          <span className="text-sm text-muted-foreground">
            {format(new Date(post.date!), "MMMM dd, yyyy")}
          </span>
          <h3>{post.description}</h3>
        </div>
      </div>
      <Mdx code={post.body.code} />
    </div>
  );
}
