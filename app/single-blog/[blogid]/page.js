import { getPostsCategories, getPostsDetails } from '@/app/lib/api';
import Image from 'next/image';
import React from 'react';

const singleblog = async ({params}) => {
    const singleBlogId = params.blogid;
    const categories = await getPostsCategories();
    // console.log(categories)
    const post = await getPostsDetails(singleBlogId);
    const singlepost = post.postDetails;
    console.log("single post:", singlepost);
    
    return (
        <div>
            <div key={singlepost?.id} className="card bg-base-100">
            <Image
                src={singlepost?.img}
                alt="single-post"
                style={{
                    width: "100%",
                    height: "auto",
                }}
                width={500}
                height={300}
            />
            <div className="card-body ps-0">
                <h2 className="card-title hover:link">{singlepost?.title}</h2>
                <p>{singlepost?.content}</p>
                <div className="flex justify-end">
                    <div className="me-1">
                        {
                            categories.find((category) => category.id === post.id)?.name
                        }
                    </div>
                    <span>|</span>
                    <div className="ms-1">Date: {singlepost?.updated_at.slice(0, 10)}</div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default singleblog;