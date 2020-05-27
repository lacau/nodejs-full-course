const request = require('request')

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=-23.569014&lon=-46.650159&appid=xx'

request({ 
    url: url,
    json: true
}, (error, response) => {
    if(error) {
        console.log(error)
        return
    }

    const data = response.body
    const lastData = data.list[data.list.length -1]
    console.log(lastData)
    console.log('Wind speed: ' + lastData.wind.speed)
    console.log('Temperature: ' + kelvinToCelcius(lastData.main.temp))
    console.log('Humidity: ' + lastData.main.humidity)
})

const kelvinToCelcius = value => {
    return parseFloat(value) - 273.15
}