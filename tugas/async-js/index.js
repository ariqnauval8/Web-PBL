// console.log("")
// console.log("Nomor 1")

// function readBooks(time, book, callback ) {
//     console.log("saya membaca " + book.name )
//     setTimeout(function(){
//         let sisaWaktu = 0
//         if(time >= book.timeSpent) {
//             sisaWaktu = time - book.timeSpent
//             console.log("saya sudah membaca " + book.name + ", sisa waktu saya " + sisaWaktu)
//             callback(sisaWaktu) //menjalankan function callback
//         } else {
//             console.log('waktu saya habis')
//             callback(time)
//         }   
//     }, book.timeSpent)
// }
 
// var books1 = [
//     {name: 'LOTR', timeSpent: 3000}, 
//     {name: 'Fidas', timeSpent: 2000}, 
//     {name: 'Kalkulus', timeSpent: 4000},
//     {name: 'komik', timeSpent: 1000}
// ]

// function executeReadBooks(time, book){
//     readBooks(time, book[0], function(sisaWaktu){
//         book.shift()
//         if(book.length > 0){
//             executeReadBooks(sisaWaktu, book)
//         }
//     })
// }

// executeReadBooks(12000,books1)


console.log("")
console.log("Nomor 2")

// di file promise.js
function readBooksPromise (time, book) {
  console.log("saya mulai membaca " + book.name )
  return new Promise( function (resolve, reject){
    setTimeout(function(){
      let sisaWaktu = time - book.timeSpent
      if(sisaWaktu >= 0 ){
          console.log("saya sudah selesai membaca " + book.name + ", sisa waktu saya " + sisaWaktu)
          resolve(sisaWaktu)
      } else {
          console.log("saya sudah tidak punya waktu untuk baca "+ book.name)
          reject(time)
      }
    }, book.timeSpent)
  })
}
 
var books2 = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

function executeReadBooksPromise(time, book){
    readBooksPromise(time, book[0])
    .then(function(res){
        book.shift()
        if(book.length > 0){
            executeReadBooksPromise(res, book)
        }
    }).catch(function(err){
        console.log(`Waktu saya sisa ${err}`)
    })   
}

executeReadBooksPromise(8000, books2)