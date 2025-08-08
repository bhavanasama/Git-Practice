

// tests/controllers.test.js
const request = require('supertest');
const express = require('express');
const { setRoutes } = require('../src/routes/app');
const { connectToDatabase } = require('../src/config/database');

const app = express();
app.use(express.json());
setRoutes(app);

beforeAll(async () => {
  await connectToDatabase();
});

describe('Market Stock Endpoints', () => {
  it('should add a new stock', async () => {
    const response = await request(app)
      .post('/api/stocks')
      .send({
        
        stock_id: 11,
  stock_symbol: "NVDA",
  company_name: "NVIDIA Corporation",
  available_quantity: 800,
  price_per_unit: "612.78",
  sector: "Technology"
      });

    if (response.statusCode === 201) {
      console.log('✅ Test Passed: Added new stock');
    } else {
      console.log('❌ Test Failed: Could not add new stock', response.body);
    }

    expect(response.statusCode).toBe(201);

  });

  it('should fetch a stock by ID', async () => {
    const response = await request(app).get('/api/stocks/9');

    if (response.statusCode === 200 && response.body.stock_symbol === 'WIPR') {
      console.log('✅ Test Passed: Fetched stock with ID 9');
    } else {
      console.log('❌ Test Failed: Could not fetch stock or mismatch', response.body);
    }

    expect(response.body.stock_symbol).toBe('WIPR'); // Adjust this as per actual DB value
  });


describe('Buy & Sell Endpoints', () => {
  it('should buy stock', async () => {
    const response = await request(app)
      .put('/api/stocks/buy')
      .send({
        stock_symbol: 'AAPL',
        quantity: 3
      });

    if (response.statusCode === 200) {
      console.log('✅ Test Passed: Bought stock');
    } else {
      console.log('❌ Test Failed: Could not buy stock', response.body);
    }

    expect(response.statusCode).toBe(200);
  });

  });

  it('should sell stock', async () => {
    const response = await request(app)
      .put('/api/stocks/sell')
      .send({
        stock_symbol: 'INFY',
        quantity: 50
      });

    if (response.statusCode === 200) {
      console.log('✅ Test Passed: Sold stock');
    } else {
      console.log('❌ Test Failed: Could not sell stock', response.body);
    }

    expect(response.statusCode).toBe(200);
  });
});
