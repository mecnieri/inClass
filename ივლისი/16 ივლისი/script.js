class Animal {

    constructor(name, speed){
         this.name = name;
        this.speed = speed;
    }

    run(speed=0){
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }

    stop(){
        this.speed = 0;
        console.log(`${this.name} stopped.`);
    }
    static compare(a,b){
        return a.speed - b.speed;
    }
}

class Mouse extends Animal{
    // constructor(name, earLenght){
    //     super(name)
    //     this.earLenght = earLenght
    // }
    hide(){
        // console.log(`${this.name} hides!`);

    }
    stop(){
        super.stop();
        this.hide()
    }
   
}

let jerry = new Mouse ("Jerry", 3);

// jerry.run(120)
// jerry.hide()
// jerry.stop()
// console.log(jerry.earLenght);

let mice = [
    new Mouse("Big Rat", 5),
    new Mouse("Batman", 2),
    new Mouse("Jerry", 4),
    new Mouse("Wuna", 6),]

    // mice.sort(Mouse .compare);
    // mice[0].run()
    // mice[1].run()
    // mice[2].run()
    // mice[3].run()


    class MyArray extends Array {
        isEmpty(){
            return this.length === 0;
        }
    }

    let myArr = new MyArray(1,2,3,4,5,6,7,8,9,10,20,30,40);

    // console.log(`myArr.isEmpty() - ${myArr.isEmpty()}`);


    let filteredArr = myArr.filter( item => item >= 10);

    // console.table(filteredArr);
    // console.log(`filteredArr.isEmpty()- ${filteredArr.isEmpty()}`);

// console.log( jerry instanceof Animal);
// console.log( jerry instanceof Mouse);
// console.log( filteredArr instanceof MyArray);






// EXERCISE 30



class Product {
    constructor(id, name, price, discount) {
        this._id = id;
        this.name = name;
        this.price = price;
    }
    makeDiscount(discount) {
        return this.price - (this.price / 100) * discount;
    }
    print() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Price: ${this.price} `);
    }

    get id() {
        return this._id;
    }


    get price() {
        return this._price;
    }

    set price(value) {
        if (value <= 0) {
            console.log("Price Error!...");
            return;
        }
        this._price = value;
    }

    static compare(productA, productB) {
        return productA.price - productB.price;
    }

}


let products = [
    new Product(1, "adidas", 200),
    new Product(2, "nike", 100),
    new Product(3, "newbalance", 100),
];

products.sort(Product.compare);


// console.log(products[0]);
// console.log(products[1]);
// console.log(products[2]);
// console.log(products[0].makeDiscount(70));

// products[0].id = 3213;
// console.log(products[0]);


// products[0].print();
// products[1].print();
// products[2].print();

// class Book extends Product{
//     constructor(id, name, price, authors, pubDate){
//         super(id, name, price);
//         this.authors = new Array(authors);
//         this.pubDate = pubDate;
//     }
  

//     print(){
//        return `${super.print()}, Author : ${this.authors},  PUBDATE : ${this.pubDate} `;
//     }
   
// }

// let books = [
//     new Book(5, "Narcis and goldmund", 20, ["Herman Hese", "fasda fasf"], 1900),
//     // new Book(2, "Ulyses", 1888),
//     // new Book(3, "Odysevs", 100),
// ];

//  console.log(books[0].print());

// // console.log(books);

let date = new Date (2018, 10 ,10).toDateString();
console.log(date);