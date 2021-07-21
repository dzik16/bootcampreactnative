// Nama    : M. Dzikri Alfarisyi
// Asal    : Banten
// Trainer : Muhammad Zahid Masruri

// Soal No. 1 (Array to Object)
console.log("============= Soal No. 1 (Array to Object) =============\n");
function arrayToObject(arrDimensi) {
  var now = new Date();
  var thisYear = now.getFullYear();

  var obj1 = {
    "1. Bruce Banner": {
      firstName: "",
      lastName: arrDimensi[0][1],
      gender: arrDimensi[0][2],
      age: arrDimensi[0][3]
        ? thisYear - arrDimensi[0][3]
        : "Invalid Birth Year",
    },

    "2. Natasha Romanoff": {
      firstName: arrDimensi[1][0],
      lastName: arrDimensi[1][1],
      gender: arrDimensi[1][2],
      age: arrDimensi[1][3]
        ? thisYear - arrDimensi[1][3]
        : "Invalid Birth Year",
    },
  };

  console.log(obj1);
}

var people = [
  ["Bruce", "Banner", "male", 1975],
  ["Natasha", "Romanoff", "female"],
];
arrayToObject(people);

// Soal No. 2 (Shopping Time)
console.log("============= Soal No. 2 (Shopping Time) =============\n");

function shoppingTime(memberId, money) {
  var curren = money;
  var listBelanjaan = [];
  var hasil = [];

  var stock = [
    { name: "Sepatu Stacattu ", price: 1500000 },
    { name: "Baju Zoro ", price: 500000 },
    { name: "Baju H&N", price: 250000 },
    { name: "Sweater Uniklooh", price: 175000 },
    { name: "Casing Handphone", price: 50000 },
  ];

  if (!memberId) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  } else if (money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  } else if (memberId != null && money > 50000) {
    stock.forEach(function (value, index) {
      if (value.price <= curren) {
        curren -= value.price;
        listBelanjaan.push(value.name);
      }
    });

    hasil.push({
      memberId: memberId,
      money: money,
      listPurchased: listBelanjaan,
      changeMoney: curren,
    });
  }

  return hasil;
}

console.log(shoppingTime("1820RzKrnWn08", 2475000));
console.log(shoppingTime("", 2475000));
console.log(shoppingTime("234JdhweRxa53", 15000));
console.log(shoppingTime());

// Soal No. 3 (Naik Angkot)
console.log("============= Soal No. 3 (Naik Angkot) =============\n");

function naikAngkot(listPenumpang) {
  var rute = ["A", "B", "C", "D", "E", "F"];
  var hasil = [];

  a = rute.indexOf(listPenumpang[0][1]);
  b = rute.indexOf(listPenumpang[0][2]);

  bayar = (b - a) * 2000;

  hasil.push({
    Penumpang: listPenumpang[0][0],
    naikDari: listPenumpang[0][1],
    tujuan: listPenumpang[0][2],
    bayar: bayar,
  });

  a = rute.indexOf(listPenumpang[1][1]);
  b = rute.indexOf(listPenumpang[1][2]);

  bayar = (b - a) * 2000;

  hasil.push({
    Penumpang: listPenumpang[1][0],
    naikDari: listPenumpang[1][1],
    tujuan: listPenumpang[1][2],
    bayar: bayar,
  });

  return hasil;
}

var input = [
  ["Dimitri", "B", "F"],
  ["Icha", "A", "B"],
];

console.log(naikAngkot(input));
