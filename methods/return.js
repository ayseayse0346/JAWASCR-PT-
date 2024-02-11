// geriye değer döndüren method tanımlamak---- return

function cube(sayı){
    let sonuc = sayı*sayı*sayı;
    
    return sonuc
}
let dönendeğer = cube(5)
console.log(dönendeğer);


// ?örnek

function kareAl(sayı) {
    let çıktı = sayı*sayı;
    return çıktı
}

let değer = kareAl(6);
console.log(değer);

/*
NOTLAR

1-) bir değeri methodun dışarısına çıkarmak,taşımak için kullanılır.

2-) bir methodu bitiren anahtar kelimedir. returnden sonra yazılan kodalr çalışmaz

*/

