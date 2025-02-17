/* eslint-disable no-undef */
const {
  Types: { ObjectId },
} = require('mongoose');
const mockingoose = require('mockingoose');

const User = require('../models/userModel');
const userController = require('../controllers/userController');
const TestResponse = require('../utils/test-response');

describe('User Controller Unit Tests', () => {
  beforeEach(() => {
    mockingoose.resetAll();
  });

  describe('createUser', () => {
    test('should create a user successfully', async () => {
      const userData = {
        Email: 'test@mail.com',
        FirstName: 'Test',
        LastName: 'Test',
        UserName: 'TestUser',
        AccountType: 'Admin',
        PhoneNumber: '000-0000',
      };
      mockingoose(User).toReturn(userData, 'save');

      const req = { body: userData };
      const res = new TestResponse();

      await userController.createUser(req, res);
      expect(res.statusCode).toBe(201);
      expect(res.data).toMatchObject(userData);
    });
  });

  describe('createUsersWithArray', () => {
    test('should create multiple users from an array successfully', async () => {
      const usersData = [
        {
          Email: 'test1@mail.com',
          FirstName: 'Test1',
          LastName: 'Test1',
          UserName: 'TestUser1',
          AccountType: 'Admin',
          PhoneNumber: '000-0001',
        },
        {
          Email: 'test2@mail.com',
          FirstName: 'Test2',
          LastName: 'Test2',
          UserName: 'TestUser2',
          AccountType: 'User',
          PhoneNumber: '000-0002',
        },
      ];
      mockingoose(User).toReturn(usersData, 'insertMany');

      const req = { body: usersData };
      const res = new TestResponse();

      await userController.createUsersWithArray(req, res);
      expect(res.statusCode).toBe(201);
      expect(Array.isArray(res.data)).toBe(true);
      expect(res.data.length).toBe(2);
    });
  });

  describe('createUsersWithList', () => {
    test('should create multiple users from a list successfully', async () => {
      const usersData = [
        {
          Email: 'test1@mail.com',
          FirstName: 'Test1',
          LastName: 'Test1',
          UserName: 'TestUser1',
          AccountType: 'Admin',
          PhoneNumber: '000-0001',
        },
        {
          Email: 'test2@mail.com',
          FirstName: 'Test2',
          LastName: 'Test2',
          UserName: 'TestUser2',
          AccountType: 'User',
          PhoneNumber: '000-0002',
        },
      ];
      mockingoose(User).toReturn(usersData, 'insertMany');

      const req = { body: usersData };
      const res = new TestResponse();

      await userController.createUsersWithList(req, res);
      expect(res.statusCode).toBe(201);
      expect(Array.isArray(res.data)).toBe(true);
      expect(res.data.length).toBe(2);
    });
  });

  describe('findUsersByType', () => {
    test('should filter users by type', async () => {
      const users = [{ _id: new ObjectId().toString(), AccountType: 'Admin' }];
      mockingoose(User).toReturn(users, 'find');

      const req = { query: { type: 'Admin' } };
      const res = new TestResponse();

      await userController.findUsersByType(req, res);
      expect(res.statusCode).toBe(200);
      expect(res.data[0]).toHaveProperty('AccountType', 'Admin');
    });
  });

  describe('getUserByUsername', () => {
    test('should return user details by username', async () => {
      const userId = new ObjectId().toString();
      const user = {
        _id: userId,
        Email: 'test@mail.com',
        FirstName: 'Test',
        LastName: 'Test',
        UserName: 'TestUser',
        AccountType: 'Admin',
        PhoneNumber: '000-0000',
      };
      mockingoose(User).toReturn(user, 'findOne');

      const req = { params: { username: 'TestUser' } };
      const res = new TestResponse();

      await userController.getUserByUsername(req, res);
      expect(res.statusCode).toBe(200);
      expect(res.data).toMatchObject(user);
    });

    test('should return 404 if user not found by username', async () => {
      const userId = new ObjectId().toString();
      mockingoose(User).toReturn(null, 'findOne');

      const req = { params: { username: 'NonExistentUser' } };
      const res = new TestResponse();

      await userController.getUserByUsername(req, res);
      expect(res.statusCode).toBe(404);
      expect(res.data).toHaveProperty('message', 'User not found');
    });
  });

  describe('updateUserByUsername', () => {
    test('should update a user by username successfully', async () => {
      const userId = new ObjectId().toString();
      const updatedUser = {
        _id: userId,
        Email: 'test@mail.com',
        FirstName: 'Testing',
        LastName: 'Tested',
        UserName: 'TestUser',
        AccountType: 'Admin',
        PhoneNumber: '000-0001',
      };
      mockingoose(User).toReturn(updatedUser, 'findOneAndUpdate');

      const req = { params: { username: 'TestUser' }, body: updatedUser };
      const res = new TestResponse();

      await userController.updateUserByUsername(req, res);
      expect(res.statusCode).toBe(200);
      expect(res.data).toMatchObject(updatedUser);
    });

    test('should return 404 if user not found on update', async () => {
      const userId = new ObjectId().toString();
      mockingoose(User).toReturn(null, 'findOneAndUpdate');

      const req = { params: { username: 'NonExistentUser' }, body: { FirstName: 'NonExistent' } };
      const res = new TestResponse();

      await userController.updateUserByUsername(req, res);
      expect(res.statusCode).toBe(404);
      expect(res.data).toHaveProperty('message', 'User not found');
    });
  });

  describe('deleteUserByUsername', () => {
    test('should delete user by username successfully', async () => {
      const userId = new ObjectId().toString();
      const user = { _id: userId, UserName: 'TestUser' };
      mockingoose(User).toReturn(user, 'findOneAndDelete');

      const req = { params: { username: 'TestUser' } };
      const res = new TestResponse();

      await userController.deleteUserByUsername(req, res);
      expect(res.statusCode).toBe(200);
      expect(res.data).toHaveProperty('message', 'User deleted successfully');
    });

    test('should return 404 if user not found during delete', async () => {
      const userId = new ObjectId().toString();
      mockingoose(User).toReturn(null, 'findOneAndDelete');

      const req = { params: { username: 'NonExistentUser' } };
      const res = new TestResponse();

      await userController.deleteUserByUsername(req, res);
      expect(res.statusCode).toBe(404);
      expect(res.data).toHaveProperty('message', 'User not found');
    });
  });
});
