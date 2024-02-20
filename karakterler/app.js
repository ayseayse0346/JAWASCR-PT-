// \n - Yeni Satır:
// Bu karakter, bir satırın sonunu temsil eder. Bir dizenin içinde kullanıldığında, bir sonraki satıra geçilir.
// \t - Sekme:
// Bu karakter, bir sekme boşluğunu temsil eder. Dizenin içinde kullanıldığında, bir sekme boşluğu eklenir.
// \r - Satır Başına Dön:
// Bu karakter, imleci satırın başına döndürür. Yani, aynı satırın başına geçer.
// \b - Geri Tuşu:
// Bu karakter, imleci bir karakter geriye doğru hareket ettirir.
// ' - Tek Tırnak:
// Bu karakter, tek tırnak işaretini dizenin içinde kullanmanızı sağlar.
// " - Çift Tırnak:
// Bu karakter, çift tırnak işaretini dizenin içinde kullanmanızı sağlar.
// \ - Ters Eğik Çizgi:
// Bu karakter, ters eğik çizgiyi dizenin içinde kullanmanızı sağlar
console.log("Merhaba\nDünya");   // Yeni satıra geçer
console.log("Bir\tiki\tüç");     // Sekme boşluğu ekler
console.log("Bir\biki");         // Bir karakter geriye gider
console.log('Tek tırnak: \' ');  // Tek tırnak kullanımı
console.log("Cift tırnak: \" "); // Çift tırnak kullanımı
console.log("Ters eğik çizgi: \\ "); // Ters eğik çizgi kullanımı