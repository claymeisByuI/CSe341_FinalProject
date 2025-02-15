const {
  Types: { ObjectId },
} = require('mongoose');
const mockingoose = require('mockingoose');

const Part = require('../models/partsModel');
const partsController = require('../controllers/partsController');
const TestResponse = require('../utils/test-response');

describe('Parts Controller Unit Tests', () => {
  beforeEach(() => {
    mockingoose.resetAll();
  });

  describe('getParts', () => {
    test('should return list of parts', async () => {
      const parts = [
        { _id: new ObjectId().toString(), name: 'Brake Pad' },
        { _id: new ObjectId().toString(), name: 'Oil Filter' },
      ];
      mockingoose(Part).toReturn(parts, 'find');

      const req = {};
      const res = new TestResponse();

      await partsController.getAllParts(req, res);
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.data)).toBe(true);
      expect(res.data.length).toBe(2);
    });
  });

  // describe('getPartById', () => {
  //   test('should return part details by id', async () => {
  //     const partId = new ObjectId().toString();
  //     const part = {
  //       _id: partId,
  //       name: 'Brake Pad',
  //       createdAt: new Date('2025-02-15T19:50:08.892Z'),
  //     };
  //     mockingoose(Part).toReturn(part, 'findOne');

  //     const req = { params: { partId } };
  //     const res = new TestResponse();

  //     await partsController.getPartById(req, res);
  //     expect(res.statusCode).toBe(200);
  //     expect(res.data).toMatchObject({
  //       _id: partId,
  //       name: 'Brake Pad',
  //       createdAt: new Date('2025-02-15T19:50:08.892Z'),
  //     });
  //   });

  //   test('should return 404 if part not found by id', async () => {
  //     const partId = new ObjectId().toString();
  //     mockingoose(Part).toReturn(null, 'findOne');

  //     const req = { params: { partId } };
  //     const res = new TestResponse();

  //     await partsController.getPartById(req, res);
  //     expect(res.statusCode).toBe(404);
  //     expect(res.data).toHaveProperty('message', 'Part not found');
  //   });
  // });
});
