/*BEDEN KİTLE İNDEXİ HESAPLAMA */

let kilo = Number(prompt(" kilonuzu giriniz:"));
let boy = Number(prompt("boyunuzu metre cinsinden giriniz:"));

let sonuç = kilo/(boy*2);

if (sonuç<18.5){
console.log("ideal kilonun altında:" + sonuç);
}
else if (sonuç>=18.5 && sonuç<=24.9){
console.log("ideal kiloda:" + sonuç);
}
else if (sonuç>=25 && sonuç<=29.9){
console.log("ideal kilonun üstünde:" +sonuç);
}
else if (sonuç>=30 && sonuç<=39.9){
console.log("obez:" + sonuç);
}
else if(sonuç>=40){
    console.log("morbid obez:" + sonuç);

}