import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    const blogData = {
      title,
      content,
    };

    setTitle("");
    setContent("");

    const res=await axios.post("http://localhost:3000/api/blog/create", blogData, {
      withCredentials: true,
    });

    if (res.status === 201 || res.status === 200) {
      toast.success(res.data.message || "Blog created successfully!");
    }else{
      toast.error(res.data.message || "Failed to create blog. Please try again.");
    }
  };

  return (
    <div className="bg-base-100 min-h-screen pt-24 px-4 md:px-16 text-base-content">
      <div className="max-w-6xl mx-auto bg-base-200 p-8 rounded-xl border border-base-300 grid md:grid-cols-2 gap-10 items-center">
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
            alt="Writing Setup"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Form Section */}
        <div>
          <h1 className="text-3xl font-bold mb-6 text-primary">
            Create Blog
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-sm text-base-content/70">Title</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-base-content/70">Content</label>
              <textarea
                className="textarea textarea-bordered w-full h-48 resize-none"
                placeholder="Write blog content..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Publish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
