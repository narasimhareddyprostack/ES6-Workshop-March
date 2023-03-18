let enames = ["kiran", "girish", "bhanu", "tendul", "pk"]
//create new array based on existing array, convert elemnt upper case 
let new_Enames = enames.forEach((ename) => {
    return ename.toLocaleUpperCase()
})
console.log(enames)
console.log(new_Enames)