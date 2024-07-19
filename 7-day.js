let book = {
    title:"my book",
    author:"moin",
    year:2004
}
console.log(book.author);
console.log(book.title);
book.funct = function() {
    return `${this.title} and ${this.author}`
}

console.log(book.funct())

book.upyear = function (year) {
    this.year=year
}

book.upyear(800)

console.log(book);


let lib = {
    nam: "abc lib",
    book: [
        {
            name: "abc book",
            author: "moin"
        }
    ]
}

for (const key in book) {
   console.log(book[key]);
}

console.log(Object.keys(book));
console.log(Object.values(book));