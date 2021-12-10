
const request = require('supertest');
const db = require('../../db');
const server = require('../../index');

describe('Testing BMI', () => {
    jest.setTimeout(150000);
    it ('Test BMI POST API', async() => {
        try {
            const data = [
                {
                  "Gender": "Male",
                  "HeightCm": 171,
                  "WeightKg": 96
                },
                {
                  "Gender": "Male",
                  "HeightCm": 161,
                  "WeightKg": 85
                },
                {
                  "Gender": "Male",
                  "HeightCm": 180,
                  "WeightKg": 77
                },
                {
                  "Gender": "Female",
                  "HeightCm": 166,
                  "WeightKg": 62
                },
                {
                  "Gender": "Female",
                  "HeightCm": 150,
                  "WeightKg": 70
                },
                {
                  "Gender": "Female",
                  "HeightCm": 167,
                  "WeightKg": 82
                }
              ]
            const response = await request(server).post('/calculate-bmi').send(data);
            // expect(response.statusCode).toEqual(200);
            // expect(typeof response).toBe('object');
        } catch (e) {
            console.log(e);
        }
    })
});