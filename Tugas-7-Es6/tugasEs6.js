// Nama    : M. Dzikri Alfarisyi
// Asal    : Banten
// Trainer : Muhammad Zahid Masruri

// 1. Mengubah fungsi menjadi fungsi arrow
console.log("========= Soal No.1 =========\n");
const golden = () => console.log("This is Golden!");

golden();

// 2. Sederhanakan menjadi Object literal di ES6
console.log("\n========= Soal No.2 =========\n");
const newFunction = (firstName, lastName) => {
  const name = {
    firstName,
    lastName,
    fullname: () => console.log(firstName + " " + lastName),
  };
  return name;
};

const person = newFunction("William", "Imoh");
console.log(person);
person.fullname();

//3. Destructuring;
console.log("\n========= Soal No.3 =========\n");

const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!",
};

const { firstName, lastName, destination, occupation, spell } = newObject;
console.log(firstName, lastName, destination, occupation);

// 4. Array Spreading
console.log("\n========= 4. Array Spreading =========\n");
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];
console.log(combined);

// 5. Template Literals
console.log("\n========= 5. Template Literals =========\n");
const planet = "earth";
const view = "glass";
const after = `lorem ${view} dolor sit amet,
consectetur adipiscing elit, ${planet} do eiusmod tempor
incididunt ut labore at dolore magna aliqua. Ut enim
ad minim veniam`;

console.log(after);
