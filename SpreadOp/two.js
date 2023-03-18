let emp = { id: 101, name: "rahul", sal: 45000, email: "rahul@gmail.com" }
let detials = { email: "rahul@pm.com", loc: "waynad" }

let emp_Details = { ...emp, ...detials }


console.log(emp_Details)