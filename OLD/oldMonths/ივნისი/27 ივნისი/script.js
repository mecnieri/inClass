// let arr = [1,2,3,4,5,6,7,8,9];

// arr.forEach((element, index, arr) => {   //3 არგუმენტიანია
// //     console.log(index);
// // console.log(`value -${element},index - ${index}, array -${arr}`);
// });


// let newArr = arr.map((element, index, arr) => {
//     return `<div><b>${element *2 }</b></div>` ;
// });

// // console.log(arr);
// // document.body.innerHTML = newArr.toString().split(',').join(' ');
// // console.log( newArr.toString().split(','));


// let filtered = arr.filter((element)=>{
//     return !(element & 1);
//     // return (element % 2 ) == 1;
// }); 

// // console.log(filtered);

// for(let key of arr.keys()){
// console.log(key);
// }
// console.log(arr.entries());  // indexebi da mnishvnelobebi 
// console.log(arr.values());      // mnishvnelobebi
// console.log(arr.keys());    // indexebi 


// Object.keys()
// Object.entries()



// let myArray = ["Jazz", "Blues"]
// console.log(myArray);


// myArray.push("Rock-n-roll")
// console.log(myArray);


// myArray[Math.floor(myArray.length/2)] = "Classic"
// console.log(myArray);
// myArray.shift();


// console.log(myArray);

// myArray.unshift("Rap", "Reggae")

// console.log(myArray);


// let arr = [-2, -3, 4, -1, -2, 1, 5, -3 ];

// // console.log(arr.length);

// function allSum(x,y, ...numbers) {
     
//     console.log(numbers);
//     // console.log(arguments);
// }
// // allSum(1,2,3,4,5,6);


// console.log(Math.max(...[1,2,3,4,5,6]));

// let merge = [100,113,...[1,2,3,4,5,6], ...arr,65];
// console.log(merge);
// let str = "Georgia";
// console.log([...str]);



// console.log(document.body.innerHTML);

// insert Before (elementNode, element)


// generateHTML(count, tagName, selector);
// generateHTML(1, ul, '#container', 3, 'li');

let elementNode = document.createElement('strong');
let elementText = document.createTextNode('Georgia');

let containerDiv  = document.querySelector("#container");
let p = containerDiv.querySelector('#para');


p.appendChild(elementNode);
elementNode.appendChild(elementText);




function name(count, tagName, text) {

    for(let i=0; i< count; i++){
    elementText = document.createTextNode(text);
    elementNode.appendChild(elementText);
       }



}
name(5,"h1", " rasac minda ")

let params = {


}

atributi 
clasi 