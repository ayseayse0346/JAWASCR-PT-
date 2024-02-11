/* 

asal sayı bulma


*/

// let a = Math.floor(7.9)
// console.log(a);

let sayı =Number(prompt("lütfen bir sayı giriniz:"))  
let sonuç = true;

for (let i = 2; i<=Math.floor(sayı/2); i++){
    if(sayı%i==0){
        // asal değildir.
        sonuç=false;
        break;
    }
}

if(sonuç){
    alert(sayı+"asaldır")
}else{
    alert(sayı+"asal değildir.")
}