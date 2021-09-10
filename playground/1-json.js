const book = {
    title: 'ego is the enemy',
    author: 'ryan holiday'
}
const bookJSON = JSON.stringify(book)
const parseData = JSON.parse(bookJSON)
console.log(bookJSON)
console.log(parseData.author)