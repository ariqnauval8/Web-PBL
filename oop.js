class Car{
    constructor(brand, factory){
        this.nama = brand,
        this._pabrik = factory,
        this.klakson = "Honk! Honk!!"
    }

    get carName(){
        return this._pabrik
    }

    set carName(nama){
        this._pabrik = nama
    }

    present(nama){
        return "Saya "+nama+",  Memiliki mobil "+this.nama +" Dari dealer "+this.pabrik+ " dengan suara Klakson "+
        this.klakson
    }

    static hallo(){
        return "HAllo!!!"
    }
}


var mobil = new Car("Innova", "Toyota")
mobil.carName = "Honda"
console.log(Car.hallo())


class orang{
    constructor(nama){
    this.name = nama
    }
}

let john = new orang("John Doe")

console.log(john)

class guru extends orang{
    constructor(){
        super()
        this.jabatan
    }
}

console.log(guru)

