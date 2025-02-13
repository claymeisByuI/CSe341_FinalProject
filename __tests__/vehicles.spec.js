const { Types: { ObjectId } } = require('mongoose');
const mockingoose = require('mockingoose');

const Vehicle = require('../models/vehicleModel');
const { findVehiclesByBrand } = require('../controllers/vehicleController');
const TestResponse = require('../utils/test-response');
  
  describe("Vehicle Brand Fetch Test", () => {
    test("it should filter results based on brand", async () => {
        mockingoose(Vehicle).toReturn([{ Brand: 'Toyota' }], 'find');

        const req = { query: { brand: 'Toyota' } };

        const res = new TestResponse();
        
        await findVehiclesByBrand(req, res);
        expect(res.statusCode).toBe(200);
        expect(res.data).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ Brand: 'Toyota' })
            ])
        );

      //expect(filterByTerm(input, "link")).toEqual(output);
    });
  });
  