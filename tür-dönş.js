// -----TÜR DÖNÜŞÜMLERİ----------

/*String,numbers,boolens,undefined,null.String

Object,function*/

let a = 5
let b = "5"
console.log(a+b);

// string veri tipinden number veri tipine dönüştürme:1-)

let c = Number(b);
console.log(typeof c);
console.log(a+c);

// 2)--> parsınt()

let x = 8
let y = parseInt("12")
console.log(x+y);
console.log(typeof y);

let z =parseInt( "12.5")
console.log(z);  //12.5 olarak çıktı vermedi.12 olrak verdi tam sayya çevirdi.


// NUMBER TİPİNDEN STRİNG VERİ TİPİNE DÖNÜŞTÜRMEK
// 1)string   2)tostring

let str = String(55)
console.log(typeof str);
console.log(str);

let str2 = (52).toString()
console.log(typeof str2 );
console.log(str2);

let bloon = String(true)
console.log(typeof bloon);
console.log(bloon);
// NOT :
let nun = Number("b")
console.log(nun);

// bir object değeri stringe çevirebiliriz.
let obje = String([1,2,3,4])
console.log(typeof obje);
console.log(obje);

// NOT arayi numbera çevirebilir miyiz?
// !NAN çıkar çevirmez

let arr = Number([1,2,3,4])
console.log(typeof arr);
console.log(arr);