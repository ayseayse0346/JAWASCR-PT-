// ***DİZİNİN METOTLARI****//
/*
push  : dizinin sonuna eleman ekler.,ayrıca dizinin uzunluğunu döner.

unshift :dizinin başına elemean ekler,eleman sayısını geriye döner.

pop: dizinin sonundan eleman siler, eleman sayısını döner.silinen elemanı döner

shift:dizinin başından eleman siler,eleman sayısını döner.

splice(index,incdex):eleman eklemek ve silmek için kullnaılır.

tostring :diziyi stringe çevirebiliriz.

join :diziyi stringe çevirir. farkı ise araya eleman ekleyebiliriz.

concat :dizileri birleiştirmek için kullanılır.

slice(dilimlemek):diziyi istenilen yerden bölüp yeni bir dizi luşturr.

lenght :dizinin uzunluğunu verir.

reverse : dizinin elemanlaını ters çevirmek için kullnaılır.

split(bölmek) :belirli bir ifadeye göre bölüp diziye çevirmek

indexOf :elemanın index numarasını verir.

includes :verilen elemanı içeriyor mu ona bakar.






*/

// !push
let arabalarım = ["BMW", "Mercedes", "Audi", "Toyota", "Honda"];
let arabalar2 = ["golf","tofaş"]
let diziuzunluk = arabalarım.push("opel")
console.log(diziuzunluk);
console.log(arabalarım);
console.log(arabalarım.length);

// !unshift
arabalarım.unshift("hundai")
console.log(arabalarım);


// !pop
 

let silineneleman = arabalarım.pop()//sondaki elemanı siler
console.log(silineneleman); //silinen elemanı bize döner
console.log(arabalarım);
// !shift 

let baştansilinen = arabalarım.shift()
console.log(baştansilinen);
console.log(arabalarım);

// ! splice 
// hem siler hem ekler. index kullanarak

 arabalarım.splice(1,3,"cady") //diziden herhangi bir eleman simeden bu eleamnı ekle demek sıfırlar başı ve silme demek sıfır
console.log(arabalarım);
arabalarım.splice(1,0,"honda")
console.log(arabalarım);

arabalarım.splice(1,2)
console.log(arabalarım); //birinci indexten başla 2 ye kadar sil.
arabalarım.splice(2,2,"hundai") //2 den başla 2 ye kdar sil ve bunların bulunduğu yere de hundai ekle.


// ! tostring()

console.log(typeof arabalarım);
let stringarablar = arabalarım.toString()
console.log(typeof stringarablar);

// !join 


let strarablar = arabalarım.join("-")
console.log(strarablar);
console.log(typeof strarablar);

// !concat 

 let birleştirilmişarabalar = arabalarım.concat(arabalar2)
console.log(birleştirilmişarabalar);

// ! slice 

 let ayrıdzi = birleştirilmişarabalar.slice(2)
console.log(ayrıdzi);

// ! lenght
console.log(birleştirilmişarabalar.length);

// ! reverse
console.log(birleştirilmişarabalar.reverse());

// !split 
// ararya çevirdi .string bir değeri belirli bir seperate yani ayrırıcı kulananrak böler.
let isimler = "ali,veli,enes"
let diziisim = isimler.split(",")
console.log(diziisim);

// !indexof 

let indexof = birleştirilmişarabalar.indexOf("BMW")
console.log(indexof);

let indexx = birleştirilmişarabalar.indexOf("keyew")
console.log(indexx);

// !inculudes
// boolen döner 
let sonuç = birleştirilmişarabalar.includes("porshe")

console.log(sonuç);
