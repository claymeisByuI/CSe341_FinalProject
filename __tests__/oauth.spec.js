/* eslint-disable no-undef */
const { checkPassword, getPasswordHash } = require('../utils/oauth');
const assert = require('assert');
const bcrypt = require('bcrypt');

describe('OAuth Utilities', function () {
  describe('checkPassword', function () {
    it('should return true for correct password', async function () {
      const plainPassword = 'I@mABas1cCl!3nt';
      const hash = await bcrypt.hash(plainPassword, 10);
      const result = await checkPassword(plainPassword, hash);
      assert.strictEqual(result, true);
    });

    it('should return false for incorrect password', async function () {
      const plainPassword = 'I@mABas1cCl!3nt';
      const hash = await bcrypt.hash(plainPassword, 10);
      const result = await checkPassword('wrongpassword', hash);
      assert.strictEqual(result, false);
    });
  });

  describe('getPasswordHash', function () {
    it('should generate a hash for valid password', async function () {
      const validPassword = 'I@mABas1cCl!3nt';
      const boundGetPasswordHash = getPasswordHash.bind({ PasswordHash: validPassword });
      const hashed = await boundGetPasswordHash();
      const isValid = await bcrypt.compare(validPassword, hashed);
      assert.strictEqual(isValid, true);
    });

    it('should throw error for invalid password', async function () {
      const invalidPassword = 'short1!';
      const boundGetPasswordHash = getPasswordHash.bind({ PasswordHash: invalidPassword });
      await assert.rejects(async () => {
        await boundGetPasswordHash();
      }, /Password must be at least 8 characters long/);
    });
  });
});
