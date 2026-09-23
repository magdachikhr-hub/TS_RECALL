let text = "yoyoyoyo";
// text = {}
console.log(text + 1);
let numb = 56;
// numb = []
let isChecked = true || false;
let isCheck = true || false;
let planets = [
    "earth",
    "mars",
    "pluto",
    {},
    [],
];
const user1 = {
    name: "magda",
    surname: "chi",
    age: 21,
    parents: ["w", "l"],
};
const user2 = {
    name: "mj",
    surname: "lee",
    age: 21,
    parents: ["r", "q"],
    email: "example@gmail.com",
};
let number = 546;
let state;
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
const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Headphones", price: 150 },
    { name: "Keyboard", price: 100 },
];
let balance = 5000;
let nextOrderId = 1;
const orders = [];
function addNewProduct(product) {
    products.push(product);
}
function placeOrder(productName) {
    const selectedProduct = products.find((product) => product.name === productName);
    // function placeOrder(productName: number) {
    //   const selectedProduct: Item | undefined = products.find(
    //     (product) => Number(product.name) === productName,
    //   );
    if (!selectedProduct) {
        return;
    }
    balance += selectedProduct.price;
    const newOrder = {
        id: nextOrderId++,
        product: selectedProduct,
        status: "pending",
    };
    orders.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    const order = orders.find((order) => order.id === orderId);
    if (!order)
        return;
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
//exp2
let username = "Natia";
let age = 25;
let isStudent = "yes";
let scores = [10, 20, 30, 40];
function greet(name) {
    return `Hello ${name}`;
}
console.log(greet("Natia"));
const person = {
    id: "JDFNVID",
    name: "millie",
    surname: "grant",
    age: 41,
};
const SecondPerson = {
    id: 33,
    name: "millie",
    surname: "grant",
    age: 41,
};
const buyer = {
    name: "laptop",
    price: 3333,
    id: 4545,
};
const SecondBuyer = {
    name: "iphone",
    price: 200,
    id: "USER-33",
};
const owner = {
    id: 435,
    username: "natia",
    age: 24,
    email: "@",
    password: "sgfhd",
    role: "administative",
};
const persona = {
    id: 32854,
    username: "natia",
    age: 24,
    email: "nkar@gmail.com",
};
const product1 = {
    id: "sghadjdshf",
    name: "laptop",
    price: 234,
};
console.log(persona);
export {};
//# sourceMappingURL=main.js.map