import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/posts";

function Blog() {
  return (
    <div className="max-w-3xl mx-auto py-10 font-inter">
      <h1 className="pt-7 text-center text-4xl font-bold mb-6">Recent Posts</h1>

      {posts.map((post) => (
        <div
          key={post.id}
          className="mb-6 p-4 border dark:border-gray-700 rounded-lg"
        >
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            {post.content}
          </p>
          <Link
            to={`/blog/${post.id}`}
            className="mt-4 inline-block text-blue-500 dark:text-blue-400 hover:underline"
          >
            Read More...
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;
