import mongoose from 'mongoose';

const confessionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    scheduledFor: {
        type: Date,
        required: true
    }
});

const Confession = mongoose.model('Confession', confessionSchema);

export default Confession;