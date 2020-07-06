const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Home',
        name: 'Lacau'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        image: '__aaa.jpg',
        name: 'Lacau'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help",
        text: 'Help text explanation',
        name: 'Lacau'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: "404",
        message: 'Help article not found',
        name: 'Lacau'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: "404",
        message: 'Page no found',
        name: 'Lacau'
    })
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