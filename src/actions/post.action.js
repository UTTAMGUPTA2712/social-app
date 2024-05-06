import dbConnect from "@/lib/connectDB";
import PostsModel from "@/models/posts.model"

 export const postAction = async (data) => {
        await dbConnect()
        const dd= await PostsModel.create(data);
        console.log(dd, "data")
        
 }