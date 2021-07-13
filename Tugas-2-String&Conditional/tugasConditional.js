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


// Tugas Switch Case
        console.log();
        console.log("================= Tugas Switch Case =================");
        console.log();

        inputan.question("Masukan Hari [1-31] : ", function(input1){
            inputan.question("Masukan Bulan [1-12] : ", function(input2){
                inputan.question("Masukan Tahun [1900-2200] : ", function(input3){
                    var in2 = Number(input2);

                    var bulan = "";
                    switch (in2){
                        case 1:
                            bulan = "Januari";
                            break;
                        case 2:
                            bulan = "Februari";
                            break;
                        case 3:
                            bulan = "Maret";
                            break;
                        case 4:
                            bulan = "April";
                            break;
                        case 5:
                            bulan = "Mei";
                            break;
                        case 6:
                            bulan = "Juni";
                            break;
                        case 7:
                            bulan = "Juli";
                            break;
                        case 8:
                            bulan = "Agustus";
                            break;
                        case 9:
                            bulan = "September";
                            break;
                        case 10:
                            bulan = "Oktober";
                            break;
                        case 11:
                            bulan = "November";
                            break;
                        case 12:
                            bulan = "Desember";
                            break;
                    }

                    if(input1 >= 1 && input1 <= 31 && input2 >= 1 && input2 <= 12 && input3 >= 1900 && input3 <= 2200){
                        console.log();
                        console.log(input1+" "+bulan+" "+input3);
                    }else{
                        console.log();
                        console.log("Inputan Invalid!!");
                    }

                    inputan.close();
                });
            });
        });
    });
});


