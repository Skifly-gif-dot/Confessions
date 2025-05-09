// This file exports functions for managing confessions, such as creating, retrieving, and deleting confessions.

import { Request, Response } from 'express';
import Confession from '../models/confession';

// Create a new confession
export const createConfession = async (req: Request, res: Response) => {
    try {
        const confession = new Confession(req.body);
        await confession.save();
        res.status(201).json(confession);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Retrieve all confessions
export const getConfessions = async (req: Request, res: Response) => {
    try {
        const confessions = await Confession.find();
        res.status(200).json(confessions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Retrieve a single confession by ID
export const getConfessionById = async (req: Request, res: Response) => {
    try {
        const confession = await Confession.findById(req.params.id);
        if (!confession) {
            return res.status(404).json({ message: 'Confession not found' });
        }
        res.status(200).json(confession);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a confession by ID
export const deleteConfession = async (req: Request, res: Response) => {
    try {
        const confession = await Confession.findByIdAndDelete(req.params.id);
        if (!confession) {
            return res.status(404).json({ message: 'Confession not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};