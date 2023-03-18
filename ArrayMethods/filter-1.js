let cars = [{ name: "XUV500", brand: "Mahindra", color: "white", price: 150000 },
{ name: "swift", brand: "Maruthi", color: "white", price: 800000 },
{ name: "duster", brand: "Renault", color: "red", price: 150000 },
{ name: "nano", brand: "Tata", color: "white", price: 100000 },
{ name: "tiago", brand: "Mahindra", color: "white", price: 500000 },
{ name: "setos", brand: "KIA", color: "red", price: 2100000 },
{ name: "baleno", brand: "Maruthi", color: "blue", price: 900000 },
{ name: "kwid", brand: "Renault", color: "white", price: 400000 }]

let new_Cars = []
for (car of cars) {
    if (car.color == "white") {
        new_Cars.push(car)
    }
}
console.log(new_Cars)