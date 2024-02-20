//   ****FOREACH DÖNGÜSÜ*****//

// dizilerde kullanılır.
// isimler dizisinin üzerinde foreach metodunu kullanarak dönemk istiyorum.
let isimler = ["enes","yakup","bilal","kübra","ayşenur","adem"]

isimler.forEach(function(isim){
console.log(isim);
})

// aynısını for ile de yaprız

for (let i = 0; i<isimler.lenght ; i++){
    console.log(isimler[i]);
}

//  aynısını while döngüsüyle de yaparız.
let sayac = 0
while (sayac<isimler.length) {
console.log(isimler[sayac]);
    sayac++;
    
}