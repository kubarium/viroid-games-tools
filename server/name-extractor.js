var path = require("path");
var fs = require("fs");
var tag = require('wink-pos-tagger')().tag;
var tokenize = require('wink-tokenizer')().tokenize;

var ebook = "";

const extract = (file) => {
    try {
        ebook = fs
            .readFileSync(file)
            .toString()

        return tag(tokenize(ebook))
            .filter(token => /[A-Z]/.test(token.value[0]))
            .filter(token => token.tag === "word")
            .filter(token => ["NNP", "NN", "NNPS", "NNS"].includes(token.pos))
            .map(token => token.value)
            .reduce((a, b) => a.includes(b)
                ? a
                : a.concat(b), [])
            .sort()

    } catch (error) {
        console.log(error)
    }
}

const clamp = (center, tolerance = 150) => {
    var low = Math.max(center - tolerance, 0)
    var high = Math.min(ebook.length, center + tolerance)

    return {low, high}
}

const findPassage = (name) => {
    var matchedIndexes = []

    let regexp = RegExp(name, "g")
    while (match = regexp.exec(ebook)) {
        matchedIndexes.push(match.index)
    }

    return matchedIndexes.map((index) => ebook.substring(clamp(index).low, clamp(name.length + index).high).replace(name,`<em>${name}</em>`))
    return matchedIndexes
}

module.exports = {
    extract,
    findPassage
}
