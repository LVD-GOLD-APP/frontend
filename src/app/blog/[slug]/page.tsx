/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
// import { Blog } from "@/lib/services/types";
import React from "react";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

function BlogPage({ params }: BlogPageProps) {
  // const blogs: Blog[] = [];

  // const blogData = blogs.find((blog: Blog) => blog.slug === params.slug);

  return (
    <div className="max-w-[1420px] mx-auto">
      <p>Bài viết không tồn tại</p>
      {/* {blogData ? <div dangerouslySetInnerHTML={{ __html: blogData.description }} /> : <p>Bài viết không tồn tại</p>} */}
    </div>
  );
}

export default BlogPage;
