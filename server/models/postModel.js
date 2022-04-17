import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    
    title: String,
    description: String,
    
    tags: [String],
    applied: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostModel = mongoose.model('PostMessage', postSchema);

export default PostModel;