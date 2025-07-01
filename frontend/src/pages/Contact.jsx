import React, { useState } from "react";

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
    console.log("Submitted contact form:", form);
    alert("Your message has been sent to the admin.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen pt-24 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading & Description */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-emerald-400">
            Need Help? Contact Admin
          </h1>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
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
          <div className="bg-[#1c1c1c] p-8 rounded-xl border border-gray-700 shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#121212] border border-gray-600 focus:outline-none focus:border-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#121212] border border-gray-600 focus:outline-none focus:border-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#121212] border border-gray-600 focus:outline-none focus:border-emerald-500 resize-none h-32"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-2 rounded-full"
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
