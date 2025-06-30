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



export const fetchBlogById = async (req, res) => {
  try{
    const blogId=req.params.id;
    if (!blogId) {
      return res.status(400).json({ message: "Blog ID is required" });
    }

    const blog=await Blog.findById(blogId).populate("author", "username email");
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    return res.status(200).json(blog);
  }catch(error){
    console.error("Error in fetchBlogById:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}


export const logginedUserBlogs=async(req,res)=>{
  try{
    const userId=req.user
    console.log("User ID:", userId);
    if (!userId) {
      return res.status(400).json({ message: "login is required" });
    }

    const authorBlogs=await Blog.find({ author: userId }).populate("author", "username email").sort({ createdAt: -1 });
    if (!authorBlogs || authorBlogs.length === 0) {
      return res.status(404).json({ message: "No blogs found for this author" });
    }
    return res.status(200).json(authorBlogs);
  }catch(error){
    console.error("Error in logginedUserBlogs:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}