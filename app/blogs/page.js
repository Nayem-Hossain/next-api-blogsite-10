import React from "react";
import BlogCard from "../components/BlogCard";
import { getPostsCategories, getPostsList } from "../lib/api";

const blogs = async () => {
    const categories = await getPostsCategories();
    const blogPostByCategory = await getPostsList(1);

    return (
        <section className="mx-10 mt-10">
            <div className="grid grid-cols-4 gap-10">
                {blogPostByCategory.map((post) => {
                    return (
                        <BlogCard key={post.id} post={post} categories={categories} />
                    );
                })}
            </div>
        </section>
    );
};

export default blogs;
