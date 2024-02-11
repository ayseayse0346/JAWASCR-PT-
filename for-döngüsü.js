// For döngüsü
/*
for(değişken;koşul;artırma-azaltma){
   / codlar
}
*/

for (let i = 1; i<=10; i++){
    console.log(i);
}
console.log("------ÖRNEKLER----");    
// ?ÖRNEKLER:

// 1 den 10'a kadar çiftleri  yazdıralım

for (let i = 0 ; i<=10; i+=2){
    console.log(i);
}

// 1den 10 a kadar tek syaılaeı yazdıralım
console.log("1den 10a kadar tek sayılar");

for (let i = 1 ; i<=10; i+=2){
    console.log(i);
}

// teklerde ayse yazsın çiftlerde merhaba yazsın 

for (let i = 1; i<=10; i++){
    if(i%2==1){
        console.log("ayse");
    }else{
        console.log("merahaba");
    }
}

// 50den bire kadar gidelim ve toplamlarını bulalım
let toplam = 0
for ( let i = 50; i>=1; i--){
    toplam+=i
    console.log(i);
    // console.log("toplam:",toplam);
}

console.log("toplam:",toplam);