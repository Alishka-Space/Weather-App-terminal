const request = require('request');
const dotenv = require('dotenv').config();

const address = process.argv[2];

const url = `https://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${process.env.API_KEY}`;

if (!address) {
    return console.log('Please Enter The Name Of The City');
}


request(url, (error, response, body) => {

    const data = JSON.parse(body);

    // console.log(process.argv)
    console.log(`The temperature in ${address} is ${data.main.temp}°C OutSide`);
})