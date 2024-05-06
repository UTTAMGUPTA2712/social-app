'use server'

import dbConnect from "@/lib/connectDB";
import PostsModel from "@/models/posts.model"

export const postAction = async (data) => {
       await dbConnect()
       await PostsModel.create(data);
}

export const getPosts = async () => {
       await dbConnect()
       const posts = await PostsModel.find()
       return posts
}

