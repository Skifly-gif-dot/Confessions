import express from 'express';
import { createConfession, getConfessions, deleteConfession } from '../controllers/confessionController';

const router = express.Router();

// Route to create a new confession
router.post('/', createConfession);

// Route to get all confessions
router.get('/', getConfessions);

// Route to delete a confession by ID
router.delete('/:id', deleteConfession);

export default router;