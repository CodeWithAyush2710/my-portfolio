import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title for this post.'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    content: {
        type: String,
        required: [true, 'Please provide content for this post.'],
    },
    slug: {
        type: String,
        unique: true,
        index: true,
    },
    excerpt: {
        type: String,
        maxlength: [200, 'Excerpt cannot be more than 200 characters']
    },
    date: {
        type: Date,
        default: Date.now,
    }
}, {
    timestamps: true
});



export default mongoose.models.Post || mongoose.model('Post', PostSchema);
