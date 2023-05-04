"use strict";

const minNum = (num1, num2) => {
  if (num1 - num2 <= 0) {
    return num1;
  }

  if (num2 - num1 < 0) {
    return num2;
  }
};

console.log("Итог второе сложное задание", minNum(12, 16));
