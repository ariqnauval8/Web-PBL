// menulis variable
let nama = "Ragil"
let usia = 10
let greet = `Halo, Perkenalkan Nama Saya ${nama} umur saya ${usia} tahun`
let greet2 = "Halo, Perkenalkan Nama Saya "+nama+" umur saya "+usia+" tahun"


console.log(greet)
console.log(greet2)

let nam = "BPVP Samarinda"
console.log(nam.length)
console.log(nam.charAt(5))
console.log("slice : "+nam.slice(10,5))
console.log("substring : "+nam.substring(10,5))
console.log("Uppercase : "+nam.toUpperCase())
console.log("LowerCase : "+nam.toLowerCase())
console.log("concat : "+nam.concat(" saya halo"))
console.log(nam.split("a"))
let newText = nam.replace("a", "z")
console.log(newText)

let angka1 = 10
let angka2 = 20

// Penjumlahan
var hasil = angka1+angka2
// 10+20
console.log(hasil)

// pengurangan
var hasil = angka1-angka2
// 10-20
console.log(hasil)

// Perkalian
var hasil = angka1*angka2
// 10x20
console.log(hasil)

//Pembagian
var hasil = angka1/angka2
// 10/20
console.log(hasil)

// Modulus
var hasil = 9%2
console.log(hasil)


var hasil = angka1--
console.log(hasil)




var umur
console.log(umur) //Undefined
umur = 10
console.log(umur) //10

// comparasion
var usia1 = 15
var usia2 = '16'

console.log(15 == 16)
console.log(15 === 16)
console.log(15 != 16)
console.log(15 !== 16)

console.log(16 <= 16) //False


var benar = true
var salah = false
console.log(1==1 && 2==2) //true
console.log(1==1 && 1>2) //false

console.log(benar || benar) //true
console.log(benar || salah) //true



// Hitung Luas Persegi
// Panjang x Lebar


// Hitung Luas Lingkaran
// phi x Jari"^2

// Hitung Luas Segitiga
// 1/2 x Alas X Tinggi