const {
  Types: { ObjectId },
} = require('mongoose');
const mockingoose = require('mockingoose');

const Brand = require('../models/brandModel');
const brandsController = require('../controllers/brandController');
const TestResponse = require('../utils/test-response');

describe('Brands Controller Unit Tests', () => {
  beforeEach(() => {
    mockingoose.resetAll();
  });

  describe('getBrands', () => {
    test('should return list of brands', async () => {
      const brands = [
        { _id: new ObjectId().toString(), name: 'Toyota' },
        { _id: new ObjectId().toString(), name: 'Honda' },
      ];
      mockingoose(Brand).toReturn(brands, 'find');

      const req = {};
      const res = new TestResponse();

      await brandsController.getAllBrands(req, res);
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.data)).toBe(true);
      expect(res.data.length).toBe(2);
    });
  });

  //   describe('getBrandById', () => {
  //     test('should return brand details by id', async () => {
  //       const brandId = new ObjectId().toString();
  //       const brand = {
  //         _id: brandId,
  //         name: 'Toyota',
  //         createdAt: new Date('2025-02-15T19:50:08.892Z'),
  //       };
  //       mockingoose(Brand).toReturn(brand, 'findOne');

  //       const req = { params: { brandId } };
  //       const res = new TestResponse();

  //       await brandsController.getBrandById(req, res);
  //       expect(res.statusCode).toBe(200);
  //       expect(res.data).toMatchObject({
  //         _id: brandId,
  //         name: 'Toyota',
  //         createdAt: new Date('2025-02-15T19:50:08.892Z'),
  //       });
  //     });

  //     test('should return 404 if brand not found by id', async () => {
  //       const brandId = new ObjectId().toString();
  //       mockingoose(Brand).toReturn(null, 'findOne');

  //       const req = { params: { brandId } };
  //       const res = new TestResponse();

  //       await brandsController.getBrandById(req, res);
  //       expect(res.statusCode).toBe(404);
  //       expect(res.data).toHaveProperty('message', 'Brand not found');
  //     });
  //   });
});
