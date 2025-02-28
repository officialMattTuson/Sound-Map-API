const express = require('express');
const Grid = require('../models/Grid');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const grids = await Grid.find();
    res.json(grids);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, grid } = req.body;
    const newGrid = new Grid({ name, grid });
    await newGrid.save();
    res.status(201).json(newGrid);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const grid = await Grid.findById(req.params.id);
    if (!grid) return res.status(404).json({ message: 'Grid not found' });
    res.json(grid);
  } catch (error) {
    res.status(400).json({ message: 'Invalid ID' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Grid.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: 'Invalid ID' });
  }
});

module.exports = router;