const Part = require('../models/partsModel');

// POST
exports.createPart = async (req, res) => {
  /*
     #swagger.tags = ['Parts']
      #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: { $ref: "#/components/schemas/Part" },
             examples: {
               ExampleRequest: {
                 summary: "Sample Part Creation",
                 value: {
                      "Brand": "",
                      "Name": "",
                      "Quality": "OEM",
                      "Vehicles": [""],
                 }
               }
             }
          }
        }
     }
  */
  try {
    const part = new Part(req.body);
    await part.save();
    res.status(201).json(part);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT
exports.updatePart = async (req, res) => {
  /*
     #swagger.tags = ['Parts']
  */
  try {
    const part = await Part.findByIdAndUpdate(req.params.partsId, req.body, { new: true });
    if (!part) return res.status(404).json({ message: 'Part not found' });
    res.status(200).json(part);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET ALL
exports.getAllParts = async (req, res) => {
  /*
    #swagger.tags = ['Parts']
 */
  try {
    const parts = await Part.find();
    res.status(200).json(parts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET Brand
exports.getPartsByBrand = async (req, res) => {
  /*
     #swagger.tags = ['Parts']
  */
  try {
    const parts = await Part.find({ brand: req.query.brand });
    res.status(200).json(parts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET Vehicle
exports.getPartsByVehicle = async (req, res) => {
  /*
     #swagger.tags = ['Parts']
  */
  try {
    const parts = await Part.find({ vehicles: req.query.vehicle });
    res.status(200).json(parts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET Quality
exports.getPartsByQuality = async (req, res) => {
  /*
    #swagger.tags = ['Parts']
 */
  try {
    const parts = await Part.find({ quality: req.query.quality });
    res.status(200).json(parts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET ID
exports.getPartById = async (req, res) => {
  /*
     #swagger.tags = ['Parts']
  */
  try {
    const part = await Part.findById(req.params.partsId);
    if (!part) return res.status(404).json({ message: 'Part not found' });
    res.status(200).json(part);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE
exports.deletePart = async (req, res) => {
  /*
    #swagger.tags = ['Parts']
 */
  try {
    const part = await Part.findByIdAndDelete(req.params.partsId);
    if (!part) return res.status(404).json({ message: 'Part not found' });
    res.status(200).json({ message: 'Part deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
