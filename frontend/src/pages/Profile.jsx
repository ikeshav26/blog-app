import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const user = {
    name: 'Aditi Sharma',
    email: 'aditi@example.com',
    avatar: '/profile.jpg',
  };

  const blogs = [
    {
      id: 1,
      title: 'Mastering React 18 Features',
      excerpt: 'Explore concurrent mode, automatic batching, and more in React 18...',
      createdAt: 'June 20, 2025',
    },
    {
      id: 2,
      title: 'UI/UX Principles Every Dev Should Know',
      excerpt: 'From visual hierarchy to accessibility, enhance your user interfaces...',
      createdAt: 'June 25, 2025',
    },
    {
      id: 3,
      title: 'Building Scalable MERN Apps',
      excerpt: 'Tips and tools to scale your full-stack applications effectively...',
      createdAt: 'July 1, 2025',
    },
    {
      id: 4,
      title: 'Building Scalable MERN Apps',
      excerpt: 'Tips and tools to scale your full-stack applications effectively...',
      createdAt: 'July 1, 2025',
    },
    {
      id: 5,
      title: 'Building Scalable MERN Apps',
      excerpt: 'Tips and tools to scale your full-stack applications effectively...',
      createdAt: 'July 1, 2025',
    },
    {
      id: 6,
      title: 'Building Scalable MERN Apps',
      excerpt: 'Tips and tools to scale your full-stack applications effectively...',
      createdAt: 'July 1, 2025',
    },
    {
      id: 7,
      title: 'Building Scalable MERN Apps',
      excerpt: 'Tips and tools to scale your full-stack applications effectively...',
      createdAt: 'July 1, 2025',
    },
    {
      id: 8,
      title: 'Building Scalable MERN Apps',
      excerpt: 'Tips and tools to scale your full-stack applications effectively...',
      createdAt: 'July 1, 2025',
    },
    {
      id: 9,
      title: 'Building Scalable MERN Apps',
      excerpt: 'Tips and tools to scale your full-stack applications effectively...',
      createdAt: 'July 1, 2025',
    },
  ];

  return (
    <div className="bg-base-100 text-base-content min-h-screen pt-24 px-4 md:px-12 pb-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

        {/* Sidebar Profile */}
        <div className="col-span-1 max-h-70 bg-base-200 rounded-xl p-6 shadow-lg flex flex-col items-center text-center border border-base-300">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-2 border-primary mb-4"
          />
          <h2 className="text-xl font-bold text-base-content">{user.name}</h2>
          <p className="text-base-content/70 text-sm mt-1">{user.email}</p>
          <p className="text-sm text-base-content/60 mt-2">
            👤 Blogging since <span className="text-primary">2024</span>
          </p>
        </div>

        {/* Blog Section */}
        <div className="col-span-3">
          <h3 className="text-2xl font-semibold mb-6 border-b border-base-300 pb-2 text-base-content">📝 Blogs by {user.name}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <Link to={`/blog/${blog.id}`} key={blog.id}>
              
              <div
                className="bg-base-200 p-5 rounded-lg shadow-md hover:shadow-primary/20 border border-transparent hover:border-primary transition-all duration-300 flex flex-col justify-between min-h-[240px]"
              >
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-base-content">{blog.title}</h4>
                  <p className="text-sm text-base-content/70 mb-3 line-clamp-3">{blog.excerpt}</p>
                </div>

                <div className="flex justify-between items-end">
                  <p className="text-xs text-base-content/60">🗓 {blog.createdAt}</p>
                  <Link
                    to={`/edit-blog/${blog.id}`}
                    className="text-sm text-primary hover:underline font-medium"
                  >
                    ✏️ Edit
                  </Link>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
