let calc = (a, b, op) => {
    if (op === "sum") {
        return a + b
    }
    if (op === "multi") {
        return a * b
    }


}
console.log(calc(10, 20, "sum")) //30
console.log(calc(10, 20, "multi"))//200