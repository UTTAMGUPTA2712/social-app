import mongoose, { Schema } from "mongoose";

const CommentSchema = mongoose.Schema(
    {
        userID: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        postID: {
            type: Schema.Types.ObjectId,
            ref: 'posts'
        },
        text: {
            type: String,
            required: true,
        },

    },
    {
        timestamps: true,
    }
);

let CommentsModel;

if (mongoose.models.comments) {
    CommentsModel = mongoose.model('comments');
} else {
    CommentsModel = mongoose.model('comments', CommentSchema);
}

export default CommentsModel;