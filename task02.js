"use strict";

const modificate = (phrase) => {
  let changePhrase = phrase.toLowerCase();
  changePhrase = changePhrase[0].toUpperCase() + changePhrase.slice(1);
  return changePhrase;
};

console.log(modificate("привет Мир"));
