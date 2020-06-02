const express = require('express')

const app = express()

app.get('', (req, res) => {
    printHeaders(req)
    
    res.send('Hello express!')
})

app.get('/help', (req, res) => {
    printHeaders(req)

    res.send('Help page')
})

app.get('/about', (req, res) => {
    printHeaders(req)

    res.send('<h1>About</h1><hr>')
})

const printHeaders = ({ headers }) => {
    console.log("####################")
    console.log('#  HEADERS')
    console.log("####################")
    console.log(JSON.stringify(headers));
}

app.listen(3000, () => {
    console.log('Server started at port 3000')
})