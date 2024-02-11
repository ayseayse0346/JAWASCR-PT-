//!!!1-) parametresiz ve geriye değer döndürmeyen method tanımlamak

/*

* function yazdır(){

    /kodlar yazılacak
}
//? not fonksiyonu bir kere yap istediğimn kadar çağır.
*/
// hazırladığımız method .consolda bu haliyle çalışmaz yazdırmaz. paketledik yani
function yazdır (){
    console.log("ayse");
}

yazdır();
yazdır();  //çağıdıktan sonra consalda gördük.


function topla() {
    console.log(3+7);
    
}

topla();

//!!2-)parametreli mthod tanımlama  

// ?örnek

function tanımla(isim,soyisim) {
    console.log(isim+" "+soyisim);
}
tanımla("ayşe","kahraman");
tanımla("akif","kahraman")

// ?ÖRNEK
cube(2);  //burada da çağırabilirz.

 function cube(sayı) {
    console.log(sayı*sayı*sayı);
 }

 cube(8); //burada da çağırabiliriz.

//  ?ÖRNEK

let yas = Number(prompt("yaşınızı giriniz:"));
 
kontrolEt(yas)

 function kontrolEt(yas) {
    if(yas>=18){
        console.log("ehliyeti alabilirsiniz");
    }else{
        console.log("ehliyeti alamazsınız ");
    }
}

