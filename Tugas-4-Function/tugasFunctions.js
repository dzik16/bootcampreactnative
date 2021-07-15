// Nama    : M. Dzikri Alfarisyi
// Asal    : Banten
// Trainer : Muhammad Zahid Masruri

// Tugas No. 1
console.log("======================= Tugas No. 1 =======================\n");
function teriak(){
    console.log("Halo Sanbers!");
}
teriak();

// Tugas No. 2
console.log("\n======================= Tugas No. 2 =======================\n");
function kalikan(num1, num2){
    return num1*num2;
}

var num1 = 12, num2 = 4;
var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

// Tugas No. 3
console.log("\n======================= Tugas No. 3 =======================\n");
function introduce(name, age, address, hobby){
    return "Nama saya "+name+", umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu"+hobby;;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogyakarta";
var hobby = "Gaming";
 
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);