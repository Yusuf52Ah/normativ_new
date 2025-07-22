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
