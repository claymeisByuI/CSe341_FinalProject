const Brands = require('../models/brandModel');

// POST /brands
exports.createBrand = async (req, res) => {
  /*
     #swagger.tags = ['Brands']
      #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: { $ref: "#/components/schemas/Brand" },
             examples: {
               ExampleRequest: {
                 summary: "Sample Brand Creation",
                 value: {
                      "Name": "",
                      "Country": "",
                      "StartingDate": "",
                      "Logo": "",
                      "Headquarters": "",
                      "Founders": "",
                 }
               }
             }
          }
        }
     }
  */
  try {
    const brand = new Brands(req.body);
    await brand.save();
    res.status(201).send(brand);
  } catch (error) {
    res.status(400).send(error);
  }
};

// PUT /brands
exports.updateBrand = async (req, res) => {
  /*
     #swagger.tags = ['Brands']
    #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: { $ref: "#/components/schemas/Brand" },
          }
        }
     }
     #swagger.responses[200] = {
       description: 'Brand updated successfully',
       content: {
         'application/json': {
           schema: { $ref: '#/components/schemas/Brand' }
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
       description: 'Brand not found',
       content: {
         'application/json': {
           schema: { $ref: '#/components/schemas/Error' }
         }
       }
     }
  */
  try {
    const brand = await Brands.findByIdAndUpdate(req.params.brandId, req.body, { new: true, runValidators: true });
    if (!brand) {
      return res.status(404).send();
    }
    res.send(brand);
  } catch (error) {
    res.status(400).send(error);
  }
};

// GET /brands
exports.getAllBrands = async (req, res) => {
  /*
    #swagger.tags = ['Brands']
    #swagger.responses[200] = {
      description: 'List of all brands',
      content: {
        'application/json': {
          schema: { type: 'array', items: { $ref: '#/components/schemas/Brand' } }
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
    const brands = await Brands.find({});
    res.send(brands);
  } catch (error) {
    res.status(500).send(error);
  }
};

// GET /brands/findByCountry
exports.findByCountry = async (req, res) => {
  /*
     #swagger.tags = ['Brands']
     #swagger.responses[200] = {
       description: 'List of brands by country',
       content: {
         'application/json': {
           schema: { type: 'array', items: { $ref: '#/components/schemas/Brand' } }
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
    const brands = await Brands.find({ Country: req.query.country });
    res.send(brands);
  } catch (error) {
    res.status(500).send(error);
  }
};

// GET /brands/findByName
exports.findByName = async (req, res) => {
  /*
     #swagger.tags = ['Brands']
     #swagger.responses[200] = {
       description: 'List of brands by name',
       content: {
         'application/json': {
           schema: { type: 'array', items: { $ref: '#/components/schemas/Brand' } }
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
    const brands = await Brands.find({ Name: req.query.name });
    res.send(brands);
  } catch (error) {
    res.status(500).send(error);
  }
};

// GET /brands/:brandsId
exports.getBrandById = async (req, res) => {
  /*
     #swagger.tags = ['Brands']
     #swagger.responses[200] = {
       description: 'Brand details',
       content: {
         'application/json': {
           schema: { $ref: '#/components/schemas/Brand' }
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
       description: 'Brand not found',
       content: {
         'application/json': {
           schema: { $ref: '#/components/schemas/Error' }
         }
       }
     }
  */
  try {
    const brand = await Brands.findById(req.params.brandId);
    if (!brand) {
      return res.status(404).send();
    }
    res.send(brand);
  } catch (error) {
    res.status(500).send(error);
  }
};

// DELETE /brands/:brandsId
exports.deleteBrand = async (req, res) => {
  /*
    #swagger.tags = ['Brands']
    #swagger.responses[200] = {
      description: 'Brand deleted successfully',
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
      description: 'Brand not found',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Error' }
        }
      }
    }
  */
  try {
    const brand = await Brands.findByIdAndDelete(req.params.brandId);
    if (!brand) {
      return res.status(404).send();
    }
    res.send(brand);
  } catch (error) {
    res.status(500).send(error);
  }
};
