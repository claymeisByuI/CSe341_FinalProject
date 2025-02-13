// __tests__/vehicleController.spec.js
const { Types: { ObjectId } } = require('mongoose');
const mockingoose = require('mockingoose');

const Vehicle = require('../models/vehicleModel');
const vehicleController = require('../controllers/vehicleController');
const TestResponse = require('../utils/test-response');


describe('Vehicle Controller Unit Tests', () => {
  beforeEach(() => {
    mockingoose.resetAll();
  });

  describe('createVehicle', () => {
    test('should create a vehicle successfully', async () => {
      const vehicleData = {
        Brand: 'Toyota',
        Description: 'Reliable car',
        Engine_type: 'V6',
        Fuel_type: 'Gasoline',
        Name: 'Camry',
        Transmission: 'Automatic',
        Year: 2021,
        Type: 'Sedan',
        colors_available: ['Red', 'Blue']
      };
      mockingoose(Vehicle).toReturn(vehicleData, 'save');

      const req = { body: vehicleData };
      const res = new TestResponse();

      await vehicleController.createVehicle(req, res);
      expect(res.statusCode).toBe(201);
      expect(res.data).toMatchObject(vehicleData);
    });
  });

  describe('updateVehicle', () => {
    test('should update a vehicle successfully', async () => {
      const vehicleId = new ObjectId().toString();
      const updatedVehicle = { 
        _id: vehicleId,
        Brand: 'TOYOTA',
        Description: 'Reliable car',
        Engine_type: 'V4',
        Fuel_type: 'Gasoline',
        Name: 'Corolla',
        Transmission: 'Automatic',
        Year: 2020,
        Type: 'Sedan',
        colors_available: ['White']
      };
      mockingoose(Vehicle).toReturn(updatedVehicle, 'findByIdAndUpdate');

      const req = { params: { vehicleId }, body: updatedVehicle };
      const res = new TestResponse();

      await vehicleController.updateVehicle(req, res);
      expect(res.statusCode).toBe(200);
      expect(res.data).toMatchObject(updatedVehicle);
    });

    test('should return 404 if vehicle not found on update', async () => {
      const vehicleId = new ObjectId().toString();
      mockingoose(Vehicle).toReturn(null, 'findByIdAndUpdate');

      const req = { params: { vehicleId }, body: { Name: 'NonExistent' } };
      const res = new TestResponse();

      await vehicleController.updateVehicle(req, res);
      expect(res.statusCode).toBe(404);
      expect(res.data).toHaveProperty('message', 'Vehicle not found');
    });
  });

  describe('getVehicles', () => {
    test('should return list of vehicles', async () => {
      const vehicles = [
        { _id: new ObjectId().toString(), Brand: 'Toyota' },
        { _id: new ObjectId().toString(), Brand: 'Honda' }
      ];
      mockingoose(Vehicle).toReturn(vehicles, 'find');

      const req = {};
      const res = new TestResponse();

      await vehicleController.getVehicles(req, res);
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.data)).toBe(true);
      expect(res.data.length).toBe(2);
    });
  });

  describe('findVehiclesByBrand', () => {
    test('should filter vehicles by brand', async () => {
      const vehicles = [{ _id: new ObjectId().toString(), Brand: 'Toyota' }];
      mockingoose(Vehicle).toReturn(vehicles, 'find');

      const req = { query: { brand: 'Toyota' } };
      const res = new TestResponse();

      await vehicleController.findVehiclesByBrand(req, res);
      expect(res.statusCode).toBe(200);
      expect(res.data[0]).toHaveProperty('Brand', 'Toyota');
    });
  });

  describe('findVehiclesByYear', () => {
    test('should filter vehicles by year', async () => {
      const vehicles = [{ _id: new ObjectId().toString(), Year: 2021 }];
      mockingoose(Vehicle).toReturn(vehicles, 'find');

      const req = { query: { year: 2021 } };
      const res = new TestResponse();

      await vehicleController.findVehiclesByYear(req, res);
      expect(res.statusCode).toBe(200);
      expect(res.data[0]).toHaveProperty('Year', 2021);
    });
  });

  describe('findVehiclesByType', () => {
    test('should filter vehicles by type', async () => {
      const vehicles = [{ _id: new ObjectId().toString(), Type: 'SUV' }];
      mockingoose(Vehicle).toReturn(vehicles, 'find');

      const req = { query: { type: 'SUV' } };
      const res = new TestResponse();

      await vehicleController.findVehiclesByType(req, res);
      expect(res.statusCode).toBe(200);
      expect(res.data[0]).toHaveProperty('Type', 'SUV');
    });
  });

  describe('getVehicleById', () => {
    test('should return vehicle details by id', async () => {
      const vehicleId = new ObjectId().toString();
      const vehicle = { _id: vehicleId, Brand: 'Toyota' };
      mockingoose(Vehicle).toReturn(vehicle, 'findOne');

      const req = { params: { vehiclesId: vehicleId } };
      const res = new TestResponse();

      await vehicleController.getVehicleById(req, res);
      expect(res.statusCode).toBe(200);
      expect(res.data).toMatchObject(vehicle);
    });

    test('should return 404 if vehicle not found by id', async () => {
      const vehicleId = new ObjectId().toString();
      mockingoose(Vehicle).toReturn(null, 'findOne');

      const req = { params: { vehiclesId: vehicleId } };
      const res = new TestResponse();

      await vehicleController.getVehicleById(req, res);
      expect(res.statusCode).toBe(404);
      expect(res.data).toHaveProperty('message', 'Vehicle not found');
    });
  });

  describe('deleteVehicleById', () => {
    test('should delete vehicle successfully', async () => {
      const vehicleId = new ObjectId().toString();
      const vehicle = { _id: vehicleId, Brand: 'Toyota' };
      mockingoose(Vehicle).toReturn(vehicle, 'findOneAndDelete');

      const req = { params: { vehiclesId: vehicleId } };
      const res = new TestResponse();

      await vehicleController.deleteVehicleById(req, res);
      expect(res.statusCode).toBe(200);
      expect(res.data).toHaveProperty('message', 'Vehicle deleted successfully');
    });

    test('should return 404 if vehicle not found during delete', async () => {
      const vehicleId = new ObjectId().toString();
      mockingoose(Vehicle).toReturn(null, 'findOneAndDelete');

      const req = { params: { vehiclesId: vehicleId } };
      const res = new TestResponse();

      await vehicleController.deleteVehicleById(req, res);
      expect(res.statusCode).toBe(404);
      expect(res.data).toHaveProperty('message', 'Vehicle not found');
    });
  });
});
