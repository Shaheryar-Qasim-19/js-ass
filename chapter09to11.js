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