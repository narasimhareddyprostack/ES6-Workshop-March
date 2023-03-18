let enames = ["kiran", "girish", "bhanu", "tendul", "pk"]
//create new array based on existing array, convert elemnt upper case 
let new_Enames = []
for (ename of enames) {
    new_Enames.push(ename.toUpperCase())
}
console.log(enames)
console.log(new_Enames)