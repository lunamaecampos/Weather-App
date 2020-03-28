const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const url = 'https://api.darksky.net/forecast/f4cf71bac233747057d8de890efa16f7/37.8267,-122.4233';

geocode('Rancho Cucamonga', (error, data)=>{
  console.log('Error', error);
  console.log('Data', data);
})
forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})
