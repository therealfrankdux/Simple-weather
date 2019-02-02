const request = require('request');
const argv = require('yargs').argv;

let apiKey = '56661193bee69cf5d54c5e3e4c090131';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error)
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} fuckin degrees in ${weather.name}!`;
    console.log(message);
  }
});
