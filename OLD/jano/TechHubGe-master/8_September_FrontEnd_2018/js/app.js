function add(n){
    let s = 0;
    for( let i = 0; i < n; i++ ){
        for ( let j = 0; j < n; j++){
            s += i * j
        }
    }
}

function recursiveCount(max, current){
    if( current > max){
        return;
    }
    console.log(current);
    recursiveCount(max, current+1);
}

// recursiveCount(10, 1);

function fibanacci(n){
    if( n <= 2 ){
        return 1;
    }
    else {
        return fibanacci( n - 1) + fibanacci( n - 2);
    }
}


for( let i = 1; i < 12; i++){
    // console.log(`i - ${i}, num - ${ fibanacci(i) }`);
}

function factorial( number ){
    if ( number < 2) return 1;
    return number * factorial( number - 1 );
}

/*
    n * (n - 1) * (   n - 2) ... 3 * 2 * 1 => 6
*/
// factorial(1) = 1
// factorial(2) = 2
// factorial(3) = 6

// console.log(factorial(3))

function addNumbers(number = 0){
    if ( number === 0) return  number;
    else {
        return number + addNumbers( number - 1);
    }
}

addNumbers(3)
// 3 + addNumbers(2)
// 3 + 2 + addNumbers(1)
// 3 + 2 + 1

function tailAddNumbers( number , sum = 0 ){
    if ( number === 0) return  sum;
    else {
        return tailAddNumbers( number - 1, sum + number);
    }
}

// console.log( `AddNumbers - ${addNumbers(3)}`)
// console.log(`TailAddNumbers - ${tailAddNumbers(3)}`)
// tailAddNumbers(3, 0)
// tailAddNumbers(2, 3)
// tailAddNumbers(1, 5)
// tailAddNumbers(0, 6)  

function bubbleSort(numbers){
    do {
        var isSorting = false;
        for( let i = 0; i < numbers.length - 1; i++){
            if( numbers[i] > numbers[i+1] ){
                [ numbers[i], numbers[i+1] ] =  [ numbers[i+1], numbers[i] ]
                isSorting = true;
            }
        }
    }
    while(isSorting);
}

// let arr = [-7, -3, 5, 8, 10, 14, 1, 3, 4, 2];
// bubbleSort(arr);
// console.log(arr)

function insertionSort(numbers){
    for( let i = 0; i < numbers.length; i++ ){
        for( let j = 0;  j < i; j++ ){
            if( numbers[i] < numbers[j] ){
                let temp = numbers.splice(i, 1);
                numbers.splice(j, 0, temp[0]);
            }
        }
    }
}

// let arr = [-7, -3, 5, 8, 10, 14, 1, 3, 4, 2];
// insertionSort(arr);
// console.log(arr)


function mergeSort(numbers){
    if( numbers.length < 2){
        return numbers;
    }
    const length = numbers.length;
    const middle = Math.floor(length / 2 );
    const left = numbers.slice(0, middle);
    const right = numbers.slice(middle);
    return merge( mergeSort(left), mergeSort(right) );
}

function merge(left, right){
     const sortedArray = [];
     while(left.length && right.length){
        if( left[0] <= right[0]){
            sortedArray.push(left.shift());
        }
        else {
            sortedArray.push(right.shift());
        }
     }
     return sortedArray.concat(left, right);
}

// let arr = [-7, -3, 5, 8, 10, 14, 1, 3, 4, 2];
 // console.log(mergeSort(arr))

function quickSort(numbers){
    if( numbers.length <= 1) return numbers;
    const pivot = numbers[numbers.length - 1];
    const left = [];
    const right = [];
    for( let i = 0; i < numbers.length - 1; i++ ){
        if( numbers[i] < pivot){
            left.push( numbers[i] );
        }
        else {
            right.push( numbers[i] )
        }
    }
    return [ ...quickSort(left), pivot, ...quickSort(right) ];
}
let arr = [-7, -3, 5, 8, 10, 14, 1, 3, 4, 2];
console.log(quickSort(arr))


// SQL
// SELECT/INSERT/UPDATE/DELETE

/*
    Table - contacts

    id | first_name | last_name
    1  | John       | Doe   
*/

// Model
class Contact{
    constructor(name, last){
        this.name = name;
        this.lastname = last;
    }
}

/*
    SELECT first_name, last_name FROM contacts;
    SELECT * FROM contacts;
*/


/*
    INSERT INTO contacts(first_name, last_name) VALUES('Jane', 'Jane');
*/

/*
    Table - contacts

    id | first_name | last_name
    1  | John       | Doe   
    2  | Jane       | Jane   
*/

/*
    UPDATE contacts SET first_name = 'New name' WHERE id = 2
*/

/*
    DELETE FROM contacts WHERE id = 2
*/

