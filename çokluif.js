/*------ÇOKLU İF YAPISI------- */


// eğerki bu koşul sağlıyorsa diye hepsine ayrı ayrı bakar .true olan koşulların hepsini çalıştırı. herbiri ayrı bir koşul olduğu için hepsini de çalıştırır.


/* 
adınız ve tckn

ad: boş geçilemez.
tckn : 11 karakterden oluşsun.


*/

let ad = prompt("lütfen adınızı giriniz:");
let tckn =prompt("lütfen tc kimlik no giriniz:" );


kontrolet(ad,tckn);

function kontrolet(ad,tckn){

if(ad!=""){
    if(tckn.length==11){
       console.log("tebrikler başarılı giriş");}
       else{
        console.log("lütfen tcnizi 11 haneli olarak girriniz.");
       }  
    }
  else{
    console.log("lütfen isim alanını boş bırakmayın!");
  } 

}



