const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
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
        image: '__aaa.jpg'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help",
        text: 'Help text explanation'
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