// Object property shorthand
const name = 'Lacau'
const userAge = 34

const user = {
    name,
    "age": userAge,
    "location": "São Paulo"
}

console.log(user)

// Object destructuring
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

const { label:productLabel, stock = 5, rating = 5 } = product

console.log(productLabel)
console.log(stock)
console.log(rating)

// Destructuring on function argument
const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)