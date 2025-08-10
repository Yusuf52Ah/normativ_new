// 1 chi masala
// let num = +prompt()
// if (num % 2 === 0) {
//     console.log('juft');
// } 
// else {

//     console.log('toq');
// }

// 2 chi masala

// let num = +prompt()
// if (num = +prompt()) {
//     alert ('Sonlar 0 ga teng')
// }
// if (num % 2 == 0) {
//     alert ('Sonlar Juft')
// } else {
//     alert ('Sonlar toq')
// } 
// console.log(num);

// 3 chi masala

// function bignum(a, b) {
//   if (a > b) {
//     return "a son b sondan katta"
//   } else if (b > a) {
//     return "b son a sondan katta"
//   } else {
//     return "a va b sonlari teng"
//   }
// }

// console.log(bignum(10, 5)); 
// console.log(bignum(3, 8));
// console.log(bignum(7, 7));

// 4 chi masala

// function bahoniAniqlash(baho) {
//   let result

//   if (baho >= 1 && baho <= 59) {
//     result = `Talabaning bahosi 2, imtihondan o'tmadi`
//   } else if (baho >= 60 && baho <= 69) {
//     result = `Talabaning bahosi 3, imtihondan o'tdi`
//   } else if (baho >= 70 && baho <= 89) {
//     result = `Talabaning bahosi 4, imtihondan o'tdi`
//   } else if (baho >= 90 && baho <= 100) {
//     result = `Talabaning bahosi 5, imtihondan o'tdi`
//   } else {
//     result = "Noto‘g‘ri baho kiritildi"
//   }

//   return result
// }

// console.log(bahoniAniqlash(85));

// 5 chi masala

// function tekshirish(login, password) {
//   const togrilLogin = "ustudy2025";
//   const togrilPassword = "U9frontend";

//   if (login === togrilLogin && password === togrilPassword) {
//     console.log("Muvaffaqiyatli");
//   } else if (login !== togrilLogin && password === togrilPassword) {
//     console.log("Kiritilgan login noto'g'ri");
//   } else if (login === togrilLogin && password !== togrilPassword) {
//     console.log("Kiritilgan password noto'g'ri");
//   } else {
//     console.log("Kiritilgan login va password noto'g'ri");
//   }
// }

// tekshirish("ustudy2025", "U9frontend");
// tekshirish("notogriLogin", "U9frontend");
// tekshirish("ustudy2025", "xatoPassword");
// tekshirish("xatoLogin", "xatoPassword");

// const loginInput = prompt("Loginni kiriting:");
// const passwordInput = prompt("Parolni kiriting:");

// tekshirish(loginInput, passwordInput);

// 1.2 normativ
// 1 chi masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// let res = arr.filter((n) => n % 2 === 0)
// console.log(res);

// 2 chi masala 

// function yigindiHisobla(n) {
//   let sum = 0
//   for (let i = 1; i <= n; i++) {
//     sum += i
//   }
//   return sum
// }

// const n = n2(prompt("n sonini kiriting:"))
// const sum2 = yigindiHisobla(n)
// console.log("1 dan " + n + " gacha bo‘lgan sonlar yig‘indisi: " + natija);

// 3 chi masala

// function musbatYigindi(array) {
//   let sum = 0
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//       sum += array[i]
//     }
//   }
//   return sum;
// }

// let sonlar = [7, 5, 2, 6, 9, 4, 12, 3, 11, 18]
// let natija = musbatYigindi(sonlar)

// console.log("Musbat sonlar yig'indisi:", natija);

// 4 chi masala

// function uchVaBeshKarrali() {
//   let result = []

//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       result.push(i)
//     }
//   }

//   console.log(result.join(" "));
// }

// uchVaBeshKarrali()

// 5 chi masala

// let arr = [2, -8, 2, 1, 5, 4, -15, 9, 13]

// let engKatta = Math.max(...arr)
// let engKichik = Math.min(...arr)

// console.log(`big ${engKatta}, small ${engKichik}`);

// 1.3 new normativ

// 1 chi masala 

// let arr = [3, 8, 9, 7, 5]
// let res = arr.at(-1)
// let res2 = res ** 2
// let res3 = arr.pop()
// let result = arr.unshift(res2)
// console.log(arr);

// 2 chi masala

// let arr = [9, 8, 5, 1, 6, 4]
// let res = arr.filter((n) => n % 2 === 0)
// let res1 = res.reduce((acc, cur) => acc + cur)
// console.log(res1);


// 3 chi masala

