// ?ÖRNEK1

// let sayı = prompt("lütfen 1 ile 4 arasında bir sayı giriniz:")

// switch (sayı) {
//     case "1":
//         console.log("girilen sayı 1'dir.");
//         break;
//     case "2":
//         console.log("girilen sayı 1'dir.");
//         break;
//     case "3":
//         console.log("girilen sayı 1'dir.");
//         break;
//     case "4":
//         console.log("girilen sayı 1'dir.");
//         break;


//     default:
//         console.log("lütfen geçerli bir sayı giriniz!");
//         break;
// }

// ?ÖRNEK2 HAFTANIN GÜNLERİ UYGULAMASI

// let yenisatır = "\r\n"
// let metin ="1-pazartesi"+yenisatır+
// "2-salı"+yenisatır+
// "3-çarşamba"+yenisatır+
// "4-perşembe"+yenisatır+
// "5-cuma"+yenisatır+
// "6-cumartesi"+yenisatır+
// "7-pazar"+yenisatır+
// "lütfen 1-7 arasında bir değer giriniz:"

// let değer = prompt(metin);
//  switch (değer) {
//     case "1":
//         console.log("pazartesi günü");
//         break;
//     case "2":
//         console.log("salı günü");
//         break;
//     case "3":
//         console.log("çarşamba günü");
//         break;
//     case "4":
//         console.log("perşembe günü");
//         break;
//     case "5":
//         console.log("cuma günü");
//         break;
//     case "6":
//         console.log("cumartesi günü");
//         break;
//     case "7":
//         console.log("pazar günü");
//         break;
 
//     default:
//         console.log("yanlış bir değer girdiniz!");
//         break;
//  }

//  ?ÖRNEK 
// TYT PUANI HESAPLAMA 
/*
1-türkçe 40soru            -4 yanlış 
1-matematik 40soru
1-sosyal 40soru
1-fen 40soru

-->100 puan ösym veriyor
--> okul puanı max 60 puan
*/

let türkçedoğru,türkçeyanlıs = 0;
let matdoğru,matyanlıs = 0;
let sosyaldoğru,sosyalyanlıs =0;
let fendoğru,fenyanlıs = 0;
let okulpuanı = 0;
let puan = 0;
let yenisatır = "\r\n";

let metin = "TYT puan hesaplama uygulamasına hoşgeldiniz..."+yenisatır+
"1-puan hesaplama"+yenisatır+
"2-çıkış yapma"+yenisatır+
"lütfen seçiminizi yapınız (1 or 2)"

let mesaj = prompt(metin)

switch (mesaj) {
    case "1":
        // hesaplama yapsın
        okulpuanı=+prompt("lütfen okul puanınızı giriniz:")
        türkçedoğru = +prompt("türkçe doğru sayısı")
        türkçeyanlıs = +prompt("türkçe yanlış sayısı")
        matdoğru = +prompt("mat doğru sayısı")
        matyanlıs = +prompt("mat yanlış sayısı")
        sosyaldoğru = +prompt("sosyal doğru sayısı")
        sosyalyanlıs = +prompt("sosyal yanlış sayısı")
        fendoğru = +prompt("fen doğru sayısı")
        fenyanlıs = +prompt("fen yanlış sayısı")
        
// 30 doğru sayısı 8 yanlış --> 8/4=2 --> 30-2=28 doğru sayısı
let doğrusayısı =türkçedoğru+matdoğru+sosyaldoğru+fendoğru;
let yanlışsayısı = türkçeyanlıs+matyanlıs+sosyalyanlıs+fenyanlıs;
let kalandoğrusayısı = doğrusayısı-(yanlışsayısı/4) ;
puan = (kalandoğrusayısı*4)+100+okulpuanı;
alert("TYT puanınız:"+puan)

        break;
case "2":
    // çıkış yapsın
    alert("çıkış yapılıyor...")
    break;
    default:
        alert("lütfen doğru bir değer giriniz!")
        break;
}
