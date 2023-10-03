import React from "react";

export async function generateStaticParams() {
    const posts = [{ slug: "1" }];
  
    return posts.map((post) => ({
      slug: post.slug,
    }));
  }

const Testpage = () => {
  return <div>Testpage</div>;
};

export default Testpage;
