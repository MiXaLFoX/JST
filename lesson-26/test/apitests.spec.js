const axios = require('axios');
const chai = require('chai');
const { expect } = require('chai');
chai.use(require('chai-json-schema'));
const schema = require('../schema');


describe('API tests', () => {
  let response;
  it('status code check', async () => {
    response = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=37.39&lon=37.38&appid=a354a3fb5c2f472558b65074c4802ac8');
    expect(response.status).to.be.equal(200);
  });

  it('check if there is response data', async () => {
    expect(response.data).not.to.be.empty;
  });

  it('check JSON schema', async () => {
    expect(response.data).to.be.jsonSchema(schema);
  })
});