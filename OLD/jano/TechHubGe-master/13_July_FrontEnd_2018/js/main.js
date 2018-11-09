String.prototype.show = function(){
    console.log(this)
}

String.prototype.repeat = function(n){
    return new Array( n + 1).join(this);
}

// "Hello World".show()

// console.log("Blah".repeat(4))

function User(name, birthday){
    this.name = name;
    this.sayName = function(){
        console.log(`Name: ${this.name}, Age - ${something()}`)
    }
    function something(){
        return new Date().getFullYear() - birthday.getFullYear();
    }
}

let gela = new User("Gela", new Date(1990, 2, 5));
// gela.sayName()

// Factory Class Pattern

function Person(name, birthday){
    function calcAge(){
        return new Date().getFullYear() - birthday.getFullYear();
    }

    return {
        sayName(){
            console.log(`Name: ${name}, Age - ${calcAge()}`)
        }
    }
}

// let gela2 = Person("Gela", new Date(1990, 2, 5));

function Human(name, birthday){
    this._name = name;
    this._birthday = birthday;
}


Human.prototype._calcAge = function(){
    return new Date().getFullYear() - this._birthday.getFullYear();
}

Human.prototype.sayName = function(){
    console.log(`Name: ${this._name}, Age - ${this._calcAge()}`)
}


// let human = new Human("John", new Date(1996, 5, 6));
// human.sayName();
// human._name = undefined;
// human.sayName();

class Animal {
    constructor(name){
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value){
        if( value.length === 0){
            console.log("Name Error!...");
            return;
        }
        this._name = value;
    }
    sayName(){
        console.log(this.name.repeat(3));
    }

    static staticMethod(){
        console.log(this === Animal);
    }
}

// let cat = new Animal("Tom");
// cat.sayName();
// cat.name = undefined;
// cat.sayName();

function makeAClass(sentence){
    return class {
        say(){
            console.log(sentence);
        }
    }
}

let sentence = makeAClass("Lorem Ipsum Dolar sit amet.");
// new sentence().say()

// Animal.staticMethod()

class Article {
    constructor(title, date){
        this.title = title;
        this.date = date;
    }
    static compare(articleA, articleB){
        return articleA.date - articleB.date;
    }
}

let articles = [
    new Article("HTML5", new Date(2018, 6, 13)),
    new Article("CSS3", new Date(2018, 5, 15)),
    new Article("ES6", new Date(2018, 4, 11)),
];

articles.sort(Article.compare);

console.log(articles[0].title);



