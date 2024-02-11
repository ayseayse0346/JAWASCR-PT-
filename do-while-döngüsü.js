/*
DO WHİLE DÖNGÜSÜ(kodlar en az bir kere çalışır.)

do {
    /kodlar
}while(koşul);

*/

// ?ÖRNEKLER
console.log("DO WHİLE ÖRNEKLERİ-1den 10a kadar yazdır.");

let sayac = 1
do {
   console.log(sayac); 
   sayac++
} while (sayac<=10);

// ?not koşul saplamazsa en az bir kere çalışır.

let yas = 23;
do {
    console.log("ehliyeti alabilirsiniz");
   
} while (yas>=25);


// ? 1den 20ye kadar olan tek sayıları yazdıralım ve  toplamını bulalım

console.log("1den 20ye kadar olan tek sayıları yazdıralım ve  toplamını bulalım");

let sayı = 1;
let toplam = 0;
 do {
    if(sayı%2==1){
        console.log(sayı);
toplam+=sayı
    }
    sayı++
 } while (sayı<=20);

console.log("toplam:",toplam);

