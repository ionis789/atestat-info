import CodeData from "../Data/CodeData.json";

const transform = (text) => {
  debugger;
  let wordsKey = {
    purple: [
      "#include ",
      "using",
      "for",
      "return",
      "while",
      "break",
      "if",
      "else",
      "do",
    ],
    brown: ["<iostream>", "<cstring>", "<fstream>", "<cmath>"],
  };
  wordsKey.purple.forEach((word) => {
    debugger;
    text = text.replace(word, `<span class="purple">${word}</span>`);
  });
  wordsKey.brown.forEach((word) => {
    debugger;
    text = text.replace(word, `<span class="brown">${word}</span>`);
  });

  // console.log(text);
};
export const convertor = (id) => {
  debugger;
  CodeData.forEach((item) => {
    transform(item.text);
  });
};
