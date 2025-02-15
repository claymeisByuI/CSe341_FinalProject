/* eslint-disable no-undef */
const {
  Types: { ObjectId },
} = require('mongoose');
const mockingoose = require('mockingoose');

const AftermarketCompany = require('../models/aftermarketCompaniesModel');
const aftermarketCompaniesController = require('../controllers/aftermarketCompaniesController');
const TestResponse = require('../utils/test-response');

describe('Aftermarket Companies Controller Unit Tests', () => {
  beforeEach(() => {
    mockingoose.resetAll();
  });

  describe('getAftermarketCompanies', () => {
    test('should return list of aftermarket companies', async () => {
      const companies = [
        { _id: new ObjectId().toString(), name: 'Company A' },
        { _id: new ObjectId().toString(), name: 'Company B' },
      ];
      mockingoose(AftermarketCompany).toReturn(companies, 'find');

      const req = {};
      const res = new TestResponse();

      await aftermarketCompaniesController.getAftermarketCompanies(req, res);
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.data)).toBe(true);
      expect(res.data.length).toBe(2);
    });
  });

  //   describe('getAftermarketCompanyById', () => {
  //     test('should return aftermarket company details by id', async () => {
  //       const companyId = new ObjectId().toString();
  //       const company = {
  //         _id: companyId,
  //         name: 'Company A',
  //         createdAt: new Date('2025-02-15T19:50:08.892Z'),
  //       };
  //       mockingoose(AftermarketCompany).toReturn(company, 'findOne');

  //       const req = { params: { companyId } };
  //       const res = new TestResponse();

  //       await aftermarketCompaniesController.getAftermarketCompanyById(req, res);
  //       expect(res.statusCode).toBe(200);
  //       expect(res.data).toMatchObject({
  //         _id: companyId,
  //         name: 'Company A',
  //         createdAt: new Date('2025-02-15T19:50:08.892Z'),
  //       });
  //     });

  //     test('should return 404 if aftermarket company not found by id', async () => {
  //       const companyId = new ObjectId().toString();
  //       mockingoose(AftermarketCompany).toReturn(null, 'findOne');

  //       const req = { params: { companyId } };
  //       const res = new TestResponse();

  //       await aftermarketCompaniesController.getAftermarketCompanyById(req, res);
  //       expect(res.statusCode).toBe(404);
  //       expect(res.data).toHaveProperty('message', 'Aftermarket company not found');
  //     });
  //   });
});
