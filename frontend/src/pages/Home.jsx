import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const blogPosts = [
  {
    title: "Mastering React in 2025",
    content: "Learn how to use the latest React features and patterns for modern web development...",
    author: "Dev Guru",
    time: "2 days ago"
  },
  {
    title: "Mental Health in Tech",
    content: "Explore how developers can maintain mental well-being while staying productive in a fast-paced world...",
    author: "Kavya Sharma",
    time: "3 hours ago"
  },
  {
    title: "The Future of AI & Blogging",
    content: "AI is transforming content creation. Find out how bloggers can adapt and thrive with these tools...",
    author: "AI Bot",
    time: "Just now"
  }
];

  return (
    <div className="bg-[#121212] text-white min-h-screen pt-20 px-4 md:px-16">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-12 gap-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Discover Ideas, <br /> Share Your Voice.
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Dive into stories that inspire. Publish your own and build your identity.
          </p>
          <div className="mt-6 flex gap-4">
            <Link to="/feed" className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-medium">
              Explore Blogs
            </Link>
            <Link to="/create-blog" className="px-5 py-2.5 border border-gray-600 text-white hover:bg-gray-800 rounded-full font-medium">
              Write a Blog
            </Link>
          </div>
        </div>

        {/* ✅ Working Dark-Themed Hero Image */}
        <img
          src="/hero.jpg"
          alt="Blogging Visual"
          className="w-full max-w-lg rounded-xl shadow-lg"
        />
      </section>

      {/* Why BitBlog Section */}
      <section className="mt-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Why BitBlog?</h2>
        <p className="text-gray-400 text-lg">
          We believe everyone has a story to tell. Whether you're a techie, traveler, or thinker — BitBlog helps you share your voice with the world.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-[#1c1c1c] p-6 rounded-xl border border-gray-700 hover:border-emerald-500 transition">
            <h3 className="text-xl font-semibold mb-2">🧠 Thoughtful Writing</h3>
            <p className="text-gray-400">Clean and distraction-free editor to focus on what matters — your words.</p>
          </div>
          <div className="bg-[#1c1c1c] p-6 rounded-xl border border-gray-700 hover:border-emerald-500 transition">
            <h3 className="text-xl font-semibold mb-2">🚀 Instant Publishing</h3>
            <p className="text-gray-400">No delays. Hit publish and share with your followers right away.</p>
          </div>
          <div className="bg-[#1c1c1c] p-6 rounded-xl border border-gray-700 hover:border-emerald-500 transition">
            <h3 className="text-xl font-semibold mb-2">🌐 Reader Reach</h3>
            <p className="text-gray-400">Your blog is discoverable to a growing network of curious readers.</p>
          </div>
        </div>
      </section>

      {/* Featured Blogs */}
      <section className="mt-20">
  <h2 className="text-2xl font-semibold mb-6">🔥 Featured Blogs</h2>
  <div className="grid md:grid-cols-3 gap-6">
    {blogPosts.map((post, index) => (
      <div
        key={index}
        className="bg-[#1c1c1c] p-6 rounded-xl border border-gray-700 hover:border-emerald-500 transition"
      >
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-400 mb-3">{post.content}</p>
        <div className="text-sm text-gray-500">
          <span>
            By <span className="text-white font-medium">{post.author}</span>
          </span>{" "}
          · <span>{post.time}</span>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Footer */}
      <footer className="mt-24 py-8 border-t border-gray-700 text-gray-400 text-sm text-center">
        © {new Date().getFullYear()} BitBlog. Crafted with ❤️ for creators.
      </footer>
    </div>
  );
};

export default Home;
