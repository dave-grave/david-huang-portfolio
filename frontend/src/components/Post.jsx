import React from "react";
import { useParams } from "react-router-dom";
import posts from "../data/posts";
import Footer from "./Footer";

function Post() {
  const { postId } = useParams();
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto py-10 font-inter">Post not found.</div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow max-w-3xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 dark:text-gray-300">{post.content}</p>
      </div>
      <Footer />
    </div>
  );
}

export default Post;
