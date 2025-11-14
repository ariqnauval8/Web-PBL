// console.log("")
// console.log("Set TimeOut")

// setTimeout(() => {
//     console.log("Saya Dijalankan Belakangan")
// }, 3000);

// console.log("Saya Dijalankan Duluan")

// console.log("")
// console.log("CALLBACK")

// function periksaDokter(nomerAntri, callback){
//     if(nomerAntri > 50){
//         callback(false)
//     }else if(nomerAntri < 10){
//         callback(true)
//     }
// }

// periksaDokter(65, function(check){
//     if(check){
//         console.log("Sebentar lagi giliran saya")
//     }else{
//         console.log("Saya jalan-jalan dulu")
//     }
// })


// console.log("")
// console.log("CALLBACK & SET TIMEOUT")

// function periksaAntriDokter(nomerAntri, callback){
//     console.log(`Sekarang Antrian ke ${nomerAntri}`)
//     setTimeout(() => {
//         if(nomerAntri === 10){
//             console.log(`Saya Masuk ke ruang Dokter`)
//             callback(0)
//         }else{
//             console.log(`Saya Masih menunggu`)
//             callback(nomerAntri+1)
//         }
//     }, 1000);
// }

// function execute(nomorAntri){
//     periksaAntriDokter(nomorAntri, function(nomerAntriBaru){
//         if(nomorAntri !== 0){
//             execute(nomerAntriBaru)
//         }
//     })
// }

// execute(7)


// console.log("")
// console.log("PROMISE")


// var isMomHappy = false

// // Promise
// var willGetNewPhone = new Promise(function(resolve, reject){
//     if(isMomHappy){
//         var phone = {
//             brand:"Iphone",
//             tipe:"16 Pro Mix Max"
//         }
//         resolve(phone)
//     }else{
//         var reason = new Error('Mom is not Happy!');
//         reject(reason)
//     }
// })

// function askMom(){
//     willGetNewPhone
//     .then(function(terpenuhi){
//         console.log(terpenuhi)
//     })
//     .catch(function(gagal){
//         console.log(gagal.message)
//     })
// }

// askMom()


console.log("")
console.log("PROMISE DENGAN RETURN")


function periksaDataPasien(nomorIdPasien){
    var dataPasien = [
        {id: 1, nama:"John", jenisKelamin:"Laki-Laki"},
        {id: 2, nama:"Michael", jenisKelamin:"Laki-Laki"},
        {id: 3, nama:"Sarah", jenisKelamin:"Perempuan"},
        {id: 4, nama:"Frank", jenisKelamin:"Laki-Laki"}
    ]

    return new Promise(function (resolve, reject){
        var pasien = dataPasien.find(x => x.id === nomorIdPasien)
        if (pasien == undefined){
            reject("Data Pasien tidak ditemukan")
        }else {
            resolve(pasien)
        }
    })
}

async function cekPasien() {
    try{
    let dataPasien = await periksaDataPasien(5)
    console.log(dataPasien)
    }catch(err){
    console.log(err.message)
    }
}

cekPasien()

periksaDataPasien(4)
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})


console.log("")
console.log("ASYNC AWAIT")

// function doAsync(){
//     return new Promise(function(resolve, reject){
//         var check = true
//         if(check){
//             resolve("berhasil")
//         }else{
//             reject("Gagal")
//         }
//     })
// }


