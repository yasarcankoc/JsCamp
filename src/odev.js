// Soru 1- Girilen sayıların asal sayı olup olmadığını kontrol eden fonksiyon.
console.log("Soru 1- Girilen sayıların asal sayı olup olmadığını kontrol eden fonksiyon.");
let isAsal = (...numbers) => {
    let bolenSayisi = 0
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j <= numbers[i]; j++) {
            if(numbers[i] > 1 && numbers[i] % j == 0) {
                bolenSayisi++
            }
        }
        if(bolenSayisi == 2){
            console.log(numbers[i] + " Asal sayıdır.");
        }
        bolenSayisi = 0
    }
}

isAsal(3,5,7,10,14,29,11,30)


// Soru 2- Girilen 2 sayının arkadaş sayılar olup olmadığını kontrol eden fonksiyon
console.log("Soru 2- Girilen 2 sayının arkadaş sayılar olup olmadığını kontrol eden fonksiyon");
let isArkadasSayi = (sayi1, sayi2) => {
    let bolenler1 = []
    let bolenler2 = []
    let enBuyukSayi = 0
    let sayilarToplam = sayi1 + sayi2

    if (sayi1 > sayi2)
        enBuyukSayi = sayi1
    else
        enBuyukSayi = sayi2

    for (let i = 0; i <= enBuyukSayi/2; i++) {
        if(sayi1 % i == 0) {
            bolenler1.push(i)
        }
        if (sayi2 % i == 0) {
            bolenler2.push(i)
        }
    }

    let birinciSayiBolenlerToplami = bolenler1.reduce((acc, sayi) => acc + sayi, 0)
    let ikinciSayiBolenlerToplami = bolenler2.reduce((acc, sayi) => acc + sayi, 0)
    let toplam = ikinciSayiBolenlerToplami + birinciSayiBolenlerToplami

    if (sayilarToplam == toplam) {
        console.log(`${sayi1} ve ${sayi2} arkadaş sayılardır.`);
    }
}

isArkadasSayi(1184,1210)


// Soru 3- 1000'e kadar olan mükemmel sayıları yazdıran fonksiyon
console.log("Soru 3- 1000'e kadar olan mükemmel sayıları yazdıran fonksiyon");
let isMukemmelSayi = () => {
    let mukemmelSayilar = []
    for (let i = 1; i <= 1000; i++) {
        let bolenlerToplam = 0
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                bolenlerToplam += j
            }  
        }   
        if (bolenlerToplam == i*2) {
            mukemmelSayilar.push(i)
        }
    }

    mukemmelSayilar.forEach(sayi => {
        console.log(sayi);
    });
    
}

isMukemmelSayi()


// Soru 4- 1000'e kadar olan asal sayıları yazdıran fonksiyon
console.log("Soru 4- 1000'e kadar olan asal sayıları yazdıran fonksiyon");
let asalSayilar = () => {
    for (let i = 2; i <= 1000; i++) {
        let asal = true
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                asal = false
                break
            }
        }
        if (asal) {
            console.log(i + " asal sayıdır123");
        }
    }
}

asalSayilar()