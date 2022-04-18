import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    
    title: String,
    description: String,

    createdAt: {
        type: Date,
        default: new Date()
    },
    username: { type: String },
    image: { type: String },
    content: { type: String },
   
    
    tags: {type: [String],
        default: []
    },
    applied: {
        type: Number,
        default: 0
    },
});

const PostModel = mongoose.model('PostMessage', postSchema);

export default PostModel;