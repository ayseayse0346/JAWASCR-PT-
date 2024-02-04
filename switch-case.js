// ?ÖRNEK1

let sayı = prompt("lütfen 1 ile 4 arasında bir sayı giriniz:")

switch (sayı) {
    case "1":
        console.log("girilen sayı 1'dir.");
        break;
    case "2":
        console.log("girilen sayı 1'dir.");
        break;
    case "3":
        console.log("girilen sayı 1'dir.");
        break;
    case "4":
        console.log("girilen sayı 1'dir.");
        break;


    default:
        console.log("lütfen geçerli bir sayı giriniz!");
        break;
}

// ?ÖRNEK2 HAFTANIN GÜNLERİ UYGULAMASI

let yenisatır = "\r\n"
let metin ="1-pazartesi"+yenisatır+
"2-salı"+yenisatır+
"3-çarşamba"+yenisatır+
"4-perşembe"+yenisatır+
"5-cuma"+yenisatır+
"6-cumartesi"+yenisatır+
"7-pazar"+yenisatır+
"lütfen 1-7 arasında bir değer giriniz:"

let değer = prompt(metin);
 switch (değer) {
    case "1":
        console.log("pazartesi günü");
        break;
    case "2":
        console.log("salı günü");
        break;
    case "3":
        console.log("çarşamba günü");
        break;
    case "4":
        console.log("perşembe günü");
        break;
    case "5":
        console.log("cuma günü");
        break;
    case "6":
        console.log("cumartesi günü");
        break;
    case "7":
        console.log("pazar günü");
        break;
 
    default:
        console.log("yanlış bir değer girdiniz!");
        break;
 }