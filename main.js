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