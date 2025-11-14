class Animal {
    constructor(name){
        this._name = name
        this.legs = 4
        this.cold_blooded = false
    }

    get name(){
        return this._name
    }

    set name(nama){
        this._name = nama
    }

    
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
sheep.legs = 3
console.log(sheep.legs)



console.log("")
console.log("Soal No.2")


// Code class Ape dan class Frog di sini
class Ape extends Animal{
    constructor(name){
        super(name)
    }

    yell(){
        return "Auooo"
    }
}

class Frog extends Animal{
    constructor(name){
        super(name)
    }

    jump(){
        return "Hop Hop"
    }
}

console.log("")
console.log("APE")

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
sungokong.legs = 2
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)
console.log(sungokong.yell())


console.log("")
console.log("FROG")

var kodok = new Frog("buduk")
kodok.jump() // "hop hop"
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)
console.log(kodok.jump())

