const request = require('request');

const forecast = (latitude, longitude, callback)=>{
  const url = `https://api.darksky.net/forecast/f4cf71bac233747057d8de890efa16f7/${latitude},${longitude}`;
  request({url, json:true}, (error, response)=>{
    if(error){
      callback('Unable to connect to the weather', undefined)
    } else if(response.body.error){
      callback('Unable to find location', undefined)
    } else {
      const data = `${response.body.daily.data[0].summary}  it is currently ${response.body.currently.temperature} degrees out.
        There is a ${response.body.currently.precipProbability}% chance of rain`
      callback(undefined, data)
    }
  })
}



module.exports = forecast;
