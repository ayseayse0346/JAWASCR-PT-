// FOR İN / FOR OF DÖNGÜLERİ
/*
For in --> dizi üstünde dönerken her bir elemenın indexini verir.
*/

let names = ["ayse","akif","elif","bahar"]

for(let name in names ){
    console.log(name);
}

// indexinden değerinide ulaşabiliriz.

for(let name in names ){
    console.log(name ,names[name]);
}


/*
for of --> bu belirttiğiniz dizinin değerini verir.

*/

for (let isim of names){
    console.log(isim);
}

// hem değerini hem de index numarasını görmek istersem indexof kullanabiriz.

for (let isim of names){
    console.log(isim,names.indexOf(isim));
}