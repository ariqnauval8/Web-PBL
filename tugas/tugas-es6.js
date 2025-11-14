console.log("")
console.log("-- Soal No 1 --")

luasLingkaran = (r) => {
    pi = 22/7
    return pi * r *r
} 

const kelilingLingkaran = (r) => {
    let pi = 22/7
    return 2 * pi * r
}

console.log(luasLingkaran(6))
console.log(kelilingLingkaran(7))

console.log("")
console.log("-- Soal No 3 --")

const newFunction = (firstName, lastName) =>{ //itu
  return {
    a : firstName, //ini
    b : lastName,
    fullName(){
      console.log(firstName + " " + lastName)
    }
  }
}


// kode di bawah ini jangan diubah atau dihapus sama sekali
console.log(newFunction("John", "Doe").a)
console.log(newFunction("Richard", "Roe").b)
newFunction("William", "Imoh").fullName()


console.log("")
console.log("-- Soal No 8 --")

graduate = (data) => {
  var newData = [...data]
  var newClass = {}

newData.forEach(function(item){
  if(!newClass[item.class]){
    newClass[item.class] = []
  }
  newClass[item.class].push(item.name)
})

  return newClass
}

// TEST CASES
 const data1 = [
  { name: "Ahmad", class: "adonis"},
  { name: "Regi", class: "laravel"},
  { name: "Bondra", class: "adonis"},
  { name: "Iqbal", class: "vuejs" },
  { name: "Putri", class: "laravel" }
]

const data2 = [
  { name: "Yogi", class: "react"},
  { name: "Fikri", class: "agile"},
  { name: "Arief", class: "agile"}
]


console.log(graduate(data1))
// Output
//  {
//   "adonis": [ "Ahmad", "Bondra" ],
//   "laravel": [" Regi", "Putri"],
//   "vuejs": ["Iqbal"]
// }

console.log(graduate(data2))
 // Output
// {
//   "react": ["Yogi"],
//   "agile": ["Fikri", "Arief"]
// }
