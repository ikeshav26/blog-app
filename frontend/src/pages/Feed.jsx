import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "Understanding Async/Await in JS",
    content:
      "Async/Await simplifies asynchronous code in JavaScript. Learn how to make cleaner API calls with it...",
    author: "Rohan Verma",
    date: "1 hour ago",
  },
  {
    title: "Designing with TailwindCSS",
    content:
      "Tailwind allows rapid UI building with utility classes. Here's how to get started and stay organized...",
    author: "Megha Sinha",
    date: "2 days ago",
  },
  {
    title: "5 Tips to Improve Web Performance",
    content:
      "Speed matters! Discover how to optimize your React app for faster load times and better UX...",
    author: "Anuj Singh",
    date: "Just now",
  },
  {
    title: "Deploying with Vercel & Netlify",
    content:
      "A step-by-step guide on how to deploy React apps with Vercel and Netlify in under 10 minutes...",
    author: "Kavya Rana",
    date: "3 days ago",
  },
  {
    title: "Why Context API Matters",
    content:
      "State management made simple: Context API can replace Redux in many small to medium apps...",
    author: "Sahil Mehta",
    date: "Yesterday",
  },
  {
    title: "Top 10 VSCode Extensions for 2025",
    content:
      "Supercharge your coding with these must-have extensions to improve productivity and code quality...",
    author: "Neha Kapoor",
    date: "6 hours ago",
  },
  {
    title: "Getting Started with MongoDB",
    content:
      "Learn how to model your data, write queries, and connect MongoDB with your Node.js backend...",
    author: "Aman Joshi",
    date: "5 days ago",
  },
  {
    title: "Clean Code Practices Every Dev Should Know",
    content:
      "Write code that's easy to read, test, and maintain with these industry-best clean coding principles...",
    author: "Srishti Rao",
    date: "4 hours ago",
  },
  {
    title: "React vs Vue: Which to Choose?",
    content:
      "React or Vue? Here's a comparison of both frameworks to help you make an informed decision...",
    author: "Tushar Bhatia",
    date: "10 hours ago",
  },
];

const Feed = () => {
  return (
    <div className="bg-base-100 min-h-screen text-base-content pt-24 px-4 md:px-20 pb-20">
      <h1 className="text-4xl font-bold mb-2 text-primary text-center">
        📝 Community Blog Feed
      </h1>
      <p className="text-center text-base-content/70 mb-10 text-sm md:text-base">
        Discover ideas, stories, and insights from creators across every domain.
      </p>

      {blogs.length === 0 ? (
        <div className="text-center text-base-content/50 mt-20 text-lg">
          No blogs available. Be the first to post!
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Link to={`/blog/${index + 1}`} key={index} className="group">
              <div className="bg-base-200 border border-base-300 rounded-2xl p-6 h-full hover:shadow-lg hover:border-primary transition-all duration-300 flex flex-col">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold mb-2 text-base-content group-hover:text-primary transition">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-base-content/70 line-clamp-3">
                    {blog.content}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-base-300 text-xs text-base-content/60">
                  <span className="bg-base-300 px-2 py-1 rounded-full">
                    ✍️ {blog.author}
                  </span>
                  <span className="text-primary font-medium">
                    {blog.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Feed;
