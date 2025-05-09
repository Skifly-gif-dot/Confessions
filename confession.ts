import { Schema, model } from 'mongoose';

const confessionSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    scheduledDeliveryTime: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'delivered', 'deleted'],
        default: 'pending',
    },
}, { timestamps: true });

export const Confession = model('Confession', confessionSchema);