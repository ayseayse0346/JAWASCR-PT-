/*
1-Bakiye görüntüleme
2-Para çekme
3-Pra yatırma
4-Çıkış

ATM UYGULAMASI

*/

let bakiye = 1000
let yenisatır = "\r\n" 
let metin = "1-Bakiye görüntüleme"+yenisatır+"2-para çekme"+yenisatır+"3-para yatırma"+yenisatır+"4-çıkış"+yenisatır+"lütfen bir değer giriniz"
let seçim = prompt(metin)

switch(seçim){
    case"1":
    alert("bakiyeniz:"+bakiye)
    break;
    case"2":
    let çekilecektutar = +prompt("lütfen çekeceğiniz tutarı giriniz:")
    
    if (çekilecektutar<bakiye) {
bakiye = bakiye-çekilecektutar
alert("kalan bakiye:"+bakiye)
        }
    else{
        alert("bakiye yetersizdir:"+yenisatır+"bakiyeniz:"+bakiye+"girilen miktar"+çekilecektutar)
    }
    break;
    case"3":
    let parayatırma = +prompt("yatırılacak miktarı giriniz:")
   bakiye = bakiye + parayatırma
   alert("güncel bakiyeniz:"+bakiye)
   break;
   case"4":
   alert("çıkış yapılıyor...")
   break;
  default:
    alert("lütfen 1-4 arasında bir değer giriniz!")
 
}