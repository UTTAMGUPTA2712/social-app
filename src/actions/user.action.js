import connectDB from "@/app/api/lib/connectDB"
import UserModel from "@/app/api/models/user.model"

export const userAction = async (data) => {
    await connectDB()
    const user = await UserModel.findOne({ email: data.email })
    if(!user){
        console.log('here')
        return await UserModel.create(data)
    }
    return user

}