let vagonNumber;
vagonNumber = Math.floor(Math.random() * 10); //hırzısın saklandığı vagon random olarak 0-9 arasında belirlendi.

let train = new Array(10).fill(0); //train arrayi 0'lar ile doldurulur. 
train[vagonNumber] = 1; // hırsızın olduğu vagona 1 değeri atanır.

let maxtry = 3; // max 4 deneme içinde sonuç bulunacak son denemenin 0ncı son deneme olduğunu görmek adına deneme sayısı 3 olarak atandı
let guessedVagonNumber; // kullanıcının tahmin edeceği değişken değeri. 
let found = false; //başlangıçta hızsızın yeri bilinmediğinden found değişkenin false olarak atanmakta.
let points = 100; //tahmin işleminde alınabilecek maksimum değer.

while (maxtry >= 0 && !found) { // hem kalan hakların doğru kullanılması hemde hızsızın bulunması durumda döngüden çıkmayı sağlıyacak kontrol ifadesi

    guessedVagonNumber = prompt("please enter the vagon number between 1-10");// burada tahminin sayısal bir değer olması ve 1-10 aralığında verilmesi sağlanmakta
    while ((guessedVagonNumber < 1 || guessedVagonNumber > 10) || isNaN(guessedVagonNumber)) {
        guessedVagonNumber = prompt("please enter the vagon number between 1-10");
    }
    if (train[guessedVagonNumber - 1] == train[vagonNumber]) { //tahmin edilen vagonun indeksinin doğru gösterilmesi adına index değeri guessedVagonNumber'dan 1 çıkarılır.
        alert("well done you got " + points + " punkts" + "\n" +
            "in " + (4 - maxtry) + "th try you found the thief!!!");
        found = true;
    } else {
        points -= 20; // her yanlış tahminde -20 ceza puanı kesiliyor.
        if (maxtry == 0) { // bundan sonra artık hak kalmadığından tahmin oyununun negatif neticesi sunulmakta.
            alert("he he you are a looserr !!!!" + "\n" + "the thief is in the " + (vagonNumber + 1) + "th vagon");
            break; //while dongüsünden çıkılır.
        }
        if (guessedVagonNumber - 1 > vagonNumber) { // tahmin edilen vagon'un index ile uyumlu olması adına -1 çıkarılarak karşılaştırması yapılır.
            alert("the thief is in front of the train so decrease your guess" + "\n" +
                "you have " + maxtry + " chances more be carefull!!!");
        } else {
            alert("you should search back of the train so increase your guess" + "\n" +
                "you have " + maxtry + " chances more be carefull!!!");
        }
    }
    maxtry--;
}