import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const {navigate}=useContext(AppContext)

  const {id}=useParams()

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data={
      title,
      content
    }
    setTitle("");
    setContent("");
    const res=await axios.post(`http://localhost:3000/api/blog/update/${id}`, data, {
      withCredentials: true,
    });

    if (res.status === 201 || res.status === 200) {
      toast.success(res.data.message || "Blog updated successfully!");
      navigate('/profile')
    } else {
      toast.error(res.data.message || "Failed to update blog. Please try again.");
    }
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
          <h1 className="text-3xl font-bold text-primary mb-2">
            Edit Your Blog
          </h1>
          <p className="text-base-content/70">
            Make changes to your blog title and content. Keep your audience
            engaged with fresh and informative writing.
          </p>
        </div>

        {/* Edit Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block mb-1 text-sm font-medium text-base-content/70">
              Title
            </label>
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
            <label className="block mb-1 text-sm font-medium text-base-content/70">
              Content
            </label>
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
            <button type="submit" className="btn btn-primary">
              Update Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
