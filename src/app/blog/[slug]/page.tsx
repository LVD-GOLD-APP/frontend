"use client";
import { useFetchData } from "@/lib/hooks/useFetchData";
import { Blog } from "@/lib/services/types";
import React from "react";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

function BlogPage({ params }: BlogPageProps) {
  const { blogs } = useFetchData();

  const blogData = blogs.find((blog: Blog) => blog.slug === params.slug);

  return (
    <div className="max-w-[1420px] mx-auto">
      {blogData ? <div dangerouslySetInnerHTML={{ __html: blogData.description }} /> : <p>Bài viết không tồn tại</p>}
    </div>
  );
}

export default BlogPage;
