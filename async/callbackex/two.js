let sum = (a, b) => a + b
let multi = (a, b) => a * b

let calc = (a, b, callback) => {
    return callback(a, b)
}
console.log(calc(10, 20, sum)) //30
console.log(calc(10, 20, multi))//200