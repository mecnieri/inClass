let dog = {
    sound: "woof",
    talk(){
        console.log(this.sound);
    }
}
let cat = {
    sound: "meow"
}
dog.talk()

let talking = dog.talk;
let b = talking.bind(cat)
b()