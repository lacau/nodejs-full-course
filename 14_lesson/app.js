const add = (numsArray, callback) => {
    if(!numsArray || numsArray.constructor !== Array) {
        callback('First argument should be an array')
        return
    }
    if(numsArray.length <= 1) {
        callback('First argument array length should be equal or greater than 2')
        return
    }

    var sum = numsArray.reduce((total, num) => {
        return total + num
    })
    
    callback(undefined, sum)
}

add([2, 8, 10], (error, sum) => {
    if(error) {
        console.log(error)
        return
    }

    console.log(sum)
})