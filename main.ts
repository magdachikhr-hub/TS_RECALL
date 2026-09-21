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

//exp
interface Item {
  name: string;
  price: number;
}

interface Order {
  id: number;
  product: Item;
  status: "pending" | "completed";
}

const products: Item[] = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Headphones", price: 150 },
  { name: "Keyboard", price: 100 },
];

let balance = 5000;
let nextOrderId = 1;

const orders: Order[] = [];

function addNewProduct(product: Item) {
  products.push(product);
}

function placeOrder(productName: string) {
  const selectedProduct: Item | undefined = products.find(
    (product) => product.name === productName,
  );

  // function placeOrder(productName: number) {
  //   const selectedProduct: Item | undefined = products.find(
  //     (product) => Number(product.name) === productName,
  //   );

  if (!selectedProduct) {
    return;
  }

  balance += selectedProduct.price;

  const newOrder: Order = {
    id: nextOrderId++,
    product: selectedProduct,
    status: "pending",
  };

  orders.push(newOrder);

  return newOrder;
}

function completeOrder(orderId: number) {
  const order = orders.find((order) => order.id === orderId);

  if (!order) return;

  order.status = "completed";

  return order;
}

addNewProduct({
  name: "Monitor",
  price: 300,
});

addNewProduct({
  name: "Mouse",
  price: 50,
});

placeOrder("Laptop");

completeOrder(1);

console.log("Products:", products);
console.log("Balance:", balance);
console.log("Orders:", orders);
