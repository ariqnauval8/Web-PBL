let nama = "john"
console.log(nama)

if(true){
    let nama = "Doe"
    console.log(nama)
}

console.log(nama)


const halo = function sayHello(nama){
    console.log("Hallooooooo "+nama)
}

const sayHai = (nama) => {
    console.log("Haiiii "+nama)
}

halo("Tri Agil");
sayHai("Pribadi")

let umur = [5,6,1,23,4]

umur.sort((a,b) => a - b)

umur.sort(function(a,b){
    return a - b
})

console.log(umur)

function testing(nama, umur=10){
    console.log(`Nama 'Saya ${nama} Umur" Saya ${umur} Tahun`)
}

testing("pribadi", 20)

let namaDepan = "john"
let nam = "john"
let orang = {
    nam,
    umur: 27
}

console.log(orang)

console.log("")
console.log("DESTRUCTURING ARRAY")

let angka = [1,5,7,8,9]

console.log(angka)
console.log(angka[0])
console.log(angka[1])
console.log(angka[4])

// let angka = [1,5,7,8,9]
let [num1, num2, , , lastNum] = [1,5,7,8,9]
console.log([angka[0], angka[1],angka[4]])

console.log([num1, num2, lastNum])
console.log(angka[2])

console.log("")
console.log("DESTRUCTURING OBJECT")

let car = {
    brand: "Wuling",
    type: "Air EV",
    color: "Putih"
}

let {brand, type, color} = car


console.log(brand)


console.log("")
console.log("REST PARAMATERS")

let footballers = ["Arhan", "Jay Idzes", "Kevin Diks", "Bambang Pamungkas"]

console.log(footballers)

let [arhan, jay, ...restFooballers] = footballers


console.log(arhan, jay)
console.log(restFooballers)


console.log("")
console.log("SPREAD")

let buah = ["Durian", "Buah Naga", "Mangga", "Melon"]
console.log(buah)
// buah.push("Strawberry")
// console.log(buah)
// buah.unshift("Delima")
// console.log(buah)
buah = ["Delima", ...buah, "Strawberry"]


console.log(buah)