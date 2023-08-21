import Image from "next/image";
import { getNewestPosts, getPostsCategories } from "./lib/api";
import Link from "next/link";

export default async function Home() {
  const categories = await getPostsCategories();
  const newest = await getNewestPosts();
  // console.log("Newest: ", newest);
  // { id, title, img, short, category_id, created_at, updated_at }

  return (
    <div className="bg-white">
      <section className="text-center">
        <p className="pt-20 pb-4">
          <small>Our blog</small>
        </p>
        <h1 className="text-3xl font-bold">
          Stories <i>and</i> Interviews
        </h1>
        <p className="py-8">
          Subscribes to read new updates about different categories.
        </p>
        <div className="join">
          <input
            className="input input-bordered join-item"
            placeholder="Email"
          />
          <button className="btn btn-outline join-item rounded">
            Subscribe
          </button>
        </div>
      </section>

      <section className="mx-10 mt-20">
        <p className="text-xl font-bold pb-10">Recent blog posts</p>
        <div className="grid grid-cols-2 gap-10">
          <div>
            {newest.slice(0, 1).map((post) => {
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
                    <Link href={`/single-blog/${post.id}`}>
                      <h2 className="card-title hover:link">
                        {post.title}
                        <div className="badge badge-secondary rounded-full">NEW</div>
                      </h2>
                    </Link>
                    <p>{post.short}</p>
                    <div className="flex justify-end">
                      <div className="badge">{categories.find(category => category.id === post.category_id).name}</div>
                      <span>|</span>
                      <div className="badge">Date: {post.updated_at.slice(0, 10)}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            {newest.slice(1, 4).map((post) => {
              return (
                <div key={post.id} className="card lg:card-side bg-base-100 mb-4">
                  <div>
                    <Image
                      src={post.img}
                      alt='blog-post2'
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      width={500}
                      height={300}
                    />
                  </div>
                  <div className="card-body pt-0">
                    <Link href={`/single-blog/${post.id}`}>
                      <h2 className="card-title hover:link">{post.title}</h2>
                    </Link>
                    <p>{post.short}</p>
                    <div className="flex justify-end">
                      <div className="me-1">{categories.find(category => category.id === post.category_id).name}</div>
                      <span>|</span>
                      <div className="ms-1">Date: {post.updated_at.slice(0, 10)}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-10 mt-20">
        <p className="text-xl font-bold pb-10">All blog posts</p>
        <div>
          <div className="grid grid-cols-4 gap-10">
            {newest.map((post) => {
              return (
                <div key={post.id} className="card bg-base-100">
                  <Image
                    src={post.img}
                    alt="blog=post3"

                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    width={500}
                    height={300}
                  />
                  <div className="card-body ps-0">
                  <Link href={`/single-blog/${post.id}`}>
                      <h2 className="card-title hover:link">{post.title}</h2>
                    </Link>
                    <p>{post.short}</p>
                    <div className="flex justify-end">
                      <div className="badge">{categories.find(category => category.id === post.category_id).name}</div>
                      <span>|</span>
                      <div className="badge">Date: {post.updated_at.slice(0, 10)}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
