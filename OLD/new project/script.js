//#region declaring parameters

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let a = 0;
let b = 0;
let totalDays = a;

// remove day button disabled 
document.getElementById("removeDay").disabled = true;

// parameteres needed for creating new column in table 
let params = {
    // new column must be created in div .table
    grandParentSelector: ".table",

    //parameters for new column (new div) with id="trainingDay " + day number  
    parentTagName: "div",
    pAttName: "id",
    pAttValue: "trainingDay ",

    //parameters for 16 new box, in column
    elementTagName: "div",
    attName: "id",
    attValue: "student_TrnDay_",
    count: 16,
}

//#endregion 

//#region add day 

document.getElementById("addDaybutton").addEventListener("click", function () {
    // when add day button is clicked, total days increases by 1 
    a++;

    //#region date 

    // b is needed to count exact date  
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
    let newdate = day + " </br> " + month + " " + date;


    //#endregion 


    function addingColumn(arg) {
        // selecting div .table 
        let grandParentClass = document.querySelector(arg.grandParentSelector);
        // creating div (new column)
        let parentNode = document.createElement(arg.parentTagName);
        //  putting new div in .table and setting ID trainingDay + number of days 
        grandParentClass.appendChild(parentNode).setAttribute(arg.pAttName, arg.pAttValue + a);

        // creating 16 childs (boxes) 
        // "i" is number of student
        for (let i = 0; i < arg.count; i++) {
            // parent always must be the last column of ".table"
            let parentId = document.querySelector(".table").lastElementChild;
            let elementNode = document.createElement(arg.elementTagName);
            // default input is "0"
            let elementText = document.createTextNode("0");
            // setting boxes id with students number and days number 
            parentId.appendChild(elementNode).setAttribute(arg.attName, arg.attValue + i + "_" + a);
            // prompt function for every box 
            elementNode.setAttribute("onclick", "averageFunc(this, Number(prompt('Please, enter number here')))");
            elementNode.style.background = "red"
            elementNode.appendChild(elementText);
        }
        // putting date in first box 
        document.getElementById(arg.pAttValue + a).firstChild.innerHTML = newdate;
        document.getElementById(arg.pAttValue + a).firstChild.style.background = "silver";
        // counting total days 
        document.getElementById("totalDays").innerHTML = "Total Days &emsp;&emsp;&emsp;" + a;

    }
    addingColumn(params);

    // we have already created a column, so remove day button now is enabled
    document.getElementById("removeDay").disabled = false;

});

//#endregion 

//#region remove day 

document.getElementById("removeDay").addEventListener("click", function () {
    // Removes an element from the document, if we have already created at least one
    if (a > 0) {
        // decreasing date
        if (a % 4 == 1 || a % 4 == 2 || a % 4 == 3) {
            b -= 2;
        }

        else if (a % 4 == 0) {
            b--;
        }

        a--;
        // removing last child of ".table"
        let element = document.querySelector(".table").lastElementChild;
        element.parentNode.removeChild(element);
        // decreasing total days number
        document.getElementById("totalDays").innerHTML = "Total Days &emsp;&emsp;&emsp;" + a;
    }
    if (a == 0) {
        // if we remove all days, remove day button disables 
        document.getElementById("removeDay").disabled = true;
    }
});

//#endregion 

//#region inputing results and counting statistics 

function averageFunc(elmnt, todaysResult) {
    // if students resuld is above 5, input will be 5 
    if (todaysResult > 5) {
        elmnt.innerHTML = 5;
        elmnt.style.background = "green";

        // if students result for current day is from 0, till 5, writes rounded result.
    } else if (todaysResult <= 5 && todaysResult >= 0) {
        elmnt.innerHTML = (Math.round(todaysResult));
        elmnt.style.background = "green";

    }
    //if students result for current day is below 0, writes 0. 
    else {
        elmnt.innerHTML = 0;
    }

    missedLesson = 0;

    // k is a students number 
    for (let k = 1; k <= 15; k++) {
        let sum = 0;
        let average = 0;
        // j is a day number
        for (let j = 1; j <= a; j++) {
            // counting sum of students every day result
            sum += Number(document.getElementById("student_TrnDay_" + k + "_" + j).innerHTML);
            average = sum / j;
            // rounding average by decimals 
            document.getElementById("av" + k).innerHTML = parseFloat(Math.round(average * 10) / 10);
            // counting zeros, so missed days 
            if (Number(document.getElementById("student_TrnDay_" + k + "_" + j).innerHTML) == 0) {
                missedLesson++;
            }
        }
    }

    document.getElementById("missedLessons").innerHTML = "Missed Lessons &emsp;" + missedLesson;


    let sumAverage = 0;
    for (let v = 1; v <= 15; v++) {
        sumAverage += Number(document.getElementById("av" + v).innerHTML)
        averageAverage = parseFloat(Math.round((sumAverage / 15) * 100) / 100);
    }

    document.getElementById("averageMark").innerHTML = "Average Mark  &emsp; &nbsp;" + averageAverage;


}

//#endregion 

//#region updating statistics 

document.getElementById("update").addEventListener("click", function () {
    missedLesson = 0;

    for (let k = 1; k <= 15; k++) {
        let sum = 0;
        let average = 0;
        for (let j = 1; j <= a; j++) {

            sum += Number(document.getElementById("student_TrnDay_" + k + "_" + j).innerHTML);
            average = sum / j;
            document.getElementById("av" + k).innerHTML = parseFloat(Math.round(average * 10) / 10);

            if (Number(document.getElementById("student_TrnDay_" + k + "_" + j).innerHTML) == 0) {
                missedLesson++;
            }

        }
    }
    document.getElementById("missedLessons").innerHTML = "Missed Lessons &emsp;" + missedLesson;


    let sumAverage = 0;
    for (let v = 1; v <= 15; v++) {
        sumAverage += Number(document.getElementById("av" + v).innerHTML)
        averageAverage = parseFloat(Math.round((sumAverage / 15) * 100) / 100);
    }

    document.getElementById("averageMark").innerHTML = "Average Mark  &emsp; &nbsp;" + averageAverage;





    // best student 

    let lastDayResults = [];
    for (let x = 1; x <= 15; x++) {
        lastDayResults.push(Number(document.getElementById("student_TrnDay_" + x + "_" + a).innerHTML));
    }

    console.log(lastDayResults.sort((a, b) => { return a - b; }));

    let maxResult = lastDayResults[lastDayResults.length - 1]
    console.log(maxResult);

    let maxs = []
    for (let k = 1; k <= 15; k++) {

        if (Number(document.getElementById("student_TrnDay_" + k + "_" + a).innerHTML) == maxResult) {
            document.getElementById("best").innerHTML = "best student" + document.getElementById("student" + k).innerHTML;
            maxs.push(document.getElementById("student" + k).innerHTML);

        }
        
    }

    document.getElementById("best").innerHTML = "best student" + maxs;

});

//#endregion 


