import { describe, it, expect, beforeAll, afterAll } from '@jest/globals';
import request from 'supertest';
import app from '../../app';
import { setupTestDb, teardownTestDb } from '../setup';

describe('Auth Routes', () => {
  beforeAll(async () => {
    await setupTestDb();
  });

  afterAll(async () => {
    await teardownTestDb();
  });

  describe('POST /api/auth/register', () => {
    it('should register a new user', async () => {
      const response = await request(app).post('/api/auth/register').send({
        email: 'newuser@example.com',
        password: 'password123',
        name: 'New User',
      });

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data.token).toBeDefined();
    });
  });

  describe('POST /api/auth/login', () => {
    it('should login successfully', async () => {
      await request(app).post('/api/auth/register').send({
        email: 'user@example.com',
        password: 'password123',
        name: 'Test User',
      });

      const response = await request(app).post('/api/auth/login').send({
        email: 'user@example.com',
        password: 'password123',
      });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.token).toBeDefined();
    });
  });

  describe('POST /api/auth/refresh', () => {
    it('should refresh token', async () => {
      const registerResponse = await request(app).post('/api/auth/register').send({
        email: 'refresh@example.com',
        password: 'password123',
        name: 'Refresh User',
      });

      const refreshToken = registerResponse.body.data.refreshToken;

      const response = await request(app).post('/api/auth/refresh').send({
        refreshToken,
      });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.token).toBeDefined();
    });
  });
});
