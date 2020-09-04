const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url= 'http://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&appid=d275b40cfcafcac00cb38d8dabb5f5c6&units=metric'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather[0].description + ' It is currently ' + body.current.temp + ' degress out.  ' )
        }
    })
}

module.exports = forecast