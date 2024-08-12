const Tile = require('../models/Tile');
const asyncHandler = require('express-async-handler');

const findTile = asyncHandler(async (req, res) => {
    try {
        const { aoi } = req.body;  
        const coordinates = aoi.coordinates;
         if (!Array.isArray(coordinates) || coordinates.length === 0) {
            return res.status(400).send("Invalid coordinates format.");
        }
        // console.log("Backend AOI:", coordinates);
   
    const tiles = await Tile.find({}, {
    "features.geometry": 1
    });

    const intersects = (geometry, coordinates) => {
    const turf = require('@turf/turf');
    const polygon = turf.polygon(coordinates);
    const feature = turf.feature(geometry);
    return turf.booleanIntersects(feature, polygon);
        };
    
    const filteredTiles = tiles.map(tile => {
    const filteredFeatures = tile.features.filter(feature => 
        intersects(feature.geometry, coordinates)
    );
    return { ...tile.toObject(), features: filteredFeatures };
    });
        

    // console.log("Backend Tiles:", filteredTiles);
    res.send(filteredTiles);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = {
  findTile
};
