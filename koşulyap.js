// KOŞUL YAPILARI

// let not = 65
// if ( not >50){
//     console.log("geçtiniz,notunuz:" +not );
// }
// else{
//     console.log("kaldınız,notunuz:"+not);
// }

// ? örnek:

// let yaş = Number(prompt("yasınız:"))
// let para =Number (prompt("bütçeniz"))

// if (yaş>=18 && para>=3000 ){
//     alert("ehliyet sınavına katılabilirsiniz");
// }
// else{
//     alert("ehliyet sınavına katılmazsınız!");
// }

// ? örnek2:

// DERS ORTLAMASI BULMA
// vize1,vize2, %30'ar vize etkileyecek, % 40 final etkileyecek

let vize1 = Number(prompt("vize1 notunu "))
let vize2 = Number(prompt("vize2 notunuzu giriniz."))
let final = Number(prompt("final notunuzu giriniz"))
let ortalama = (vize1*0.3)+(vize2*0.3)+(final*0.4)
if (ortalama>=60 ){
    alert("geçtiniz tebrikler..."+ortalama)
    console.log("geçtiniz tebrikler..."+ortalama);
}
else{
    alert("kaldınız..."+ortalama)
    console.log("kaldınız..."+ortalama);
}