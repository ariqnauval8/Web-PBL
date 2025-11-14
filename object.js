var orang = 
[
    {
        nama: "John",
        umur: 25,
        pekerjaan: "programmer",    
    },
    {nama: "Doe",umur: 23,pekerjaan: "Manager"},
    {nama: "Tri",umur: 27,pekerjaan: "programmer"}
]

// console.log(orang[0].pekerjaan)

for(let i = 0; i < orang.length; i++){
    console.log(orang[i].nama)
}
// ForEach
console.log("")
console.log("--- FOR EACH ---")

orang.forEach(function(item, index){
    console.log(index+1 + " : " +item.nama)
})

// MAP
console.log("")
console.log("--- MAP ---")

var arrayNama = orang.map(function(item){
    return item.nama
})

console.log(arrayNama)


// FILTER
console.log("")
console.log("--- FILTER ---")

var arrayFilterOrang = orang.filter(function(item){
    return item.umur > 23
})

console.log(arrayFilterOrang)

// OBJECT BARU
console.log("")
console.log("--- OBEJECT BARU ---")
var siswa = []
var newObject = {}

newObject.id = 1
newObject.nama = "Tri" 
newObject.alamat = "Samarinda"

console.log(newObject)
siswa.push(newObject)
console.log(siswa)
// buah.sort((a,b) => a.harga - b.harga)

// TUGAS
console.log("")
console.log("--- TUGAS 1 ---")
var buah = [
    {nama: "Nanas", warna: "Kuning", "ada bijinya": "tidak", harga: 9000 },
    {nama: "Jeruk", warna: "Oranye", "ada bijinya": "ada", harga: 8000},
    {nama: "Semangka", warna: ["Hijau" , "Merah"], "ada bijinya": "ada", harga: 10000},
    {nama: "Pisang", warna: "Kuning", "ada bijinya": "tidak", harga: 5000}
]

var newBuah = buah.filter(function(item){
    return item["ada bijinya"] == "tidak"
})
console.log(newBuah)

console.log("")
console.log("--- TUGAS 2 ---")

function tambahDataFilm(nama, durasi, genre, tahun){
    var film = {}

    film.nama = nama;
    film.durasi = durasi;
    film.genre = genre;
    film.tahun = tahun;

    dataFilm.push(film)
}

var dataFilm = []

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")
console.log(dataFilm)

console.log("")
console.log("--- TUGAS 3 ---")

var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]

// Age > 29 dan Gender = male

var peopleFilter = people.filter(function(item){
    return item.age > 29 && item.gender == "male"
})

console.log(peopleFilter)


console.log("")
console.log("--- TUGAS 4 ---")

var peopleAge = people.map(function(item){
    return item.age
})

console.log(peopleAge)

var jumlah = 0
for(i = 0; i< peopleAge.length; i++){
    jumlah = jumlah + peopleAge[i]
}

console.log(jumlah/peopleAge.length)


console.log("")
console.log("--- CARA 2 ---")

var jumlah = 0
for(i = 0; i< people.length; i++){
    jumlah = jumlah + people[i].age
}

console.log(jumlah/peopleAge.length)

console.log("")
console.log("--- TUGAS 5 ---")

console.log("--SEBELUM DI SORT")
console.log(people)
people.sort((a,b) => b.age - a.age)
console.log("-- SETELAH DI SORT--")
// console.log(people)

people.forEach(function(item, index){
    console.log(index+1 + " - " +item.name)
})

for(i=0; i<people.length;i++){
    console.log(i+1 +" - "+ people[i].name)
}

console.log("")
console.log("--- TUGAS 6 ---")

var phone = {
  name: "Samsung Galaxy Note 20",
  brand: "Samsung",
  colors: ["Black"],
  release: 2020
}

function addColors(warna){
    phone.colors.push(warna)
}

addColors("Gold")
addColors("Silver")
addColors("Brown")
console.log(phone)

var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]

people.sort((a,b) => a.age - b.age)
console.log(people)

console.log("")
people.forEach(function(item, index){
    console.log(index+1 + " - " +item.name)
})

console.log("")
var phone = {
  name: "Samsung Galaxy Note 20",
  brand: "Samsung",
  colors: ["Black"],
  release: 2020
}
 function addColors(colors){
    phone.colors.push(colors)
 }

addColors("Gold")
addColors("Silver")
addColors("Brown")

console.log(phone)
