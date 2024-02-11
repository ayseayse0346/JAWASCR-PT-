/*
?WHİLE DÖNGÜSÜ

while(koşul){
    /kodlar

    /sayacın değerini atarız(Kaç kere dönmesini istersek onu yazıcaz i++ gibi)yoksa sonsuz döngüye girr.
}

*/
console.log("WHİLE DÖNGÜSÜ ÖRNEKLERİ");
let sayac = 1;
while(sayac<=10){
    console.log(sayac);
    sayac++;
}

// ? 1 den 10 a kadar çiftleri yazdır
console.log("1 den 10 a kadar çiftleri yazdır");
let sayı = 1;
while(sayı<=10){
    if(sayı%2==0){
        console.log(sayı);
    }
   sayı++;
}

//? break ile döngüyü kırarak çıkmak .bu örenkelte 1den sekize kadar yazdırdı.
console.log("break "); 

let num = 1
while(true){
    console.log(num);
    if(num===8){
        break;
    }
    num++
}




