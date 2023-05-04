"use strict";

const calculate = (total, count, promo) => {
  let discTotal = total;
  if (count > 10) {
    discTotal = discTotal - discTotal * 0.03;
  }

  if (discTotal > 30000) {
    discTotal = discTotal - (discTotal - 30000) * 0.15;
  }

  if (promo === "METHED") {
    discTotal = discTotal - discTotal * 0.1;
  }

  if (promo === "G3H2Z1" && discTotal > 2000) {
    discTotal = discTotal - 500;
  }
  return discTotal;
};

console.log(calculate(50000, 10, "METHED"));

console.log(calculate(100000, 20, "G3H2Z1"));
