"use strict";

const dollar = 73;
const euro = dollar * 1.2;

const convert = (sum) => {
  return sum * euro;
};

console.log(convert(1000));
