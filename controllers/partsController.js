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
    #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: { $ref: "#/components/schemas/Part" },
          }
        }
     }
     #swagger.responses[200] = {
       description: 'Part updated successfully',
       content: {
         'application/json': {
           schema: { $ref: '#/components/schemas/Part' }
         }
       }
     }
     #swagger.responses[400] = {
       description: 'Bad Request',
       content: {
         'application/json': {
           schema: { $ref: '#/components/schemas/Error' }
         }
       }
     }
     #swagger.responses[404] = {
       description: 'Part not found',
       content: {
         'application/json': {
           schema: { $ref: '#/components/schemas/Error' }
         }
       }
     }
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
    #swagger.responses[200] = {
      description: 'List of all parts',
      content: {
        'application/json': {
          schema: { type: 'array', items: { $ref: '#/components/schemas/Part' } }
        }
      }
    }
    #swagger.responses[400] = {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Error' }
        }
      }
    }
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
     #swagger.responses[200] = {
       description: 'List of parts by brand',
       content: {
         'application/json': {
           schema: { type: 'array', items: { $ref: '#/components/schemas/Part' } }
         }
       }
     }
     #swagger.responses[400] = {
       description: 'Bad Request',
       content: {
         'application/json': {
           schema: { $ref: '#/components/schemas/Error' }
         }
       }
     }
  */
  try {
    const parts = await Part.find({ Brand: req.query.brand });
    res.status(200).json(parts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET Vehicle
exports.getPartsByVehicle = async (req, res) => {
  /*
     #swagger.tags = ['Parts']
     #swagger.responses[200] = {
       description: 'List of parts by vehicle',
       content: {
         'application/json': {
           schema: { type: 'array', items: { $ref: '#/components/schemas/Part' } }
         }
       }
     }
     #swagger.responses[400] = {
       description: 'Bad Request',
       content: {
         'application/json': {
           schema: { $ref: '#/components/schemas/Error' }
         }
       }
     }
  */
  try {
    const parts = await Part.find({ Vehicles: req.query.vehicle });
    res.status(200).json(parts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET Quality
exports.getPartsByQuality = async (req, res) => {
  /*
    #swagger.tags = ['Parts']
    #swagger.responses[200] = {
      description: 'List of parts by quality',
      content: {
        'application/json': {
          schema: { type: 'array', items: { $ref: '#/components/schemas/Part' } }
        }
      }
    }
    #swagger.responses[400] = {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Error' }
        }
      }
    }
  */
  try {
    const parts = await Part.find({ Quality: req.query.quality });
    res.status(200).json(parts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET ID
exports.getPartById = async (req, res) => {
  /*
     #swagger.tags = ['Parts']
     #swagger.responses[200] = {
       description: 'Part details',
       content: {
         'application/json': {
           schema: { $ref: '#/components/schemas/Part' }
         }
       }
     }
     #swagger.responses[400] = {
       description: 'Bad Request',
       content: {
         'application/json': {
           schema: { $ref: '#/components/schemas/Error' }
         }
       }
     }
     #swagger.responses[404] = {
       description: 'Part not found',
       content: {
         'application/json': {
           schema: { $ref: '#/components/schemas/Error' }
         }
       }
     }
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
    #swagger.responses[200] = {
      description: 'Part deleted successfully',
    }
    #swagger.responses[400] = {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Error' }
        }
      }
    }
    #swagger.responses[404] = {
      description: 'Part not found',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Error' }
        }
      }
    }
  */
  try {
    const part = await Part.findByIdAndDelete(req.params.partsId);
    if (!part) return res.status(404).json({ message: 'Part not found' });
    res.status(200).json({ message: 'Part deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
