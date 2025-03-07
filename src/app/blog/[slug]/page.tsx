import React from "react";

interface BlogPageProps {
  params: {
    blog: string;
  };
}

function BlogPage({ params }: BlogPageProps) {
  console.log(params);
  return <div>Blog: {params.blog}</div>;
}

export default BlogPage;
