const peserta = ["Tirta","Ragil","Deni","Serly"]


console.log(peserta[2])
console.log(peserta[4])

// length ->menghitung panjang Array
console.log("Panjang Array : " +peserta.length)

// push -> menambahkan 1 data kedalam Array pada Index Paling AKhir
console.log("--PUSH--")
console.log("Array Sebelum PUSH : ")
console.log(peserta)
peserta.push("tri")
console.log("Array Setelah Push: ")
console.log(peserta)

// pop -> Menghapus 1 Data Dalam Pada Index Paling Akhir
peserta.pop()
console.log("Array Pop : " +peserta[4])

// unshift -> menambahkan 1 data kedalam Array pada Index Paling Awal/Depan (0)
console.log("--UNSHIFT--")
console.log("Array Sebelum Unshift : ")
console.log(peserta)
peserta.unshift("Sulis")
console.log("Array Setelah Unshift : ")
console.log(peserta)

// shift -> Menghapus 1 Data Dalam Pada Index Paling Paling Awal/Depan (0)
console.log("Array Sebelum Shift : " +peserta[0])
peserta.shift()
console.log("Array Setelah Shift : " +peserta[0])

console.log(peserta)

// join
pesertaJoin = peserta.join("-")
console.log(peserta)
console.log(pesertaJoin)

// sort 
console.log("--SORT--")
console.log(peserta)
peserta.sort()
console.log(peserta)

// Reveser
console.log("--REVERSE--")
console.log(peserta)
peserta.reverse()
console.log(peserta)

// slice 
console.log("--SLICE--")
// console.log(peserta.slice(1,2))
console.log(peserta)
console.log(peserta.slice(0, 2 ))


// splice 
console.log("--SPLICE--")
console.log(peserta)
peserta.splice(2, 0, "Sulis")
console.log(peserta)

// Edit Element
console.log("--EDIT ELEMENT--")
console.log(peserta)
peserta[2] = "Sindi"
console.log(peserta)





var namaPeserta = []
// Febri
// Bagus
// Tirta 
// Azra
// Surya 
// Ragil 
// Norpa 
// Nanto 
// Ariq 
// Irfan 
// Deni 
// Rivat 
// Sulis 
// Sindi 
// Serly 
// Tita
// console.log(namaPeserta)
// //Output
// ['Febri','Bagus','Tirta','Azra',dst]



console.log("--Nama Peserta Pelatihan Pengembangan Web--")
// console.log("--Cara 1--")
// namaPeserta.push("Febri","Bagus","Tirta","Azra","Surya","Ragil","Norpa","Nanto","Ariq","Irfan","Deni","Rivat","Sulis","Sindi","Serly","Tita")
// console.log(namaPeserta)


// console.log("--Cara 2--")
// let namaPesertaBaru = ["Febri","Bagus","Tirta","Azra","Surya","Ragil","Norpa","Nanto","Ariq","Irfan","Deni","Rivat","Sulis","Sindi","Serly","Tita"]
// namaPeserta.push(namaPesertaBaru)
// console.log(namaPeserta)


console.log("--Cara 3--")
namaPeserta.push("Febri")
namaPeserta.push("Bagus")
console.log(namaPeserta)


var sayuran = []

sayuran.push(
    "Kangkung","Bayam","Buncis","Kubis","Timun","Seledri","Tauge"
)

console.log(sayuran)


var tanggal = 17
var bulan = 2
var tahun = 1945


switch(1) {
    case 1 : {
        console.log(`${tanggal} Januari ${1945}`)
        break
    }
    case 2 : {
        bulan = "Februari"
        break
    }default : {
        console.log("Bulan yang anda Masukan Salah")
    }
}

// console.log(`${bulan}`)
console.log("")
for(let i = 1; i <= 20 ; i++){
    if(i%2 == 0 ){
        console.log(`${i} - Angka Genap`)
    }else if(i%2 == 1 ){
        console.log(`${i} - Angka Ganjil`)
    }
}


console.log("")
console.log("--Dengan Function--")
function ganjilGenap(a){
    if(a%2 == 0 ){
        return console.log(`${a} - Angka Genap`)
    }else if(a%2 == 1 ){
        return console.log(`${a} - Angka Ganjil`)
    }
}

for(let i = 1; i <= 20 ; i++){
    ganjilGenap(i)
}

