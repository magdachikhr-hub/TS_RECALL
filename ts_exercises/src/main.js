console.log("Library Management System — magda");
let bookTitle = "cats";
let datePublished = 1900;
let libraryStatus = true;
let pageNumbers = 357;
console.log(bookTitle);
console.log(datePublished);
console.log(libraryStatus);
console.log(pageNumbers);
//should i write void here?
function getBookInfo(bookTitle, datePublished, libraryStatus, pageNumbers) {
    return `the book title is ${bookTitle}, the date is was published ${datePublished}, the library status is: ${libraryStatus}, and the book has ${pageNumbers} pages`;
}
console.log(getBookInfo(bookTitle, datePublished, libraryStatus, pageNumbers));
function getBookSize(numberOfPages) {
    if (numberOfPages < 200) {
        return "short";
    }
    else if (numberOfPages <= 500) {
        return "medium";
    }
    else {
        return "long";
    }
}
console.log(getBookSize(6));
console.log(getBookSize(201));
console.log(getBookSize(577));
const authors = [
    "Shota Rustaveli",
    "Ilia Chavchavadze",
    "Akaki Tsereteli",
    "Vazha Pshavela",
    "Mikheil Javakhishvili",
];
for (let i = 0; i < authors.length; i++) {
    console.log(i, authors[i]);
}
//2.5 — ციკლი და ფილტრაცია
//შექმენით number[] მასივი 6 წიგნის შეფასებით და for...of ციკლით გამოთვალეთ
//საშუალო შეფასება.
const numbers = [9, 9, 7, 3, 10, 5];
let total = 0;
for (const nums of numbers) {
    total += nums;
}
const average = total / numbers.length;
console.log(average);
const filteredNums = numbers.filter((num) => num < 6);
console.log(filteredNums);
const firstAuthor = {
    firstName: "james",
    lastName: "jameson",
    country: "georgia",
    birthYear: 2000,
    website: "www.url.com",
};
const author = {
    firstName: "kelly",
    lastName: "kellyson",
    country: "georgia",
    birthYear: 1980,
};
console.log(firstAuthor);
console.log(author);
const bookOne = {
    id: 4,
    title: "dogs",
    genre: "comedy",
    pages: 5000,
    price: 19.99,
};
console.log(bookOne);
const books = [
    {
        id: 4,
        title: "dogs",
        genre: "comedy",
        pages: 1200,
        price: 119.99,
    },
    {
        id: 5,
        title: "towers",
        genre: "horror",
        pages: 209,
        price: 39.99,
    },
    {
        id: 9,
        title: "monsters",
        genre: "horror",
        pages: 4300,
        price: 49.99,
    },
];
books.forEach((books) => {
    console.log(books.title, books.price);
});
//4
class Member {
    firstName;
    lastName;
    email;
    age;
    constructor(firstName1, lastName1, email1, age1) {
        this.firstName = firstName1;
        this.lastName = lastName1;
        this.email = email1;
        this.age = age1;
    }
    getProfile() {
        return `Name: ${this.firstName} Surname: ${this.lastName}, Email: ${this.email}, Age: ${this.age}`;
    }
}
const member = new Member("magda", "chikh", "example@.com", 21);
console.log(member);
console.log(member.firstName);
console.log(member.lastName);
//console.log(member.age);
class PremiumMember extends Member {
    getBorrowedBooks() {
        return ["cats", "dogs", "snow white", "elsa", "spiderman"];
    }
}
const member2 = new PremiumMember("mary", "maryson", "example@.com", 24);
console.log(member2);
console.log(member2.getBorrowedBooks());
console.log(member.getProfile());
console.log(member2.getProfile());
export {};
//# sourceMappingURL=main.js.map