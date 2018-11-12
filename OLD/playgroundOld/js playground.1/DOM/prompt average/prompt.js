
function myFunction(elmnt, x) {
    elmnt.innerHTML = x;

    let sum = 0;
    
    for (let j = 1; j < 9; j++) {
      
        sum += Number(document.getElementById("c" + j ).textContent);
        average = sum / j;
    }
     console.log(sum);
     console.log(average);
     document.getElementById("c9").innerHTML = average;
}