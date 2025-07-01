import React, { useState } from 'react';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const blogData = {
      title,
      content,
    };

    console.log("Blog Submitted:", blogData);
    // TODO: Send to backend
  };

  return (
    <div className="bg-[#121212] min-h-screen pt-24 px-4 md:px-16 text-white">
      <div className="max-w-3xl mx-auto bg-[#1c1c1c] p-8 rounded-xl border border-gray-700">
        <h1 className="text-3xl font-bold mb-6 text-emerald-400">Create Blog</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block mb-2 text-sm">Title</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-[#121212] border border-gray-600 focus:outline-none focus:border-emerald-500"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Content */}
          <div>
            <label className="block mb-2 text-sm">Content</label>
            <textarea
              className="w-full h-48 p-3 rounded-lg bg-[#121212] border border-gray-600 focus:outline-none focus:border-emerald-500 resize-none"
              placeholder="Write blog content..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-2 rounded-full"
          >
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
