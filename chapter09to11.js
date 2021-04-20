// Question 01***********************************************************************

var city = prompt("Enter a city name");

if(city==="karachi"||city==="Karachi"||city==="KARACHI")
{
    alert("Welcome to the city of lights");
}
else
{
    alert("Enter invalid city");
}


// Question 02***********************************************************************

var gender = prompt("Enter your gender, male or female");

if(gender==="male"||gender==="Male")
{
    alert("Good Morning Sir");
}

else if(gender==="female"||gender==="female")
{
    alert("Good Morning Ma'am");
}
else{
    alert("Hello meethey");
}


// Question 03***********************************************************************


var colorOfRoad = prompt("Enter traffic signal colors");

// Table me kese karna hai print samajh nhi aya

if(colorOfRoad==="Red"||colorOfRoad==="red")
{
    alert("Must Stop");
}


else if(colorOfRoad==="Yellow"||colorOfRoad==="yellow")
{
    alert("Ready to move");
}


else if(colorOfRoad==="Green"||colorOfRoad==="green")
{
    alert("Move Now");
}
else{
    alert("Entered wrong color");
}

document.write("<table><tr><th>Single color</th><th>Message</th></tr> <tr><th>Red</th><td>Message</td></tr></table>")


// Question 04*************************************************************************
var remainFuel = +prompt("Enter the amount of fuel in car");

if(remainFuel<0.25){
    alert("Please refeil the fuel in your car");
}

// Question 05************************************************************************
// a.............
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
// displayed
}



// b..............
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");

// not displayed
}



// c...........
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// Condition 2 & 4 is true*



// d...........

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// displayed

// e............
if (true){
    alert("True");
    // displayed
    }
    if (false){
    alert("False");
    }


// f..........
if("car" < "cat"){
    alert("car is smaller than cat");
    }



// Question 06*****************************************************

var totalMarks = 300;
var obtainedMarks = +prompt("Enter your obtained marks",000);
resultingPercentage = (obtainedMarks/totalMarks)*100;

if(resultingPercentage>=80){
    var grade = "A-one";
    var remarks = "Excellent";
}
else if(resultingPercentage>=70){
    var grade = "A";
    var remarks = "Good";
}
else if(resultingPercentage>=60){
    var grade = "B";
    var remarks = "You need to improve";
}else{
    var grade = "Fail";
    var remarks = "Sorry";
}
document.write("<h1>Mark Sheet</h1> <br><br><br>");
document.write("Total Marks: " + totalMarks);
document.write("<br>Marks Obtained: " + obtainedMarks);
document.write("<br>Percentage: " + resultingPercentage + "%");
document.write("<br>Grade: " + grade);
document.write("<br>Remarks: " + remarks);


// Question 07****************************************************




// Question 08****************************************************

var givenNumber = +prompt("Enter a Number");

if(givenNumber/3){
    document.write("<br>Yes the "+ givenNumber+" is divisible by 3");
}
else{
    document.write("<br>nope the "+ givenNumber+" is divisible by 3");
}


// Question 09***************************************************
var n1 = +prompt("Checking even or odd");

if(n1%2==0){
    document.write("it is even");
}else{
    document.write("it is odd");
}


// Question 10********************************************************

var temp = +prompt("Enter a temperature");
if(temp > 40){
    document.write("It is too hot outside");
}else if(temp > 30){
    document.write("The weather today is normal");
}else if(temp > 20){
    document.write("Today weather is cool");
}else if(temp > 10){
    document.write("OMG! Today weather is so cool");
}



// Question 11**********************************************************

var firstNum = +prompt("Enter a first number");
var secondNum = +prompt("Enter a second number");
var operator = prompt("Enter a operator");

if(operator==="+"){
    var res = firstNum + secondNum;
    document.write("<br>The addition of "+firstNum+" & "+secondNum +" is :" + res);
}
else if(operator==="-"){
    var res = firstNum - secondNum;
    document.write("<br>The subtraction of "+firstNum+" & "+secondNum +" is :" + res);
}
else if(operator==="*"){
    var res = firstNum * secondNum;
    document.write("<br>The multiplication of "+firstNum+" & "+secondNum +" is :" + res);
}
else if(operator==="/"){
    var res = firstNum / secondNum;
    document.write("<br>The division of "+firstNum+" & "+secondNum +" is :" + res);
}
else if(operator==="%"){
    var res = firstNum % secondNum;
    document.write("<br>The modulos of "+firstNum+" & "+secondNum +" is :" + res);
}
else{
    document.write("<br>The operator is invalid");

}