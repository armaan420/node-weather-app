const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=f604ff42f88b7ea3da9df7f83e7b6b2f&query=${latitude},${longitude}`

    request({url, json : true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        }else if(body.error){
            callback('Unable to find location!', undefined)
        }else{
            console.log(body.current);
            callback(undefined, {
                 place : body.location.region,
                 temperature : body.current.temperature,
                 feelslike : body.current.feelslike
            })
        }   
    })
}



module.exports = forecast;

