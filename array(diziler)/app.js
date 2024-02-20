// syntax
let arr = ["ayşe","akif","elif","bahar"];
console.log(arr);
// burda string değerler tutmuş 
let dizi = [1,true,"ali","?",null,5.12];
console.log(dizi);
console.log(arr[0][2]);
// burda da hem string hem diğer tipleri de tutmuş yani her tipteki değerleri de tek bir dizi içinde tutabilir.

// ! İNDEX KAVRAMI -->indisleme yapabiliriz. indisleme 0'dan başlar . 

// !örnekler DİZİLERİN İNDEXLERİNİ KULLANARAK İÇİNDEKİ DEĞERLERE ULAŞABİLİRİZ.
// diziyi tanıladık
let sayılar= [1,2,3,4,5,6,"ali",7,8,9,"enes"]
// dizinin içindeki 6 değerini almak istiyorum

console.log(sayılar[5]); //5. indisde altı sayısı olduğu için 5 yazdık inidisler sıfırdan başlar çünkü.

// olmayan indexi istediğimizde hata vermez undefined döner.
console.log(sayılar[11]);


// ! örnek: ali değerini mehmet yap

sayılar[10] ="mehmet"
// sayılar[sayılar.length-1] = "mehmet" yukarıdakiyle aaynı
console.log(sayılar);

// ?NOT LENGHT-1 --> EN SONDAKİ ELEMANI GÖSTERİR. LENGHT UZUNLUĞUNU VERİR. KAÇ TANE DEĞERİ VAR ONU SÖYLER.

console.log(sayılar.length);

// !ÖRNEK
let isimler = ["enes","kübra","bilal","yusuf"]
console.log(isimler);
isimler[2] = "yakup"
console.log(isimler[0]);
console.log(isimler);
console.log(isimler.length);

// !örnek:karışık dizi

let karışıkDizi = [1,"enes",5.7,true,null,undefined]
console.log(karışıkDizi[3]);

// ?NOT DİZİLERİN ŞU ŞEKİLDE DE TANIMLANABİLİR.

let dizi2 = new Array(); //çok kullanılmayan tanımlama

// boş dizi tanımlanması**
let dizi1 = []

// değerler ataya biliriz.

dizi1[0] = "enes"
dizi1[1] = "ali"
dizi2[0] = "enes"
dizi2[1] = "ali"

console.log(dizi1,dizi2);

// ?not typeof 

// diziler aslında bir object veri tipidir.
console.log(typeof dizi1);