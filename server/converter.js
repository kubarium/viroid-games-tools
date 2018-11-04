const spawnCommand = require('spawncommand');

// node .\converter.js "D:\Torrents\!eng lit\F\Feist, Raymond\Raymond E. Feist -
// Riftwar 02 - Magician - Master.lit"
module.exports = async function convert(file, txtFile) {

    const {promise} = spawnCommand(`ebook-convert`, [file, txtFile])
    const {stderr, stdout, code} = await promise

    return code === 0
}
