// var---let--const

/*
------scope (kapsam)------

--> Global scope
-->function scope
-->block scope


*/

// ?GLOBAL SCOPE en geniş , hiçbir sınrı olmayan ,her yerden erişilebilen 

// var değişkenIsmı = 10;
// console.log(değişkenIsmı);

// var a =5; //sen buna heryerden erişebilirsin. Global scope değişken hiçbir kıvırcık parantez içinde olmamamlı.



// if(true){
    // a ya burdan erişebiliyoruz.
// console.log(a);


// function method1(){
    // a ya burdan da erişebiliyoruz.
// console.log(a);



// ?FUNCTİON SCOPE sadece function içindeki kıvırcıklarda erişelilebilen ama dışında erişilemeyen scope türüdür.


// function method1(){
    // var sayı = 10;
    // console.log(sayı); //bu şekilde yaparsak sayıya erişebiliriz. ancak  bunu süslü parantez dısşında yaparsak erişemeyiz hata alırız.



// function method1(){
//   while(true){
     //block scpo ter.


// if(true){
 //block scpo ter

// for(let i = 0; i<=10; i++){
     //block scpo ter



//todo:VAR-LET-CONST

// Değişken nedir? bazı değerleri tutmak için gerekli. 

/*

her şeyi let,const,ve var ile tanımlıyoruz. aşağıdaki gibi değil.sadece 
var/let/const değişkenismi =  değişkendeğeri;
let sayı = 10;

int değişkenismi = değer
int yaş = 23

*/
/*------------------------------- */

// var -let -const neye göre seçeceğiz.?

// var ile tanımladığımız herşey function scopetur. function içinde ,block içinde de erişebiliriz.

// var değişkenini globalde tanımlasaydık her yerden ulaşabilirdik yani function dışında tanımlasaydık function içinde,for,while if gibi onların içinde de erişirdik. 

// !var ram bellekte çok fazla yer kaplar.

// function selamVer(){
//     var selam ="herkese selam" ; //function scope bunu süslü parantez içinde ulaştık.
//     console.log(selam);
// }

// selamVer();

// let - const --> blok scope özelliğine sahiptir. let ve const hangi süslü parantez içinde verdiysek orda ulaşırız. onların dışında erişemeyiz.

// var a = 5
// var a =10
// console.log(a); // hangisini en son yaptıysak consol onu gösterir.var da sıkıntı yok

// let a = 5
// let a = 10
// console.log(a); // bu olmaz çünkü let ve constu aynı yerde globalde de olsa aynı değşkenle  kullanamayız. 

// ! let ve const arasındaki fark: const sabit anlamında 

// const a = 10
// a= 7
// console.log(a);
// bunun değerini değiştiremeyiz ama lette değiştirebiliriz.

// let a = 10
// a =8
// a = 7 
// console.log(a );

//!obje tanımlarken süsülü parantez kullanırız.
// const user = {
//      username: "enes",
//      password:"123"

// }

// user{} //bunu yapamayız çünkü bunu yukarda user olarak verdik tekrar yapmaz sabittir.
// console.log(user);

// ! ama bunu let ile yapabiiriz. 
// let user = {
//     username: "enes",
//     password:"123"

// }
//  user ={
//     age:23
//  }

//  console.log(user);