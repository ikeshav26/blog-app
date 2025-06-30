import Blog from "../models/Blog.model.js";
import User from "../models/User.model.js";

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



export const fetchAllBlogs=async(req,res)=>{
    try{
        const feed=await Blog.find({}).populate("author","username email").sort({ createdAt: -1 });
        if(!feed || feed.length === 0){
            return res.status(404).json({ message: "No blogs found" });
        }
        return res.status(200).json(feed);
    }catch(error){
        console.error("Error in fetchAllBlogs:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}