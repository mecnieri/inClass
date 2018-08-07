let num = Number(prompt("Enter a number"));

let sum = 0;
while(  num > 0 ){
    sum += num % 10;
    // debugger;
    num = parseInt( num / 10 );
}
alert(`Sum of digits is ${sum}`);   
