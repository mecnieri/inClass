let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let a = 0;
let b = 0;



document.getElementById("+").addEventListener("click", function () {
    a++
    
    if (a % 4 == 1 || a % 4 == 2 || a % 4 == 3) {
        b += 2;
    }
    
    else if (a % 4 == 0) {
        b++;
    }
     
    let apr = new Date(2018, 3, 28 + b, )
    let day = days[apr.getDay()];
    let date = apr.getDate();
    let month = months[apr.getMonth()];
    let newdate = day + " " + month + " " + date;

    console.log(newdate);
    console.log(apr.getDay());
})


document.getElementById("-").addEventListener("click", function () {
    
    
    if (a % 4 == 1 || a % 4 == 2 || a % 4 == 3) {
        b -= 2;
    }
    
    else if (a % 4 == 0) {
        b--;
    }
    
    let apr = new Date(2018, 3, 28 + b, )
    let day = days[apr.getDay()];
    let date = apr.getDate();
    let month = months[apr.getMonth()];
    let newdate = day + " " + month + " " + date;
    
    // console.log(b);
    console.log(newdate);
    console.log(apr.getDay());
    a--;
})
