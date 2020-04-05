const request = require('request');

const forecast = (latitude, longitude, callback)=>{
  const url = `https://api.darksky.net/forecast/f4cf71bac233747057d8de890efa16f7/${latitude},${longitude}`;
  request({url, json:true}, (error, { body })=>{
    if(error){
      callback('Unable to connect to the weather', undefined)
    } else if(body.error){
      callback('Unable to find location', undefined)
    } else {
      const data = `${body.daily.data[0].summary}  it is currently ${body.currently.temperature} degrees out with a high of ${body.daily.data[0].temperatureHigh} and low of ${body.daily.data[0].temperatureLow}.  There is a ${body.currently.precipProbability}% chance of rain.`
      callback(undefined, data)
    }
  })
}



module.exports = forecast;
