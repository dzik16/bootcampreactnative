// Nama    : M. Dzikri Alfarisyi
// Asal    : Banten
// Trainer : Muhammad Zahid Masruri

// Tugas No. 1
console.log("======================= Tugas No. 1 =======================\n");
function teriak(){
    return "Halo Sanbers!";
}
console.log(teriak());

// Tugas No. 2
console.log("\n======================= Tugas No. 2 =======================\n");
function kalikan(num1, num2){
    return num1*num2;
}

var num1 = 12, num2 = 4;
var hasilKali = kalikan(num1, num2);
console.log("Hasil Perkalian "+num1+"x"+num2+" = "+hasilKali);

// Tugas No. 3
console.log("\n======================= Tugas No. 3 =======================\n");
function introduce(name, age, address, hobby){
    return "Nama saya "+name+", umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu"+hobby;
}

var name = "Agus", address = "Jln. Malioboro, Yogyakarta", hobby = "Gaming", age = 30;
 
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);