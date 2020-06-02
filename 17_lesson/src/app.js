const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath))

const printHeaders = ({ headers }) => {
    console.log("####################")
    console.log('#  HEADERS')
    console.log("####################")
    console.log(JSON.stringify(headers));
}

app.listen(3000, () => {
    console.log('Server started at port 3000')
})