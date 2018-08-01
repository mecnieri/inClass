String.prototype.show = function () {
    console.log(this);
}

String.prototype.repeat = function (n) {
    return new Array(n + 1).join(this);

}

// "Hello world".show()

// console.log("blah ".repeat(4));

//////////////////////////////////////////////

// ფუნქციონალური კლასი


function user(name, birthday) {
    this.name = name;
    this.sayName = function () {
        console.log(`Name: ${this.name} , Age - ${something()}`);
    }
    function something() {
        return new Date().getFullYear() - birthday.getFullYear();
    }
}


let gela = new user("Gela", new Date(1990, 2, 5));
// gela.sayName();

//////////////////////////////

// Factory Class Pattern

function Person(name, birthday) {
    function calcAge() {
        return new Date().getFullYear() - birthday.getFullYear();
    }

    return {
        sayName() {
            console.log(`Name: ${name} , Age - ${calcAge()}`);
        }
    }
}

// let gela2 = Person("Gela", new Date(1990, 2, 5));
// gela2.sayName();



function Human(name, birthday) {
    this._name = name;
    this._birthday = birthday;
}


Human.prototype._calcAge = function () {

    return new Date().getFullYear() - this._birthday.getFullYear();

}

Human.prototype.sayName = function () {
    console.log(`Name: ${this._name} , Age - ${this._calcAge()}`);
}

let human = new Human("John", new Date(1996, 5, 6))
// human.sayName();


////////////

class Animal {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length === 0) {
            console.log("Name Error!...");
            return;
        }
        this._name = value;
    }

    sayName() {
        console.log(this.name.repeat(3));
    }
    static staticMethod() {
        // console.log(this === Animal);
    }
}

// let cat = new Animal("Tom ")
// cat.sayName();


function makeAClass(sentence) {
    return class {
        say() {
            // console.log(sentence);
        }
    }
}

let sentence = makeAClass("lorem ipsum dolar sit amet")

new sentence().say();


Animal.staticMethod();



class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }
    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }
}

let articles = [
    new Article("HTML", new Date(2018, 6, 13)),
    new Article("CSS3", new Date(2018, 5, 15)),
    new Article("ES6", new Date(2018, 4, 11)),
];

articles.sort(Article.compare);
// console.log(articles[0].title);
// console.log(articles[1].title);
// console.log(articles[2].title);










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


console.log(products[0]);
console.log(products[1]);
console.log(products[2]);
console.log(products[0].makeDiscount(70));

products[0].id = 3213;
console.log(products[0]);


products[0].print();
products[1].print();
products[2].print();