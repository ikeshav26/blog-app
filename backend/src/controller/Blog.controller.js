import Blog from "../models/Blog.model.js";

export const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const author = req.user;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const newBlog = new Blog({
      title:title,
      content:content,
      author:author
    });

    const savedBlog = await newBlog.save(); 

    res.status(201).json({
      message: "Blog created successfully",
      blog: savedBlog
    });

  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
