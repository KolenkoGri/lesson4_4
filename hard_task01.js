"use strict";

const share = (num1, num2) => {
  let number = 0;
  if (num1 - num2 >= 0) {
    for (let i = 2; i <= num2; i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        // Здесь идёт перезапись числа, соответственно последнее самое большое
        number = i;
      }
    }
  }

  if (num2 - num1 > 0) {
    for (let i = 2; i <= num1; i++) {
      if (num2 % i === 0 && num1 % i === 0) {
        // Здесь идёт перезапись числа, соответственно последнее самое большое
        number = i;
      }
    }
  }

  return number;
};

console.log("Итог", share(12, 16));
