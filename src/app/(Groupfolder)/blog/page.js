"use client";

import BlogCard from "@/components/BlogCard";
import { blogs } from "@/constant/index";

const page = () => {
  return (
    <section className="flex items-center justify-start min-h-screen py-4 ">
      <div className="gap-[30px] flex flex-col md:flex-row  mx-auto">
        {blogs.map((blog, index) => (
          <BlogCard key={blog.index} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default page;
