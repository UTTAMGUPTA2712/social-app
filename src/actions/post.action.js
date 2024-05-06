import connectDB from "@/app/api/lib/connectDB"
import PostsModel from "@/app/api/models/posts.model"

 export const postAction = async (data) => {
        await connectDB()
        
 }