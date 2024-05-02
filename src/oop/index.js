class Customer{
    constructor(id, customerNumber){
        this.id = id
        this.customerNumber = customerNumber
    }
}

let customer = new Customer(1, "12345")
console.log(customer.id);

// prototyping

customer.bisey = "bişey"
console.log(customer.bisey);

Customer.x = 999
console.log(Customer.x);


let products = [
    {id:1, name:"Acer Laptop", unitPrice: 15000},
    {id:2, name:"Monster Laptop", unitPrice: 16000},
    {id:3, name:"Asus Laptop", unitPrice: 13000},
    {id:4, name:"Lenovo Laptop", unitPrice: 12000},
    {id:5, name:"Huawei Laptop", unitPrice: 17000},
]


// map fonksiyonu foreach döngüsü gibi çalışır. Dizi elemanlarını tek tek gezer bu sayede erişebiliriz.
console.log("<ul>")
products.map(product => console.log(`<li>${product.name}</li>`))
console.log("</ul>")

// filter fonksiyonu diziye istediğimiz filteryi uygular ve çıkan sonuca göre yeni dizi oluşturur.
let filterProduct = products.filter(product => product.unitPrice > 15000)
console.log(filterProduct);

// reduce fonksiyonu dizi elemanlarını toplamaya yarayan fonksiyon.
let cartTotal = products.reduce((acc,product)=> acc + product.unitPrice, 0)
console.log(cartTotal);

// map, filter ve reduce fonksiyonlarını tek bir örnekte kullanalım.
let example = products
            .filter(p=> p.unitPrice > 13000)
            .map(p=> {
                p.unitPrice = p.unitPrice * 1.18
                return p
            })
            .reduce((acc, p) => acc + p.unitPrice, 0)

console.log(example);



// Faktoriyel Bulma
function FirstFactorial(num) {   
    let result =0
    let toplam = 0
    let sayi = num
    for(let i=1; i<num; i++){
        if (i==1) {
            result = sayi * (sayi-1)
            sayi = sayi-1 
            toplam += result
            i++;
            continue
        }
      toplam = toplam * (sayi-1)
      sayi = sayi-1 
  
    }
    return toplam; 
  }
     
  console.log(FirstFactorial(8));

// girilen sayının faktöriyelini hesaplama
let x = 1
  function f (sayi) {
    for (let i = 1; i < sayi; i++) {
        x = x * (i+1)
    }
    return x
  }

console.log(f(8));