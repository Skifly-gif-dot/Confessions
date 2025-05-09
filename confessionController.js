import Confession from '../models/Confession';

// Create a new confession
export const createConfession = async (req, res) => {
    try {
        const confession = new Confession(req.body);
        await confession.save();
        res.status(201).json(confession);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all confessions
export const getConfessions = async (req, res) => {
    try {
        const confessions = await Confession.find();
        res.status(200).json(confessions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single confession by ID
export const getConfessionById = async (req, res) => {
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
export const deleteConfession = async (req, res) => {
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