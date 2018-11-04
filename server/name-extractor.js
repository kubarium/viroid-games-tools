const path = require("path");
const fs = require("fs");
const tag = require("wink-pos-tagger")().tag;
const tokenize = require("wink-tokenizer")().tokenize;
const convert = require("./converter")
var ebook = "";
var txtFile;
var detectedNamesFile;
const extract = async file => {
  try {
    var base = file.replace(/\.\w+$/, "")
    txtFile = `${base}.txt`
    detectedNamesFile = `${base}.json`

    if (fs.existsSync(detectedNamesFile)) {
      return fs
        .readFileSync(detectedNamesFile)
        .toString();
    }

    await convert(file, txtFile)
    ebook = fs
      .readFileSync(txtFile)
      .toString();

    var detectedNames = tag(tokenize(ebook))
      .filter(token => /[A-Z]/.test(token.value[0]))
      .filter(token => token.tag === "word")
      .filter(token => ["NNP", "NN", "NNPS", "NNS", "RB"].includes(token.pos))
      .map(token => token.value)
      .reduce((a, b) => (a.includes(b)
        ? a
        : a.concat(b)), [])
      .sort();

    fs.writeFile(detectedNamesFile, JSON.stringify(detectedNames))

    return detectedNames;
  } catch (error) {
    console.log(error);
  }
};

const clamp = (center, tolerance = 100) => {
  var low = Math.max(center - tolerance, 0);
  var high = Math.min(ebook.length, center + tolerance);

  return {low, high};
};

const findPassage = name => {
  var matchedIndexes = [];

  let regexp = RegExp(name, "g");
  while ((match = regexp.exec(ebook))) {
    matchedIndexes.push(match.index);
  }

  return matchedIndexes.map(index => {
    return ebook
      .substring(clamp(index).low, clamp(name.length + index).high)
      .replace(regexp, `<em class="has-text-weight-bold has-text-info">${name}</em>`)
      .replace(/\r\n\r\n/g, `<br/>`)
  });
  return matchedIndexes;
};

const saveDetectedNames = content => {
  fs.writeFileSync(detectedNamesFile, JSON.stringify(content))
}

module.exports = {
  extract,
  findPassage,
  saveDetectedNames
};
