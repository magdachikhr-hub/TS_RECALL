let text: string = "yoyoyoyo";

// text = {}

console.log(text + 1);

let numb: number = 56;

// numb = []

let isChecked: true | false = true || false;
let isCheck: boolean = true || false;

let planets: (string | {} | [] | boolean)[] = [
  "earth",
  "mars",
  "pluto",
  {},
  [],
];

// function sum() {}

//

interface User {
  name: string;
  surname: string;
  age: number;
  parents: (string | [])[];
  email?: string;
}

const user1: User = {
  name: "magda",
  surname: "chi",
  age: 21,
  parents: ["w", "l"],
};

const user2: User = {
  name: "mj",
  surname: "lee",
  age: 21,
  parents: ["r", "q"],
  email: "example@gmail.com",
};

let number = 546;

let state: string | undefined;

let random = number < 0 && "entr";

let random2 = number < 0 || "string";

let random3 = state ?? 54;

let random4 = 0 || number > 0;
//0 on the left is considered falsy

console.log(random);

console.log(random2);

console.log(random3);

console.log(random4);

//?? - checks if "state" is undefined - if it is undefined it looks whats next to it

const num2 = 59495;

let random5 = num2 ?? 54;
let random6 = num2 || "string";

console.log(random5);
console.log(random6);
