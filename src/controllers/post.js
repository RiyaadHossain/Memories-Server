const Post = require("../models/post")

// Get Posts_____________________________
exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json({ posts })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Create Post_____________________________
exports.createPost = (req, res) => {
    const post = req.body
    const newPost = new Post({ post })
    try {
        await newPost.save()
        res.status(201).json({ message: "Your Post has been saved." })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}