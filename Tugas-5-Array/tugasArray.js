// Nama    : M. Dzikri Alfarisyi
// Asal    : Banten
// Trainer : Muhammad Zahid Masruri

// Soal No. 1 (Range)
console.log("===================== Soal No. 1 (Range) =====================\n");
function range(start, finis) {
  var arr = [];
  if (start < finis) {
    for (var i = start; i <= finis; i++) {
      arr.push(i);
    }
  } else if (start > finis) {
    for (var i = start; i >= finis; i--) {
      arr.push(i);
    }
  } else if (!start || !finis) {
    return -1;
  }
  return arr;
}

console.log(range(1, 10));
console.log(range(1));
console.log(range(11, 18));
console.log(range(54, 50));
console.log(range());

// Soal No. 2 (Range with Step)
console.log(
  "\n===================== Soal No. 2 (Range with Step) =====================\n"
);
function rangeWithStep(start, finis, step) {
  var arr = [];
  if (start < finis) {
    for (var i = start; i <= finis; i += step) {
      arr.push(i);
    }
  } else if (start > finis) {
    for (var i = start; i >= finis; i -= step) {
      arr.push(i);
    }
  } else if (!start || !finis || !step) {
    return -1;
  }
  return arr;
}

console.log(rangeWithStep(1, 10, 2));
console.log(rangeWithStep(11, 23, 3));
console.log(rangeWithStep(5, 2, 1));
console.log(rangeWithStep(29, 2, 4));

// Soal No. 3 (Sum of Range)
console.log(
  "\n===================== Soal No. 3 (Sum of Range) =====================\n"
);
function sum(start, finis, step) {
  var arr = [];
  var tampung = 0;
  if (start < finis) {
    if (!step) {
      for (var i = start; i <= finis; i++) {
        arr.push(i);
      }
    } else {
      for (var i = start; i <= finis; i += step) {
        arr.push(i);
      }
    }
  } else if (start > finis) {
    if (!step) {
      for (var i = start; i >= finis; i--) {
        arr.push(i);
      }
    } else {
      for (var i = start; i >= finis; i -= step) {
        arr.push(i);
      }
    }
  } else if (!finis && !step && start != null) {
    tampung = start;
  } else {
    return tampung;
  }

  var i = 0;
  var n = arr.length;
  while (i < n) {
    tampung = arr[i] + tampung;
    i++;
  }

  return tampung;
}

console.log(sum(1, 10));
console.log(sum(5, 50, 2));
console.log(sum(15, 10));
console.log(sum(20, 10, 2));
console.log(sum(1));
console.log(sum());

// Soal No. 4 (Array Multidimensi)
console.log(
  "\n===================== Soal No. 4 (Array Multidimensi) =====================\n"
);

function dataHandling(arr) {
  var tampung = "";
  for (var i = 0; i < arr.length; i++) {
    tampung +=
      "Nomor ID: " +
      arr[i][0] +
      "\nNama Lengkap: " +
      arr[i][1] +
      "\nTTL: " +
      arr[i][2] +
      " " +
      arr[i][3] +
      "\nHobi: " +
      arr[i][4] +
      "\n\n";
  }
  return tampung;
}

var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

console.log(dataHandling(input));

// Soal No. 5 (Balik Kata)
console.log(
  "\n===================== Soal No. 5 (Balik Kata) =====================\n"
);
function balikKata(kata) {
  var tampung = "";
  for (var i = kata.length; i >= 0; i--) {
    tampung += kata.charAt(i);
  }
  return tampung;
}

console.log(balikKata("Kasur Rusak"));
console.log(balikKata("SanberCode"));
console.log(balikKata("Haji Ijah"));
console.log(balikKata("racecar"));
console.log(balikKata("I am Sanbers"));

// Soal No. 6 (Metode Array)
console.log(
  "\n===================== Soal No. 6 (Metode Array) =====================\n"
);
function dataHeading2(arr) {
  // munggunakan fungsi splice untuk memodifikasi isi array
  console.log(
    "===================== menampilkan hasil dari fungsi splice =====================\n"
  );
  arr.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
  arr.splice(4, 1, "Pria", "SMA Internasional Metro");
  console.log(arr); //menampilkan hasil dari fungsi splice

  //variabel - variabel tampungan yang di perlukan
  var tampung = arr[3];
  //menggunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
  var hasil = tampung.split("/"); //variabel yang digunakan untuk menampilkan nama bulan
  var hasil2 = tampung.split("/"); //variabel untuk fungsi join

  console.log(
    "\n===================== Menampilkan nama bulan =====================\n"
  );
  bulan(Number(hasil[1])); //memanggil fungsi untuk menampilkan nama bulan

  //melakukan sorting secara descending
  console.log(
    "\n===================== melakukan sorting secara descending =====================\n"
  );
  hasil.sort(function (value1, value2) {
    return value2 - value1;
  });
  console.log(hasil);

  //menggabungkan semua elemen menggunakan join
  console.log(
    "\n===================== menggabungkan semua elemen menggunakan join =====================\n"
  );
  var join = hasil2.join("-");
  console.log(join);

  //Nama (elemen ke-2), dibatasi sebanyak 15 karakter menggunakan slice
  console.log(
    "\n===================== Nama dibatasi sebanyak 15 karakter menggunakan slice =====================\n"
  );
  var nama = arr[1];
  var iris = nama.slice(0, 15);
  console.log(iris);
}

function bulan(bulan) {
  //fungsi untuk menampilkan nama bulan
  switch (bulan) {
    case 1:
      console.log("Januari");
      break;
    case 2:
      console.log("Februari");
      break;
    case 3:
      console.log("Maret");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("Mei");
      break;
    case 6:
      console.log("Juni");
      break;
    case 7:
      console.log("Juli");
      break;
    case 8:
      console.log("Agustus");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("Oktober");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("Desember");
      break;
    default:
      console.log("Bulan Tidak Tersedia!!");
  }
}

var input = [
  "0001",
  "Roman Alamsyah",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

dataHeading2(input);
