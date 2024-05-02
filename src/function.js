function addToCart(quantity, productName="Default") {
    console.log("Sepete Eklendi : " + productName);
}

addToCart("Telefon")

// Arrow Function kullanımı
let sayHello = ()=>{
    console.log("Arrow Function Kullanımı");
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World2");
}

sayHello2()

let product = { productName: "Çilek", quantity: 10, unitPrice: 150 }

function addToCart2(product) {
    console.log("Ürün Adı: " + product.productName)
    console.log("Adet: " + product.quantity)
    console.log("Fiyat: " + product.unitPrice);
}

addToCart2(product)

let product1 = { productName:"elma", quantity: 3, unitPrice: 500 }
let product2 = { productName:"elma", quantity: 3, unitPrice: 500 }

product2 = product1
product2.productName = "KARPUZ"

console.log(product1.productName);

// Destructuring
let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri, marmaraSehirleri]] = [
    {name:"İç Anadolu Bölgesi", populations: "20M"},
    {name:"Marmara Bölgesi", populations: "30M"},
    {name:"Karadeniz Bölgesi", populations: "10m"},
    [
        ["Kayseri", "Konya"],
        ["İstanbul", "Bursa"],
        ["Trabzon", "Kastamonu"]
    ]
]

console.log(icAnadolu.name);
console.log(icAnadolu.populations);
console.log(icAnadoluSehirleri);
console.log(marmaraSehirleri);