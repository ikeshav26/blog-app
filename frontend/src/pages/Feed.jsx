import React from 'react';
import { Link } from 'react-router-dom';

const blogs = [
  {
    title: "Understanding Async/Await in JS",
    content: "Async/Await simplifies asynchronous code in JavaScript. Learn how to make cleaner API calls with it...",
    author: "Rohan Verma",
    date: "1 hour ago"
  },
  {
    title: "Designing with TailwindCSS",
    content: "Tailwind allows rapid UI building with utility classes. Here's how to get started and stay organized...",
    author: "Megha Sinha",
    date: "2 days ago"
  },
  {
    title: "5 Tips to Improve Web Performance",
    content: "Speed matters! Discover how to optimize your React app for faster load times and better UX...",
    author: "Anuj Singh",
    date: "Just now"
  },
  {
    title: "Deploying with Vercel & Netlify",
    content: "A step-by-step guide on how to deploy React apps with Vercel and Netlify in under 10 minutes...",
    author: "Kavya Rana",
    date: "3 days ago"
  },
  {
    title: "Why Context API Matters",
    content: "State management made simple: Context API can replace Redux in many small to medium apps...",
    author: "Sahil Mehta",
    date: "Yesterday"
  },
  {
    title: "Top 10 VSCode Extensions for 2025",
    content: "Supercharge your coding with these must-have extensions to improve productivity and code quality...",
    author: "Neha Kapoor",
    date: "6 hours ago"
  },
  {
    title: "Getting Started with MongoDB",
    content: "Learn how to model your data, write queries, and connect MongoDB with your Node.js backend...",
    author: "Aman Joshi",
    date: "5 days ago"
  },
  {
    title: "Clean Code Practices Every Dev Should Know",
    content: "Write code that's easy to read, test, and maintain with these industry-best clean coding principles...",
    author: "Srishti Rao",
    date: "4 hours ago"
  },
  {
    title: "React vs Vue: Which to Choose?",
    content: "React or Vue? Here's a comparison of both frameworks to help you make an informed decision...",
    author: "Tushar Bhatia",
    date: "10 hours ago"
  }
];

const Feed = () => {
  return (
    <div className="bg-[#121212] min-h-screen text-white pt-24 px-4 md:px-20 pb-20">
      <h1 className="text-3xl font-bold mb-10 text-emerald-400">📢 Community Feed</h1>
      
      <div className="flex flex-col gap-6">
        {blogs.map((blog, index) => (
          <Link to='/blog/1' key={index}>
          <div
            
            className="bg-[#1c1c1c] border border-gray-700 rounded-xl p-6 hover:border-emerald-500 transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-400 mb-4">{blog.content}</p>
            <div className="text-sm text-gray-500">
              By <span className="text-white font-medium">{blog.author}</span> · {blog.date}
            </div>
          </div>
          </Link>
        ))}
      </div>

      {blogs.length === 0 && (
        <div className="text-center text-gray-500 mt-20 text-lg">
          No blogs available. Be the first to post!
        </div>
      )}
    </div>
  );
};

export default Feed;
