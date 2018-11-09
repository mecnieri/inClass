
// RANDOM 

let random = function (guess, min, max) {

    rand = Math.floor(Math.random() * (max - min + 1) + min)
    if (guess === rand) {
        return true
    } else {
        return rand
    }
}

console.log(random(13, 12, 13)); 