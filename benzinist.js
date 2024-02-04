// BENZİN İSTASYONU ÖRNEĞİ

/*
1-DİZEL:24.53
2-BENZİN:22.25
3-LPG:11.1

/!gelen müşteirden alacağımız bilgiler:
1-yakit tipi
2-yakıt litresi
3-bakiye

*/

let Dizel = 24.53, Benzin = 22.25, Lpg = 11.1
const yenisatır = \r\n
const yakıtmetni = prompt("1-Dizel" + yenisatır + "2-Benzin" + yenisatır + "3-LPG" + yenisatır + "lütfen bir değer giriniz.")

let yakıttipi = prompt(yakıtmetni)
if (yakıttipi === "1" || yakıttipi == "2" || yakıttipi == "3") {
    
    let yakıtlitresi = +prompt("lütfen yakıt litresini giriniz:")
    let bakiye = +prompt("lütfen bakiyenizi giriniz:")
    if (yakıttipi == "1") {
        //dizel
        let ödenecektutar = dizel * ödenecektutar
        if (ödenecektutar < bakiye) {
            // başarılı
            bakiye = bakiye - ödenecektutar
            alert("yakıt alma işlemi başarılı." + yenisatır + "ödenecektutar:" + ödenecektutar + yenisatır + "bakiye" + bakiye + yenisatır + "kalan bakiye:" + bakiye);
        }
        else {
            // başarısız
            alert("bakiyeniz yetersiz!" + yenisatır + "ödenecel tutar" + ödenecektutar + "bakiye" + bakiye + yenisatır + "eksik tutar" + (ödenecektutar - bakiye))
        }
    }
    if (yakıttipi == "2") {
        //dizel
        let ödenecektutar = Benzin * ödenecektutar
        if (ödenecektutar < bakiye) {
            // başarılı
            bakiye = bakiye - ödenecektutar
            alert("yakıt alma işlemi başarılı." + yenisatır + "ödenecektutar:" + ödenecektutar + yenisatır + "bakiye" + bakiye + yenisatır + "kalan bakiye:" + bakiye);
        }
        else {
            // başarısız
            alert("bakiyeniz yetersiz!" + yenisatır + "ödenecel tutar" + ödenecektutar + "bakiye" + bakiye + yenisatır + "eksik tutar" + (ödenecektutar - bakiye))
        }
    }
    if (yakıttipi == "3") {
        //dizel
        let ödenecektutar = Lpg * ödenecektutar
        if (ödenecektutar < bakiye) {
            // başarılı
            bakiye = bakiye - ödenecektutar
            alert("yakıt alma işlemi başarılı." + yenisatır + "ödenecektutar:" + ödenecektutar + yenisatır + "bakiye" + bakiye + yenisatır + "kalan bakiye:" + bakiye);
        }
        else {
            // başarısız
            alert("bakiyeniz yetersiz!" + yenisatır + "ödenecel tutar" + ödenecektutar + "bakiye" + bakiye + yenisatır + "eksik tutar" + (ödenecektutar - bakiye))
        }
    }



}






else {
    alert("Lütfen yukarıdaki değerlerden birini girniz!")
}