console.log("-- Tugas 1 --")

function HitungPersegi(sisi){
    
    function luasPersegi(s){
        return s * s
    }

    function KelilingPersegi(s){
        return 4 * s
    }

    console.log(`Luas Persegi `, luasPersegi(sisi))
    console.log(`Keliling Persegi `, KelilingPersegi(sisi))   
}


function HitungPersegiPanjang(panjang, lebar){
    
    function luasPersegiPanjang(p,l){
        return p * l
    }

    function KelilingPersegiPanjang(p,l){
        return 2 * (p + l)
    }

    console.log(`Luas Persegi Panjang `, luasPersegiPanjang(panjang, lebar))
    console.log(`Keliling Persegi Panjang`, KelilingPersegiPanjang(panjang, lebar))   
}


HitungPersegi(8)
HitungPersegiPanjang(12,7)

console.log("")
console.log("-- Tugas 2 --")

function hitungKubus(sisi){
    
    function volumeKubus(s){
        return s * s * s
    }

    function LuasAlasKubus(s){
        return s * s
    }

    console.log(`Volume Kubus `, volumeKubus(sisi))
    console.log(`Keliling Persegi `, LuasAlasKubus(sisi))   
}


function HitungBalok(panjang, lebar, tinggi){
    
    function volumeBalok(p,l,t){
        return p * l * t
    }

    function LuasAlasBalok(p , l){
        return p * l
    }

    console.log(`Volume Balok `, volumeBalok(panjang, lebar, tinggi))
    console.log(`Luas Alas Balok`, LuasAlasBalok(panjang, lebar))   
}


hitungKubus(8)
HitungBalok(12,7,5)

console.log("")
console.log("-- Tugas 3 --")

var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]

// console.log(people)
people.sort((a,b) => a.age - b.age)
// console.log(people)


function urutUmur(array, index=0){
    if(index < array.length){
        newIndex = index + 1
        console.log(newIndex + " : " +array[index].name)
        urutUmur(array, newIndex)
    }
}

urutUmur(people)



console.log("")
console.log("-- Tugas 4 --")

var phones=[
  {name: "Samsung Galaxy A52", brand: "Samsung", year: 2021, colors: ["black", "white"]},
  {name: "Redmi Note 10 Pro", brand: "Xiaomi", year: 2021, colors: ["white", "blue"]},
  {name: "Redmi Note 9 Pro", brand: "Xiaomi", year: 2020, colors: ["white", "blue", "black"]},
  {name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"]},
  {name: "Iphone 11", brand: "Apple", year: 2019, colors: ["gold", "black", "silver"]},
]

// console.log(phones)
phones.sort((a,b) => a.year - b.year)
// console.log(phones)

var phoneWithBlack = phones.filter(function(item){
    return item.colors.includes("black")
})

console.log(phoneWithBlack)

function tampilData(data, index=0){
    if(index < data.length){
        newIndex = index + 1
        console.log(newIndex + " : "+data[index].name +" , "+data[index].colors)
        tampilData(data,newIndex)
    }
}

tampilData(phoneWithBlack)