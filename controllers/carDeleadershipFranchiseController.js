const carDealershipFranchise = require('../models/carDeleadershipFranchiseModel');

exports.createCarDealershipFranchise = async (req, res) => {
  /*
   #swagger.tags = ['CarDealershipFranchises']
  */
  try {
    const company = new carDealershipFranchise(req.body);
    await company.save();
    res.status(201).json(company);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateCarDealershipFranchise = async (req, res) => {
  /*
   #swagger.tags = ['CarDealershipFranchises']
   #swagger.requestBody = {
     required: true,
     content: {
       "application/json": {
         schema: { $ref: "#/components/schemas/carDealerFranchise" },
         examples: {
           ExampleRequest: {
             summary: "Sample Car Dealership Creation",
             value: {
               "Name": "Test",
               "Brands": ["Test"],
               "Address": "100 Test Way",
               "City": "Test",
               "State": "XX",
               "Country": "USA",
               "PhoneNumber": "000-0000",
               "Email": "info@test.com"
             }
           }
         }
       }
     }
   }
  */
  try {
    const company = await carDealershipFranchise.findByIdAndUpdate(req.params.franchiseId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!company) return res.status(404).json({ message: 'Car dealership franchise not found' });
    res.status(200).json(company);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getCarDealershipFranchises = async (req, res) => {
  /*
   #swagger.tags = ['CarDealershipFranchises']
  */
  try {
    const companies = await carDealershipFranchise.find();
    res.status(200).json(companies);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.findCarDealershipFranchisesByBrand = async (req, res) => {
  /*
   #swagger.tags = ['CarDealershipFranchises']
  */
  try {
    const companies = await carDealershipFranchise.find({ Brands: req.query.brand });
    res.status(200).json(companies);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getCarDealershipFranchiseById = async (req, res) => {
  /*
   #swagger.tags = ['CarDealershipFranchises']
  */
  try {
    const company = await carDealershipFranchise.findById(req.params.franchiseId);
    if (!company) return res.status(404).json({ message: 'Car dealership franchise not found' });
    res.status(200).json(company);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCarDealershipFranchiseById = async (req, res) => {
  /*
   #swagger.tags = ['CarDealershipFranchises']
  */
  try {
    const company = await carDealershipFranchise.findByIdAndDelete(req.params.franchiseId);
    if (!company) return res.status(404).json({ message: 'Car dealership franchise not found' });
    res.status(200).json({ message: 'Car dealership franchise deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
