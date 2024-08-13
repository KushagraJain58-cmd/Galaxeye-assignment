const mongoose = require('mongoose');

const GeometrySchema = new mongoose.Schema({
  type: { type: String, required: true },
  coordinates: {
    type: [[[]]], // Nested arrays to represent multiple coordinate arrays
    required: true
  }
});

const FeatureSchema = new mongoose.Schema({
  type: { type: String, required: true },
  properties: { type: mongoose.Schema.Types.Mixed }, // Allow any type for properties
  geometry: { type: GeometrySchema, required: true }
});

const TileSchema = new mongoose.Schema({
  type: { type: String, required: true },
  features: [FeatureSchema] // Array of features
});

const Tiles = mongoose.models.tiles || mongoose.model('tiles', TileSchema);
module.exports = Tiles;
