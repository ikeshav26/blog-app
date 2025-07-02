import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const user = {
    name: 'Aditi Sharma',
    email: 'aditi@example.com',
    avatar: '/profile.jpg',
  };

  const [myBlogs, setMyBlogs] = useState([]);

  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/blog/my-blogs", {
          withCredentials: true,
        });
        if (res.status === 200 || res.status === 201) {
          setMyBlogs(res.data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchMyBlogs();
  }, []);

  return (
    <div className="bg-base-100 text-base-content min-h-screen pt-24 px-4 md:px-12 pb-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

        {/* Sidebar Profile */}
        <div className="col-span-1 max-h-70 bg-base-200 rounded-xl p-6 shadow-lg flex flex-col items-center text-center border border-base-300">
          <img
            src="/profile.jpg"
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-2 border-primary mb-4"
          />
          <h2 className="text-xl font-bold text-base-content">{myBlogs[0]?.author?.username}</h2>
          <p className="text-base-content/70 text-sm mt-1">{myBlogs[0]?.author?.email}</p>
          <p className="text-sm text-base-content/60 mt-2">
            👤 Blogging 
          </p>
        </div>

        {/* Blog Section */}
        <div className="col-span-3">
          <h3 className="text-2xl font-semibold mb-6 border-b border-base-300 pb-2 text-base-content">
            📝 Blogs by {myBlogs[0]?.author?.username}
          </h3>

          {myBlogs.length === 0 ? (
            <div className="text-base-content/60 text-center mt-10">
              No blogs yet. Start writing your first blog!
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {myBlogs.map((blog) => (
                <Link to={`/blog/${blog._id}`} key={blog._id}>
                  <div className="bg-base-200 p-5 rounded-lg shadow-md hover:shadow-primary/20 border border-transparent hover:border-primary transition-all duration-300 flex flex-col justify-between min-h-[240px]">
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-base-content">
                        {blog.title}
                      </h4>
                      <p className="text-sm text-base-content/70 mb-3 line-clamp-3">
                        {blog.content.length > 100
                          ? blog.content.slice(0, 100) + '...'
                          : blog.content}
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <p className="text-xs text-base-content/60">
                        🗓 {new Date(blog.createdAt).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                      <Link
                        to={`/edit-blog/${blog._id}`}
                        className="text-sm text-primary hover:underline font-medium"
                      >
                        ✏️ Edit
                      </Link>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Profile;
