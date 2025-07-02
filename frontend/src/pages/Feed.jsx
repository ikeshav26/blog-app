import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Feed = () => {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/blog/feed", {
          withCredentials: true,
        });
        setblogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setblogs([]);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-base-100 min-h-screen text-base-content pt-24 px-4 md:px-20 pb-20">
      <h1 className="text-4xl font-bold mb-2 text-primary text-center">
        📝 Community Blog Feed
      </h1>
      <p className="text-center text-base-content/70 mb-10 text-sm md:text-base">
        Discover ideas, stories, and insights from creators across every domain.
      </p>

      {blogs.length === 0 ? (
        <div className="text-center text-base-content/50 mt-20 text-lg">
          No blogs available. Be the first to post!
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Link to={`/blog/${blog._id}`} key={blog._id} className="group">
              <div className="bg-base-200 border border-base-300 rounded-2xl p-6 h-full hover:shadow-lg hover:border-primary transition-all duration-300 flex flex-col">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold mb-2 text-base-content group-hover:text-primary transition">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-base-content/70">
                    {blog.content.trim().length > 100
                      ? blog.content.trim().slice(0, 100) + "..."
                      : blog.content.trim()}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-base-300 text-xs text-base-content/60">
                  <span className="bg-base-300 px-2 py-1 rounded-full">
                    ✍️ {blog.author?.username || "Unknown"}
                  </span>
                  <span className="text-primary font-medium">
                    {blog.createdAt
                      ? new Date(blog.createdAt).toLocaleDateString()
                      : " Unknown Date"}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Feed;
