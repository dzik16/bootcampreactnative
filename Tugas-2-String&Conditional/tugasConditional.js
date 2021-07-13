// Nama    : M. Dzikri Alfarisyi
// Asal    : Banten
// Trainer : Muhammad Zahid Masruri



// Tugas If-else
const readline = require("readline");
const inputan = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("================= Tugas If-else =================");

inputan.question("Masukan Nama Anda : ", function(input1){
    inputan.question("Masukan Peran Anda [Penyihir/Guard/Werewolf] : ", function(input2){
        var nama = input1;
        var peran = input2.toLowerCase();

        var namaLength = nama.length;
        var peranLength = peran.length;
        
        console.log();

        if(namaLength > 0 && peranLength > 0){
            if(peran == "penyihir")
            {
                console.log("Selamat datang di Dunia Werewolf, "+nama);
                console.log("Halo Penyihir "+nama+", kamu dapat melihat siapa yang menjadi werewolf!");
            }
            else if(peran == "guard")
            {
                console.log("Selamat datang di Dunia Werewolf, "+nama);
                console.log("Halo Guard "+nama+", kamu akan membantu melindungi temanmu dari serangan werewolf.");
            }
            else if(peran == "werewolf")
            {
                console.log("Selamat datang di Dunia Werewolf, "+nama);
                console.log("Halo Werewolf "+nama+", Kamu akan memakan mangsa setiap malam!");
            }
            else if(peran != "penyihir" || peran != "guard" || peran != "werewolf"){
                console.log("Harap memilih peran dengan benar!!");
            }
        }else{
            if(namaLength == 0)
            {
                console.log("Nama harus diisi!");
            }

            else if(peranLength == 0 && namaLength > 0)
            {
                console.log("Halo "+nama+", Pilih peranmu untuk memulai game!");
            }
        }

        inputan.close();
        
    });
});

// Tugas Switch Case

console.log("================= Tugas Switch Case =================");
console.log();

inputan.question("Masukan Hari [1-31] : ", function(input1){
    inputan.question("Masukan Bulan [1-12] : ", function(input2){
        inputan.question("Masukan Tahun [1900-2200] : ", function(input3){
            var hari = Number(input1);
            var bulan = Number(input2);
            var tahun = Number(input3);

            var arrBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desembar"];
            
            if(hari >= 1 && hari <= 31){
                if(bulan >= 1 && bulan <= 12){
                    if(tahun >= 1900 && tahun <= 2200){
                        console.log();
                        console.log(hari+" "+arrBulan[bulan-1]+" "+tahun);
                    }else{
                        console.log("Harap Masukan Dengan Benar!!");
                    }        
                }else{
                    console.log("Harap Masukan Dengan Benar!!");
                }
            }else{
                console.log("Harap Masukan Dengan Benar!!");
            }

            inputan.close();
        });
    });
});