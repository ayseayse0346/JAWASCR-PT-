/*
BREAK-CONTİNUE
Döngü kırmaya yani istediğimiz yerden döngüden çıkmaya yarar.
*/

// ? ÖRNEK: 1den 10 a kadar olan sayıları yazdıralım ama 8 e geldiğinde döngüden çıksın

console.log("ÖRNEKLER:  1den 10 a kadar olan sayıları yazdıralım ama 8 e geldiğinde döngüden çıksın");

let sayac = 1

while (sayac<=10) {
    console.log(sayac);
    if (sayac===8){
        break;
    
    }
    sayac++
} 


console.log("continue (döngüyü sadece bir defa kırmak için . ve kırınca kaldığı yerden devam eder)");
// ?örnek 1 2 3 4 5 6 7 9 10 bu syaıları yazdırsın ancak 8 yazdırmasın 
console.log("örnek: 1 2 3 4 5 6 7 9 10 bu syaıları yazdırsın ancak 8 yazdırmasın");

let sayı = 0
while (sayı<=10) {
    
    sayı++
    if(sayı>10){
        break;
    }
    if(sayı===8){
        continue;
    }
   console.log(sayı); 
   
}