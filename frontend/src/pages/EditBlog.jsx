import React, { useState } from 'react';

const EditBlog = () => {
  const [title, setTitle] = useState('The Future of Frontend Development');
  const [content, setContent] = useState(
    'Frontend technologies are evolving rapidly. In this blog, we explore what the future holds, including frameworks, performance, and user experience trends...'
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated blog:', { title, content });
  };

  return (
    <div className="bg-[#0e0e0e] min-h-screen text-white pt-24 px-4 md:px-24 pb-16">
      <div className="max-w-4xl mx-auto">

        {/* Dummy Header Image */}
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1500&q=80"
          alt="Banner"
          className="w-full h-60 object-cover rounded-xl shadow-lg border border-gray-800 mb-8"
        />

        {/* Supportive Text */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-emerald-400 mb-2">Edit Your Blog</h1>
          <p className="text-gray-400">
            Make changes to your blog title and content. Keep your audience engaged with fresh and informative writing.
          </p>
        </div>

        {/* Edit Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Title */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#1a1a1a] text-white p-3 rounded-md border border-gray-700 focus:ring-2 focus:ring-emerald-500 outline-none"
              required
            />
          </div>

          {/* Content */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
              className="w-full bg-[#1a1a1a] text-white p-3 rounded-md border border-gray-700 focus:ring-2 focus:ring-emerald-500 outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-full shadow"
            >
              Update Blog
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditBlog;
