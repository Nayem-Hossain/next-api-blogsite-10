import BlogCard from '@/app/components/BlogCard';
import { getPostsCategories, getPostsList } from '@/app/lib/api';
import React from 'react';

const blogbycategory = async ({params}) => {
    const categoryId = params.categoryid;
    const categories = await getPostsCategories();
    const blogPostByCategory = await getPostsList(categoryId);

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

export default blogbycategory;