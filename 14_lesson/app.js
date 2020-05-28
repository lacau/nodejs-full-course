setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)

const names = ['Lacau', 'Jen', 'Jess']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

console.log(shortNames)

const mySetTimeout = async (callback, miliseconds) => {
    await setTimeout(callback, miliseconds);
}

const test = () => {
    mySetTimeout(() => {
        console.log('Five seconds are up')
    },5000)
}

test()

const add = (num1, num2, callback) => {
    setTimeout(() => {
        callback(num1 + num2)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})