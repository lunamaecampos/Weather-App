const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2]

if(!address){
  console.log('Please Provide an Address');
} else {
  geocode(address, (error, {latitude, longitude, location})=>{
    if(error){
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if(error){
        return console.log(eror);
      }

      console.log(location);
      console.log(forecastData);
    })

  })
}
