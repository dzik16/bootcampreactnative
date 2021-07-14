// Nama    : M. Dzikri Alfarisyi
// Asal    : Banten
// Trainer : 


var tampung = "";
// No. 1 Looping While 
console.log("==================== No. 1 Looping While ====================\n");
var i = 1;
console.log("LOOPING PERTAMA");
while (i <= 20){
    if(i %2 == 0){
        console.log(i+" - I love coding");
    }
    i++;
}
console.log("LOOPING KEDUA");
i = 20;
while(i >= 1){
    if(i %2 == 0){
        console.log(i+" - I will become a mobile developer");
    }
    i--;
}

// No. 2 Looping menggunakan for
console.log("\n==================== No. 2 Looping menggunakan for ====================\n");
for (var i = 1; i<=20; i++){
    if(i %2 == 1 && i %3 != 0){
        console.log(i+" - Santai");
    }else if(i %2 == 0){
        console.log(i+" - Berkualitas");
    }else if(i %2 == 1 && i %3 == 0){
        console.log(i+" - I Love Coding");
    }
}

// No. 3 Membuat Persegi Panjang #
console.log("\n==================== No. 3 Membuat Persegi Panjang # ====================\n");
tampung = "";
for(var i=1;i<=4;i++){
    for(var j=1;j<=8;j++){
        tampung += "#";
    }
    tampung += "\n";
}
console.log(tampung);

// No. 4 Membuat Tangga 
console.log("\n==================== No. 4 Membuat Tangga  ====================\n");
tampung = "";
for(var i=7;i>0;i--){
    for(var j=7;j>0;j--){
        if(j >= i){
            tampung += "#";
        }else{
            tampung += " ";
        }
    }
    tampung += "\n";
}
console.log(tampung);

// No. 5 Membuat Papan Catur
console.log("\n==================== No. 5 Membuat Papan Catur  ====================\n");
tampung = "";
for(var i=1;i<=8;i++){
    for(var j=1;j<=8;j++){
        if(i%2==1){
            if(j%2==1){
                tampung += " ";
            }else{
                tampung += "#";
            }
            
        }else{
            if(j%2==0){
                tampung += " ";
            }else{
                tampung += "#";
            }
        }
    }
    tampung += "\n";
}

console.log(tampung);