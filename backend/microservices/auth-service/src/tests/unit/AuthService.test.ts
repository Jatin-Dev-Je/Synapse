import { describe, it, expect, beforeAll, afterAll } from '@jest/globals';
import AuthService from '../../services/AuthService';
import { setupTestDb, teardownTestDb } from '../setup';

describe('AuthService', () => {
  beforeAll(async () => {
    await setupTestDb();
  });

  afterAll(async () => {
    await teardownTestDb();
  });

  describe('register', () => {
    it('should register a new user', async () => {
      const email = 'test@example.com';
      const password = 'password123';
      const name = 'Test User';

      const result = await AuthService.register(email, password, name);

      expect(result).toBeDefined();
      expect(result.user.email).toBe(email);
      expect(result.token).toBeDefined();
    });

    it('should throw error if user already exists', async () => {
      const email = 'existing@example.com';
      const password = 'password123';
      const name = 'Test User';

      await AuthService.register(email, password, name);

      await expect(AuthService.register(email, password, name)).rejects.toThrow(
        'User already exists'
      );
    });
  });

  describe('login', () => {
    it('should login successfully with correct credentials', async () => {
      const email = 'login@example.com';
      const password = 'password123';
      const name = 'Login User';

      await AuthService.register(email, password, name);
      const result = await AuthService.login(email, password);

      expect(result).toBeDefined();
      expect(result.token).toBeDefined();
      expect(result.refreshToken).toBeDefined();
    });

    it('should throw error with incorrect password', async () => {
      const email = 'wrong@example.com';
      const password = 'password123';
      const name = 'Wrong User';

      await AuthService.register(email, password, name);

      await expect(AuthService.login(email, 'wrongpassword')).rejects.toThrow(
        'Invalid password'
      );
    });
  });
});
