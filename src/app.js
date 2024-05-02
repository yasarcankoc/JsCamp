// spread işlemi (...)
var fnc = function (sayi=10,...products) {
    console.log(sayi);
    console.log(...products);
}

let fruits = ["erik","kavun","çilek"]

fnc(5,"elma","armut","karpuz")
fnc(undefined,...fruits)
console.log(...fruits);


// Destructuring ( dizi elemanlarını değişkenlere atama(bölme) işlemi )
let populations = [10000, 20000, 30000]
let [val1, val2, val3] = populations
console.log(val1);
console.log(val2);
console.log(val3);

let category = {id:1, name: "Oyun"}
console.log(category.id)
console.log(category["name"])

let {id, name} = category
console.log(id);
console.log(name);