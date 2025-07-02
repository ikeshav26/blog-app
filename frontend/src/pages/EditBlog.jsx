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
    <div className="bg-base-100 min-h-screen text-base-content pt-24 px-4 md:px-24 pb-16">
      <div className="max-w-4xl mx-auto">

        {/* Dummy Header Image */}
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1500&q=80"
          alt="Banner"
          className="w-full h-60 object-cover rounded-xl shadow-lg border border-base-300 mb-8"
        />

        {/* Supportive Text */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-primary mb-2">Edit Your Blog</h1>
          <p className="text-base-content/70">
            Make changes to your blog title and content. Keep your audience engaged with fresh and informative writing.
          </p>
        </div>

        {/* Edit Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Title */}
          <div>
            <label className="block mb-1 text-sm font-medium text-base-content/70">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Content */}
          <div>
            <label className="block mb-1 text-sm font-medium text-base-content/70">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
              className="textarea textarea-bordered w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="btn btn-primary"
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
