import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = async ({ post, categories }) => {
    console.log("post :",post)
    console.log("categories :", categories)
    return (
        <div key={post.id} className="card bg-base-100">
            <Image
                src={post.img}
                alt="blog=post1"
                style={{
                    width: "100%",
                    height: "auto",
                }}
                width={500}
                height={300}
            />
            <div className="card-body ps-0">
                <Link href={`/single-blog/${post.id}`}><h2 className="card-title hover:link">{post.title}</h2></Link>
                <p>{post.short}</p>
                <div className="flex justify-end">
                    <div className="me-1">
                        {
                            categories.find((category) => category.id === post.category_id).name
                        }
                    </div>
                    <span>|</span>
                    <div className="ms-1">Date: {post.updated_at.slice(0, 10)}</div>
                </div>
            </div>
        </div>

    );
};

export default BlogCard;