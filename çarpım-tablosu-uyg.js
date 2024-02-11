/*
1x1=1
1x2=2
-
-
-
-
-
*/

for (let i = 1; i<=10; i++){
    for(let j = 1; j<=10; j++){
        console.log(i+"x"+j+"="+(i*j));
    }
    console.log("----------------");
}
// ?WHİLE İLE YAPIMI
console.log("while ile yapımı");
let sayı = 1
while (sayı<=10) {
    for(let sayı2 = 1; sayı2<=10; sayı2++){
console.log(sayı+"x"+sayı2+"="+(sayı*sayı2));
    }

    sayı++
    console.log("------------------");
}