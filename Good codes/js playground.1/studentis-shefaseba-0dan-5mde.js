
// if students result for current day is 5 or more, write 5.

let todaysResult = 5;

if (todaysResult > 5) {
    console.log(5);

    // if students result for current day is from 0, till 5, write rounded result.
} else if (todaysResult <= 5 && todaysResult >= 0) {
    console.log(Math.round(todaysResult));

}
//if students result for current day is belou 0, write 0. 
else {
    console.log(0);
}