// let arr = [2, -8, 9, 1, -15, 3, 0, 5]
// let res = arr.filter((n) => n > 0)
// let res2 = res.reduce((acc, cur) => acc * cur)
// console.log(res2);

// 4 chi masala

// let arr = [6, 1, 3, 5, 6, 2, 0, 4]
// let res = arr.filter((n) => n > 2)
// console.log(res.map((n) => n * n));
    
// 5 chi masala

// let arr = [1, [2, 3], [4, [5, 6, 7]]]
// let arr2 = arr.flat(2)
// let res = arr2.filter((n) => n % 2 === 1)
// console.log(res);

// 1.4 new normativ

// 1 chi masala

// let arr = ["Jasmina", "Muhammaddiyor", "Bek", "Yusufxon", "Asad", "John"]
// let res = arr.filter((n) => 5 < n.length)
// console.log(res);

// 2 chi masala

// let arr = [1, 2, 3, 4, 5]
// let max = Math.max(...arr)
// let min = Math.min(...arr)
// let res = max - min
// console.log(res);

// 3 chi masala

// let arr = ["seVinCh", "IbrohiM", "miRKomiL", "JURABEK", "abdulaziz"];

// let res = arr.map(name => {
//   let res2 = name.toLowerCase();
//   return res2.charAt(0).toUpperCase() + res2.slice(1);
// });

// res.sort();

// console.log(res);

// 4 chi masala

// let arr = [16, 20, 8, 2, 12, 27, 9, 13];
// let last = arr[arr.length - 1];

// let res = arr.find(x => x < last) || 0;

// console.log(res);

// 5 chi masala

// let arr = [1, 2, 2, 3, 4, 4, 5];
// let res = arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n));

// console.log(res);

// 1.5 new normativ

// 1 chi masala

// let obj = {}
// obj.name="Kimdur"
// obj.age="16"
// obj.country="earth"
// console.log(obj);

// 2 chi masala

// let obj = { valyuta: "dollar", miqdor: 50 }
// console.log(obj);

// 3 chi masala

// let obj = { Anvar: 19, Salim: 21, Jasur: 13 };

// let arr = Object.entries(obj).sort((a, b) => b[1] - a[1]);

// arr.forEach(([ism, yosh]) => {
//   console.log(ism + ": " + yosh);
// });

// 4 chi masala

// let obj = { name: "John", age: 22, city: "Tashkent" };

// obj.age = 30;
// obj.city = "New York";

// let res = [
//   ['name', obj.name],
//   ['age', obj.age],
//   ['city', obj.city]
// ];

// console.log(res);

// 5 chi masala

// let obj = { Salim: 60, Ali: 50, Kimsan: 90 }

// let res = {};
// for (let key in obj) {
//   if (obj[key] >= 60) {
//     res[key] = obj[key];
//   }
// }

// console.log(res);

// 1.6 new normativ

// 1 chi masala

// let obj = {
//     name: "Ali",
//     age: 19
// }

// console.log(Object.keys(obj));

// 2 chi masala

// let obj = {
//     a: 15,
//     b: 10
// }

// let res = obj.a * obj.b
// console.log(res);

// 3 chi masala

// let obj = { soliq: 20, kamunal: 12, prava: 980, havo: 3 };

// function qanchaKoTarildi(obj, foiz) {
//   let result = {};
//   for (let key in obj) {
//     let added = obj[key] * foiz / 100;
//     result[key] = added;
//   }
//   return result;
// }

// let natija = qanchaKoTarildi(obj, 15);
// console.log(natija);

// 4 chi masala

// let obj = {
//   Salim: 50,
//   Vali: 87,
//   Ali: 12,
//   deleteUser: function(name) {
//     delete this[name];
//   }
// };

// obj.deleteUser("Vali");

// console.log(obj);

// 5 chi masala

// let obj = { olam: 7, mandarin: 4, banan: 6, apelsin: 1 };

// for (let key in obj) {
//   if (obj[key] % 2 !== 0) {
//     delete obj[key];
//   }
// }

// console.log(obj);

// 1.7 new normativ

// 1 chi masala

// let obj = {
//     salim: 25,
//     ali: 17,
//     malika: 21
// }

// for (let key in obj) {
//   console.log(`${key} = ${obj[key] + 2}`);
// }


// 2 chi masala

// let users = [
//   { name: "Ali", age: 20 },
//   { name: "Vali", age: 25 },
//   { name: "Sami", age: 22 }
// ];

// users.forEach(user => {
//   console.log(`${user.name} : ${user.age}`);
// });

