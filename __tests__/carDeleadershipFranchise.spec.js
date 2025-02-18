/* eslint-disable no-undef */
const {
  Types: { ObjectId },
} = require('mongoose');
const mockingoose = require('mockingoose');

const CarDealershipFranchise = require('../models/carDeleadershipFranchiseModel');
const carDeleadershipFranchiseController = require('../controllers/carDeleadershipFranchiseController');
const TestResponse = require('../utils/test-response');

describe('Car Dealership Franchise Controller Unit Tests', () => {
  beforeEach(() => {
    mockingoose.resetAll();
  });

  //   describe('createCarDealershipFranchise', () => {
  //     test('should create a car dealership franchise successfully', async () => {
  //       const franchiseData = {
  //         Name: 'Test',
  //         Brands: ['Test'],
  //         Address: '100 Test Way',
  //         City: 'Test',
  //         State: 'XX',
  //         Country: 'USA',
  //         PhoneNumber: '000-0000',
  //         Email: 'info@test.com',
  //       };
  //       mockingoose(CarDealershipFranchise).toReturn(franchiseData, 'save');

  //       const req = { body: franchiseData };
  //       const res = new TestResponse();

  //       await carDeleadershipFranchiseController.createCarDealershipFranchise(req, res);
  //       expect(res.statusCode).toBe(201);
  //       expect(res.data).toMatchObject(franchiseData);
  //     });
  //   });

  //   describe('updateCarDealershipFranchise', () => {
  //     test('should update a car dealership franchise successfully', async () => {
  //       const franchiseId = new ObjectId().toString();
  //       const updatedFranchise = {
  //         _id: franchiseId,
  //         Name: 'Updated Test',
  //         Brands: ['Updated Test'],
  //         Address: '200 Updated Way',
  //         City: 'Updated City',
  //         State: 'YY',
  //         Country: 'USA',
  //         PhoneNumber: '111-1111',
  //         Email: 'updated@test.com',
  //       };
  //       mockingoose(CarDealershipFranchise).toReturn(updatedFranchise, 'findByIdAndUpdate');

  //       const req = { params: { franchiseId }, body: updatedFranchise };
  //       const res = new TestResponse();

  //       await carDeleadershipFranchiseController.updateCarDealershipFranchise(req, res);
  //       expect(res.statusCode).toBe(200);
  //       expect(res.data).toMatchObject(updatedFranchise);
  //     });

  //     test('should return 404 if car dealership franchise not found on update', async () => {
  //       const franchiseId = new ObjectId().toString();
  //       mockingoose(CarDealershipFranchise).toReturn(null, 'findByIdAndUpdate');

  //       const req = { params: { franchiseId }, body: { Name: 'NonExistent' } };
  //       const res = new TestResponse();

  //       await carDeleadershipFranchiseController.updateCarDealershipFranchise(req, res);
  //       expect(res.statusCode).toBe(404);
  //       expect(res.data).toHaveProperty('message', 'Car dealership franchise not found');
  //     });
  //   });

  describe('getCarDealershipFranchises', () => {
    test('should return list of car dealership franchises', async () => {
      const franchises = [
        { _id: new ObjectId().toString(), Name: 'Test' },
        { _id: new ObjectId().toString(), Name: 'Test 2' },
      ];
      mockingoose(CarDealershipFranchise).toReturn(franchises, 'find');

      const req = {};
      const res = new TestResponse();

      await carDeleadershipFranchiseController.getCarDealershipFranchises(req, res);
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.data)).toBe(true);
      expect(res.data.length).toBe(2);
    });
  });

  describe('findCarDealershipFranchisesByBrand', () => {
    test('should filter car dealership franchises by brand', async () => {
      const franchises = [{ _id: new ObjectId().toString(), Brands: ['Test'] }];
      mockingoose(CarDealershipFranchise).toReturn(franchises, 'find');

      const req = { query: { brand: 'Test' } };
      const res = new TestResponse();

      await carDeleadershipFranchiseController.findCarDealershipFranchisesByBrand(req, res);
      expect(res.statusCode).toBe(200);
      expect(res.data[0]).toHaveProperty('Brands', ['Test']);
    });
  });

  //   describe('getCarDealershipFranchiseById', () => {
  //     test('should return car dealership franchise details by id', async () => {
  //       const franchiseId = new ObjectId().toString();
  //       const franchise = {
  //         _id: franchiseId,
  //         Name: 'Test',
  //         Brands: ['Test'],
  //         Address: '100 Test Way',
  //         City: 'Test',
  //         State: 'XX',
  //         Country: 'USA',
  //         PhoneNumber: '000-0000',
  //         Email: 'info@test.com',
  //       };
  //       mockingoose(CarDealershipFranchise).toReturn(franchise, 'findOne');

  //       const req = { params: { franchiseId } };
  //       const res = new TestResponse();

  //       await carDeleadershipFranchiseController.getCarDealershipFranchiseById(req, res);
  //       expect(res.statusCode).toBe(200);
  //       expect(res.data).toMatchObject(franchise);
  //     });

  //     test('should return 404 if car dealership franchise not found by id', async () => {
  //       const franchiseId = new ObjectId().toString();
  //       mockingoose(CarDealershipFranchise).toReturn(null, 'findOne');

  //       const req = { params: { franchiseId } };
  //       const res = new TestResponse();

  //       await carDeleadershipFranchiseController.getCarDealershipFranchiseById(req, res);
  //       expect(res.statusCode).toBe(404);
  //       expect(res.data).toHaveProperty('message', 'Car dealership franchise not found');
  //     });
  //   });

  //   describe('deleteCarDealershipFranchiseById', () => {
  //     test('should delete car dealership franchise successfully', async () => {
  //       const franchiseId = new ObjectId().toString();
  //       const franchise = { _id: franchiseId, Name: 'Test' };
  //       mockingoose(CarDealershipFranchise).toReturn(franchise, 'findOneAndDelete');

  //       const req = { params: { franchiseId } };
  //       const res = new TestResponse();

  //       await carDeleadershipFranchiseController.deleteCarDealershipFranchiseById(req, res);
  //       expect(res.statusCode).toBe(200);
  //       expect(res.data).toHaveProperty('message', 'Car dealership franchise deleted successfully');
  //     });

  //     test('should return 404 if car dealership franchise not found during delete', async () => {
  //       const franchiseId = new ObjectId().toString();
  //       mockingoose(CarDealershipFranchise).toReturn(null, 'findOneAndDelete');

  //       const req = { params: { franchiseId } };
  //       const res = new TestResponse();

  //       await carDeleadershipFranchiseController.deleteCarDealershipFranchiseById(req, res);
  //       expect(res.statusCode).toBe(404);
  //       expect(res.data).toHaveProperty('message', 'Car dealership franchise not found');
  //     });
  //   });
});
