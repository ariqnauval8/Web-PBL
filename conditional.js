// var jam = 13;

// if (jam < 12){
//     console.log("Selamat Pagi")
// }

// var jam = 25;
// if (jam < 0 ){
//     console.log("Jam Salah")
// }else if (jam < 12){
//     console.log("Selamat Pagi")
// }else if (jam < 16){
//     console.log("Selamat Siang")
// }else if (jam <= 24){
//     console.log("Selamat Malam")
// }else{
//     console.log("Jam Salah")
// }


// var mood = "baik"
// var hari = "mendung"

// if (mood == "baik" || hari == "cerah"){
//     console.log("Hari Ini Saya Sangat Bahagia")
// } else if(mood == "baik" || hari == "mendung"){
//     console.log("Hari Ini Saya Bahagia")
// } else if(mood == "buruk" || hari == "Cerah"){
//     console.log("Hari Ini Saya Capek")
// } else if(mood == "buruk" || hari == "Mendung"){
//     console.log("Hari Ini Saya Bete")
// }


var miniMarket = "open"
var telur = "ready"
var buah = "readya"


if(miniMarket == "open"){
    console.log("Mini Market sedang buka")
    if(telur == "soldout" && buah == "soldout"){
        console.log("Belanjaan Saya Tidak Lengkap")
    }else if(buah == "soldout"){
        console.log("Buah Sedang Sold Out, Telur Ready")
    }else if(telur == "soldout"){
        console.log("Telur Sold Out, Buah Ready")
    }
    else if(telur =="ready" && buah=="ready"){
        console.log("Belanjaan saya Lengkap")
    }else{
        console.log("Inputan Salah")
    }
}else if(miniMarket == "close"){
    console.log("Mini Market sedang Tutup")
}else{
    console.log("inputan salah")
}



// SWITH CASE
var hari = "senin";

switch(hari){
    case "senin" :{
        console.log("1")
        break
    }
    case "selasa" :{
        console.log("2")
        break
    }case 3 :{
        console.log("3")
        break
    }case 4 :{
        console.log("4")
        break
    }case 5 :{
        console.log("5")
        break
    }case 6 :{
        console.log("6")
        break
    }case 7 :{
        console.log("7")
        break
    }default: {
        console.log("Anda Memasukan Angka Diluar jangkauan")
    }
}


// LOOPING
// FOR
console.log("--LOOPING FOR--")

for (let i = 1; i <= 20; i++) {
//   console.log(i)
  
    if(i%2 == 0){
        // console.log(i + "Bilangan Genap!")
        console.log(`${i} = Bilangan Genap`)
    }else if(i%2 == 1){
        console.log(i+ " = Bilangan Ganjil!")
    }else{
        console.log("Anda Bukan Memasukan Angka")
    }
}
console.log("Keluar dari Perulangan")



console.log("--LOOPING WHILE--")
i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
console.log("Keluar dari Perulangan")

// if(true)
// {
//     console.log("Kode Program Didalam If")
// }else{
//     console.log("Kode Program didalam Else")
// }

// if(false)
// {
//     console.log("Kode Program Tidak Dieksekusi")
// }
// // console.log("Kode didalam Blok DI lewati")


// IF.. ELSE
console.log("-- IF.. ELSE --")

var bilangan = "10"

if(bilangan%2 == 0){
    console.log("Bilangan Genap!")
}else if(bilangan%2 == 1){
    console.log("Bilangan Ganjil!")
}else{
    console.log("Anda Bukan Memasukan Angka")
}


// ARRAY

let namaPeserta = []
console.log("--Nama Peserta Pelatihan Pengembangan Web--")
namaPeserta.push("Febri","Bagus","Tirta","Azra","Surya","Ragil","Norpa","Nanto","Ariq","Irfan","Deni","Rivat","Sulis","Sindi","Serly","Tita")
//console.log(namaPeserta)
console.log("1 : "+namaPeserta[0])
console.log("2 : "+namaPeserta[1])
console.log("3 : "+namaPeserta[2])
console.log("4 : "+namaPeserta[3])
