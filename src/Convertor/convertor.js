import CodeData from "../Data/CodeData.json";

const transform = (text) => {
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
    brown: ["iostream", "cstring", "fstream", "cmath", "vector"],
    blue: [
      "struct",
      "namespace",
      "int",
      "double",
      "void",
      "long",
      "char",
      "bool",
      "false",
      "true",
      "NULL",
      "[",
      "]",
    ],
    lightBlue: ["fin", "fout", "cin", "cout", "="],
    green: ["ifstream", "ofstream", "std"],
    yellow: ["(", ")", "{", "}"],
    lightYellow: [
      "swap",
      "main",
      "strtok",
      "strcpy",
      "strcmp",
      "strlen",
      "strchr",
      "strcpy",
      "ignore",
      "get",
      ";",
      "<<",
      ">>",
    ],
  };
  const specialCases = [
    "int",
    "if",
    "do",
    "for",
    "fstream",
    "return",
    "=",
    "vector",
  ];
  wordsKey.lightYellow.forEach((word) => {
    if (specialCases.includes(word)) {
      const regex = new RegExp(`(?<=\\s|\\(|>|<)${word}(?=\\s|\\)|>|<)`, "g");
      text = text.replace(regex, `<span class="lightYellow">${word}</span>`);
    } else {
      let escapedWord = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"); // Scapă de caracterele speciale
      text = text.replace(
        new RegExp(escapedWord, "g"),
        `<span class="lightYellow">${word}</span>`,
      );
    }
  });
  wordsKey.yellow.forEach((word) => {
    if (specialCases.includes(word)) {
      const regex = new RegExp(`(?<=\\s|\\(|>|<)${word}(?=\\s|\\)|>|<)`, "g");
      text = text.replace(regex, `<span class="yellow">${word}</span>`);
    } else {
      let escapedWord = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"); // Scapă de caracterele speciale
      text = text.replace(
        new RegExp(escapedWord, "g"),
        `<span class="yellow">${word}</span>`,
      );
    }
  });
  wordsKey.blue.forEach((word) => {
    if (specialCases.includes(word)) {
      const regex = new RegExp(`(?<=\\s|\\(|>|<)${word}(?=\\s|\\)|>|<)`, "g");
      text = text.replace(regex, `<span class="blue">${word}</span>`);
    } else {
      let escapedWord = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"); // Scapă de caracterele speciale
      text = text.replace(
        new RegExp(escapedWord, "g"),
        `<span class="blue">${word}</span>`,
      );
    }
  });
  wordsKey.lightBlue.forEach((word) => {
    if (specialCases.includes(word)) {
      const regex = new RegExp(`(?<=\\s|\\(|>|<)${word}(?=\\s|\\)|>|<)`, "g");
      text = text.replace(regex, `<span class="lightBlue">${word}</span>`);
    } else {
      let escapedWord = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"); // Scapă de caracterele speciale
      text = text.replace(
        new RegExp(escapedWord, "g"),
        `<span class="lightBlue">${word}</span>`,
      );
    }
  });
  wordsKey.green.forEach((word) => {
    if (specialCases.includes(word)) {
      const regex = new RegExp(`(?<=\\s|\\(|>|<)${word}(?=\\s|\\)|>|<)`, "g");
      text = text.replace(regex, `<span class="green">${word}</span>`);
    } else {
      let escapedWord = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"); // Scapă de caracterele speciale
      text = text.replace(
        new RegExp(escapedWord, "g"),
        `<span class="green">${word}</span>`,
      );
    }
  });

  wordsKey.purple.forEach((word) => {
    if (specialCases.includes(word)) {
      const regex = new RegExp(`(?<=\\s|\\(|>|<)${word}(?=\\s|\\)|>|<)`, "g");
      text = text.replace(regex, `<span class="purple">${word}</span>`);
    } else {
      text = text.replace(
        new RegExp(word, "g"),
        `<span class="purple">${word}</span>`,
      );
    }
  });
  wordsKey.brown.forEach((word) => {
    if (specialCases.includes(word)) {
      const regex = new RegExp(`(?<=\\s|\\(|>|<)${word}(?=\\s|\\)|>|<)`, "g");
      text = text.replace(regex, `<span class="brown">${word}</span>`);
    } else {
      text = text.replace(
        new RegExp(word, "g"),
        `<span class="brown">${word}</span>`,
      );
    }
  });

  text = `<pre class="codeAreaTxt">${text}</pre>`;
  return text;
};
export const convertor = (id) => {
  for (let i = 0; i < CodeData.length; i++) {
    if (CodeData[i].id === id) return transform(CodeData[i].text);
  }
};
