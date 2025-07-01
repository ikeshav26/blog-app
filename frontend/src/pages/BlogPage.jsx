import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPage = () => {
  const { id } = useParams();

  const blog = {
    title: "Understanding JavaScript Closures",
    author: "Aditi Sharma",
    createdAt: "July 1, 2025",
    coverImage: "/blog-cover.jpg",  // in public/
    avatar: "/profile.jpg",          // in public/
    content: `
      Closures are a powerful concept in JavaScript. A closure gives you access to an outer function’s scope from an inner function.

      They are created every time a function is created, at function creation time. Closures can help manage private variables and create function factories.

      In this blog, we’ll explore how closures work with real-world examples and how you can leverage them for cleaner code.
    `
  };

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen pt-20 px-4 md:px-8 pb-16">
      
      {/* Container */}
      <div className="max-w-4xl mx-auto bg-[#181818] shadow-xl rounded-xl overflow-hidden border border-gray-800">

        {/* Cover */}
        <div className="relative h-60 md:h-96 w-full">
          <img
            src={blog.coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#181818] to-transparent p-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">{blog.title}</h1>
          </div>
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-4 px-6 py-6 border-b border-gray-700">
          <img src={blog.avatar} alt="Author" className="w-12 h-12  rounded-full " />
          <div>
            <p className="text-white font-semibold text-md">{blog.author}</p>
            <p className="text-sm text-gray-400">{blog.createdAt}</p>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-10 pt-4 text-gray-300 leading-relaxed text-[1.05rem] space-y-5">
          {blog.content
            .split('\n')
            .filter(para => para.trim())
            .map((para, i) => (
              <p key={i}>{para.trim()}</p>
            ))}
        </div>

        {/* Back Link */}
        <div className="px-6 pb-6">
          <Link
            to="/feed"
            className="inline-block text-sm text-emerald-400 hover:text-emerald-300 transition"
          >
            ← Back to Feed
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