// 3 chi masala

// let obj = { a: 10, b: "hello", c: 5, d: true };

// for (let key in obj) {
//   if (typeof obj[key] === "number") {
//     console.log(`${key}=${obj[key]}`);
//   }
// }

// 4 chi masala

// const person = {name: "Lola", age: null, job: "Teacher", city: null};
// const res = {};

// for (const key in person) {
//   if (person[key] !== null) {
//     res[key] = person[key];
//   }
// }

// console.log(res);

// 5 chi masala

// let users = [
//   { name: "Ali", age: 17 },
//   { name: "Vali", age: 19 },
//   { name: "Sami", age: 21 }
// ];

// let res = users.filter((n) => n.age > 18);

// console.log(res);

// 1.8 new normativ

// 1 chi masala

// try {
//   let a = prompt("1-sonni kiriting:");
//   let b = prompt("2-sonni kiriting:");
//   let amal = prompt("Amalni kiriting (+, -, *, /):");

//   a = parseFloat(a);
//   b = parseFloat(b);

//   if (isNaN(a) || isNaN(b)) {
//     throw "Son noto‘g‘ri kiritildi!";
//   }

//   let natija;

//   if (amal === "+") {
//     natija = a + b;
//   } else if (amal === "-") {
//     natija = a - b;
//   } else if (amal === "*") {
//     natija = a * b;
//   } else if (amal === "/") {
//     if (b === 0) throw "0 ga bo‘lish mumkin emas!";
//     natija = a / b;
//   } else {
//     throw "Noto‘g‘ri amal kiritildi!";
//   }

//   alert("Natija: " + natija);

// } catch (xato) {
//   alert("Xatolik: " + xato);
// }

// 2 chi masala

// try {
//   const name = prompt("Ismingizni kiriting:");
//   const email = prompt("Emailingizni kiriting:");
//   const age = parseInt(prompt("Yoshingizni kiriting:"));

//   if (!name || name.length < 3) {
//     throw "Ism kamida 3 ta harfdan iborat bo'lishi kerak.";
//   }

//   if (!email.includes("@") || !email.includes(".")) {
//     throw "Emailda '@' va '.' belgisi bo'lishi shart.";
//   }

//   if (isNaN(age) || age <= 7) {
//     throw "Yosh 7 dan katta bo'lishi kerak.";
//   }

//   alert("Ro'yxatdan muvaffaqiyatli o'tdingiz!");

// } catch (xato) {
//   alert("Xatolik: " + xato);
// }

// 3 chi masala

// function res(value) {
//   if (Array.isArray(value)) {
//     console.log("Bu array");
//   } else if (value === null) {
//     console.log("Bu null");
//   } else {
//     console.log("Bu " + typeof value);
//   }
// }

// 4 chi masala

// const user = {
//   name: "Ali",
//   age: 25,
//   email: "ali@example.com",
//   isStudent: true
// };

// function validateUser(user) {
//   const errors = [];

  
//   if (typeof user.name !== "string") {
//     errors.push("Name string bo'lishi kerak.");
//   } else if (user.name.length < 3) {
//     errors.push("Name kamida 3 ta harfdan iborat bo'lishi kerak.");
//   }

  
//   if (typeof user.age !== "number") {
//     errors.push("Age number bo'lishi kerak.");
//   } else if (user.age < 7) {
//     errors.push("Age 7 yoki undan katta bolishi kerak.");
//   }

 
//   if (typeof user.email !== "string") {
//     errors.push("Email string bo'lishi kerak.");
//   } else if (!user.email.includes("@") || !user.email.includes(".")) {
//     errors.push("Email '@' va '.' belgilarini oz ichiga olishi kerak.");
//   }

//   if (typeof user.isStudent !== "boolean") {
//     errors.push("isStudent boolean tipida bolishi kerak.");
//   }

//   if (errors.length > 0) {
//     console.log("Xatoliklar:");
//     errors.forEach((error) => console.log("- " + error));
//   } else {
//     console.log("Foydalanuvchi malumotlari togri!");
//   }
// }

// validateUser(user);

// 1.9 new normativ

// ForEach
// function customForEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i, arr);
//     }
// }

// Find
// function customFind(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) {
//             return arr[i];
//         }
//     }
//     return undefined; 
// }

// Some
// function customSome(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) {
//             return true;
//         }
//     }
//     return false;
// }

// Every

// function customEvery(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!callback(arr[i], i, arr)) {
//             return false;
//         }
//     }
//     return true;
// }