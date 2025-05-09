import express from 'express';
import { login, signup } from '../controllers/authController';

const router = express.Router();

// Login route
router.post('/login', login);

// Signup route
router.post('/signup', signup);

export default router;