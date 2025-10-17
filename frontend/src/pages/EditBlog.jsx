import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const { navigate } = useContext(AppContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/${id}`, {
          withCredentials: true,
        });
        if (res.status === 200 || res.status === 201) {
          setTitle(res.data.title);
          setContent(res.data.content);
        } else {
          toast.error(res.data.message || "Failed to fetch blog data.");
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
        toast.error("Error fetching blog data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = {
        title,
        content,
      };

      const res = await axios.post(
        `https://blog-app-te1y.onrender.com/api/blog/update/${id}`,
        data,
        {
          withCredentials: true,
        }
      );

      if (res.status === 201 || res.status === 200) {
        toast.success(res.data.message || "Blog updated successfully!");
        navigate("/profile");
      } else {
        toast.error(res.data.message || "Failed to update blog. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
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

        {/* Show loader while fetching */}
        {loading ? (
          <div className="flex justify-center py-12">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
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
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="loading loading-spinner loading-sm"></span>
                    Updating...
                  </span>
                ) : (
                  "Update Blog"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditBlog;
