let state = {
    message: { m1: "GM", m2: "GA", m3: "GN" },
    msg: "Hello",
    product: { p_id: 101, p_Name: "Iphone" }
}

let { msg } = state
console.log(msg)


let { product } = state
let { p_Name } = product

console.log(p_Name)
/*

console.log(state.message)
console.log(state.message.m1)
console.log(state.msg)
console.log(state.product.p_Name) */