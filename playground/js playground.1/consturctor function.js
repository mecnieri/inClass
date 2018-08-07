function person(fullName, favColor) {
    this.name = fullName;
    this.favColor = favColor;
    this.greet = function () {
        console.log("Hello there! My name is " + this.name + " and my favorite color is " + this.favColor + ".");
    }
}

let giorgi = new person("George", "blue");
giorgi.greet();

let natura = new person("Natura", " moiisfo cisferi");
natura.greet();
console.log(natura.favColor);





// function Movies(title, director, actor, year, budget) {
//     this.title = title;
//     this.director = director;
//     this.actor = actor;
//     this.year = year;
//     this.budget = budget;
// }

// let titanic = new Movies(
//     "Titanic", "James Cameron", "dicaprio", 1997, "200m"
// )
// console.log(titanic);
// let beautiful_mind = new Movies(
//     'Beautiful Mind', 'Ron Howard', 'Russel Crowe', 2001, '100m'
// )
// console.log(beautiful_mind);




