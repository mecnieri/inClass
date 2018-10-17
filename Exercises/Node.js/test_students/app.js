let student =  require('../students/student');

let giorgi = new student(14, "Giorgi", 26)

giorgi.addGrade(10)
giorgi.addGrade(2)

giorgi.computeGradesAverage()
console.log(giorgi.computeGradesAverage());