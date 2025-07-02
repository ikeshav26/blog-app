import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/blog/${id}`, {
          withCredentials: true,
        });
        if (res.status === 200 || res.status === 201) {
          setBlog(res.data);
        } else {
          setBlog(null);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        setBlog(null);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-base-content/70">
        Loading blog...
      </div>
    );
  }

  return (
    <div className="bg-base-100 text-base-content min-h-screen pt-20 px-4 md:px-8 pb-16">
      <div className="max-w-4xl mx-auto bg-base-200 shadow-xl rounded-xl overflow-hidden border border-base-300">

        {/* Cover Image */}
        <div className="relative h-60 md:h-96 w-full">
          <img
            src="/blog-cover.jpg"
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-base-100 to-transparent p-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-base-content">{blog.title}</h1>
          </div>
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-4 px-6 py-6 border-b border-base-300">
          <img src="/profile.jpg" alt="Author" className="w-12 h-12 rounded-full" />
          <div>
            <p className="text-base-content font-semibold text-md">
              {blog.author?.username || "Unknown Author"}
            </p>
            <p className="text-sm text-base-content/70">
              {new Date(blog.createdAt).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>

        {/* Blog Content */}
        <div className="px-6 pb-10 pt-4 text-base-content/90 leading-relaxed text-[1.05rem] space-y-5">
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
            className="inline-block text-sm text-primary hover:text-primary/80 transition"
          >
            ← Back to Feed
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
