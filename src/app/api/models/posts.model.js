import mongoose, { Schema } from "mongoose";

const PostsSchema = mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        mediaURL: {
            type: String,
            required: true,
        },
        likes:{
            type: [{type: Schema.Types.ObjectId, ref: 'users'}],
        },
        comments:{
            type: [{type: Schema.Types.ObjectId, ref: 'comments'}],
        }
    },
    {
        timestamps: true,
    }
);

let PostsModel;

if (mongoose.models.posts) {
    PostsModel = mongoose.model('posts');
} else {
    PostsModel = mongoose.model('posts', PostsSchema);
}

export default PostsModel;