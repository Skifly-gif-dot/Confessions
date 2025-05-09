import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import confessionRoutes from './routes/confessionRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/confessions', confessionRoutes());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});