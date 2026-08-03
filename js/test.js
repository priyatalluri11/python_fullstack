console.log ("hello world")
let student_name = "priya"
console.log("student name is:" + student_name)
let student_age = 21
let course_name = "Python Full Stack"
console.log("student age is:" + student_age , "course_name is:" + course_name)
let fee = 1000
let discount = 10
let discounted_fee = fee - (fee * discount/100)
console.log("Discount fee is:" + discounted_fee)
let age=10
if(age>=10){
    console.log("Eligible for admission")
}
else{
    console.log("Not eligible for admission")
}
for(let i=1; i<=5; i++){
    console.log("Iteration number:" + i)
}
student = {

}
const pi = 3.14
console.log("Value of pi is:" +pi)
let student = {
    name:"priya",
    age:21,
    course:"Python Full Stack",
    fee: 10000
}
console.log("student details:", student)
function greetstudent(name){
    console.log("Hello" + name +", welcome to NRIIT Learning management system")
}
greenstudent(student_name)
function squareNumber(num){
    return num * num;

}
x=squareNumber(5);
console.log("Squareof 5 is:",x)


function checkOddEven(num){
    if (num % 2 == 0){
        return "Even";

    }
    else{
        return "Odd";
    }
}
console.log("Check if 7 is odd or even:", checkOddEven(7));
