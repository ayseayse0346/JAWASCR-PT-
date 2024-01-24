/*
?------veri tipleri-----
!primitive ilkel veri tipleridir.
1-string
2-number
3-boolen
4-null
5-undefined
!referans veri tipleri daha gelişmiş veri tipleri.ram bellekte yerleri vardir.
6-object
7-function

*/

// ?PRİMİTİVE VERİ TİPLERİ-------
// ! string
// let isim = "enes"
// console.log(typeof isim);

// let isim = " enes 23 yaşındadır."
// console.log(typeof isim );

// ! number 

// let sayı1 = 10
// console.log(typeof sayı1);

// noktalı da olsa bunlar yine number tipidir. 

// let sayı2 = 3.77
// console.log(sayı1+sayı2);
// console.log(typeof sayı1+sayı2);

// NOT: 
// !  + topklamaya özgü sadece 

// let a = "5"
// let b = "2"
// console.log(a+b); // burada sonu. 52 dir string olduğu için birleştiri.

// let x = "5"
// let y =2
// console.log(x+y); // burdada yine birleştirdi çünkü ilk önce stringi gördü.

// let z = 5
// let w = "2"
// console.log(z+w); // burda da aynı string olması yeterli ama ikisi de tırnaksız yazılsaydı toplama işlemini yapardı.

// ? SORU: yaşınız: 23 yazsın çıktısı versin nasıl yaparız

// let stringdeğişken = "yaşınız:"
// let yaş= 23
// console.log(stringdeğişken+yaş);
// string ile numbere toplama işlemiyle birleştirbiliyoruz.

// ! bloon : true ve false ' dan oluşur.

// console.log(5>2);
// console.log(5>8);

// let a = 3;
// let b = 12;

// let sonuç = a+b;
// console.log(sonuç>18);
// console.log(sonuç==15);
// console.log(sonuç==18);
// console.log(sonuç<18);

// ! null --> içi boş demektir. daha sonra bunu  değerini değiştirebilrim anlamı var.

// let x = null
// x=7 //sonradan yedi yapabiliriz. 
// console.log(x);

// !UNDEFİNED VERİTİPİ-->herhangi bir veri ataması yapoılmamıştır anlamına geliyor.

// let a;
// console.log(a);


//?------- REFERANS VER TİPLERİ-------
// !OBJECT VERİ TİPİ:KIVIRCIK PARANTEZ.

let insan = {
    isim:"ayşe",
    soyisim:"kahraman",
    yaş:32
}
console.log(insan);
console.log(typeof insan);


let rakamlar= [1,2,3]
console.log(typeof rakamlar ); //diziler

// !FUNCTİON VERİ TİPİ 

let func = function(){
    console.log("merhaba");
}
func();

console.log(typeof func);