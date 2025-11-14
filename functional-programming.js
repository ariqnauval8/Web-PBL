function countDown(number){
    console.log(number)

    var newNumber = number - 1

    if (newNumber > 0){
        countDown(newNumber)
    }
}

countDown(5)

console.log("")
console.log("")



function HitungLuasLingkaran(radius){
    var pi = 22/7

    function luas(r){
        return pi * r * r
    }

    function keliling(r){
        return 2 * pi *r
    }
    console.log("Luas : " + luas(radius))
    console.log("Keliling : " + keliling(radius))

}

HitungLuasLingkaran(7)

console.log("")
console.log("")


function tambah(a, b){
    return a + b
}

console.log(tambah(1,2))

function tambahCurrying(a){
    return function tambahCurrying(b){
        return a + b
    }
}


console.log(tambahCurrying(1)(2))