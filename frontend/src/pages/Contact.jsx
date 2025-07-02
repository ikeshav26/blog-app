import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your message has been sent to the admin.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-base-100 text-base-content min-h-screen pt-24 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading & Description */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-primary">
            Need Help? Contact Admin
          </h1>
          <p className="text-base-content/70 mt-2 max-w-2xl mx-auto">
            Facing an issue? Have a suggestion? Fill out the form and our team
            will get back to you shortly.
          </p>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="hidden md:block">
            <img
              src="/contact.jpg"
              alt="Contact Us"
              className="w-full max-w-xs mx-auto filter brightness-75 contrast-90"
            />
          </div>

          {/* Right Form */}
          <div className="bg-base-200 p-8 rounded-xl border border-base-300 shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-base-content">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm text-base-content/70">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-base-content/70">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-base-content/70">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full h-32 resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
