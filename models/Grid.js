const mongoose = require('mongoose');

const GridSchema = new mongoose.Schema({
  name: { type: String, required: true },
  grid: { type: Array, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Grid', GridSchema);