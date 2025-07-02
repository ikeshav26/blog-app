import axios from 'axios';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Profile = () => {
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

  const deleteHandler=async(e)=>{
    const id=e;
    const res=await axios.get(`http://localhost:3000/api/blog/delete/${id}`, {
      withCredentials: true,
    });
    if (res.status === 200 || res.status === 201) {
      setMyBlogs(myBlogs.filter(blog => blog._id !== id));
      toast.success("Blog deleted successfully!");
    }
    else{
      toast.error("Failed to delete blog. Please try again.");
    }

  }

  
  const username = myBlogs[0]?.author?.username || "User";
  const email = myBlogs[0]?.author?.email || "user@example.com";
  const memberSince = myBlogs[0]?.author?.createdAt
    ? new Date(myBlogs[0].author.createdAt).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : "Unknown";

  return (
    <div className="bg-base-100 text-base-content min-h-screen pt-24 px-4 md:px-12 pb-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

        {/* Sidebar Profile */}
        <div className="col-span-1 max-h-70 bg-base-200 rounded-xl p-6 shadow-md flex flex-col items-center text-center border border-base-300">
          <img
            src="/profile.jpg"
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-2 border-primary mb-4"
          />
          <h2 className="text-xl font-bold text-base-content">{username}</h2>
          <p className="text-base-content/70 text-sm mt-1">{email}</p>
          <p className="text-sm text-base-content/60 mt-2">
            👤 Member {memberSince=="Unknown" ? null:<span className="text-primary">since {memberSince}</span>}
          </p>
        </div>

        {/* Blog Section */}
        <div className="col-span-3">
          <h3 className="text-2xl font-semibold mb-6 border-b border-base-300 pb-2 text-base-content">
            📝 Blogs by {username}
          </h3>

          {myBlogs.length === 0 ? (
            <div className="text-base-content/60 text-center mt-10">
              No blogs yet. Start writing your first blog!
            </div>
          ) : (
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {myBlogs.map((blog) => (
                <Link to={`/blog/${blog._id}`} className="group" key={blog._id}>
                <div
                  className="bg-base-200 p-5 rounded-xl shadow-md hover:shadow-xl hover:border hover:border-primary hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-in-out transform flex flex-col justify-between min-h-[250px]"
                >
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-base-content group-hover:text-primary transition-colors duration-300">
                      {blog.title}
                    </h4>
                    <p className="text-sm text-base-content/70 mb-4 line-clamp-3 group-hover:text-base-content/90 transition-colors duration-300">
                      {blog.content.length > 100
                        ? blog.content.slice(0, 100) + '...'
                        : blog.content}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm mt-auto pt-2 border-t border-base-300 group-hover:border-primary/30 transition-colors duration-300">
                    <span className="text-xs text-base-content/60 group-hover:text-base-content/80 transition-colors duration-300">
                      🗓 {new Date(blog.createdAt).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <div className="flex gap-3">
                      <Link
                        to={`/edit-blog/${blog._id}`}
                        className="text-primary hover:text-primary/80 hover:scale-110 transition-all duration-200 ease-in-out"
                        onClick={(e) => e.stopPropagation()}
                      >
                        ✏️ Edit
                      </Link>
                      <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        deleteHandler(blog._id);
                      }}
                        className="text-error hover:text-error/80 hover:scale-110 transition-all duration-200 ease-in-out"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                </div></Link>
              ))}
            </div>
          
          )}
        </div>

      </div>
    </div>
  );
};

export default Profile;
