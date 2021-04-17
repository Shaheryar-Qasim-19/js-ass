// *******************Chapter 05 ****************************


// ******************Question # 01 ****************************
// Addtion
var a = 5;
var b = 4;
var c = a + b;
document.write("Sum of "+a+" and "+b+" is \n "+c);
document.write("<br>");
document.write("<br>");



// ******************Question # 02 ****************************
// Subtraction
var a = 5;
var b = 4;
var c = a - b;
document.write("\nSubtraction of "+a+" and "+b+" is "+c);
document.write("<br>");
document.write("<br>");



// ******************Question # 02 ****************************
// Multiply
var a = 5;
var b = 4;
var c = a * b;
document.write("\nMultiplication of "+a+" and "+b+" is "+c);
document.write("<br>");
document.write("<br>");



// ******************Question # 02 ****************************
// Divide
var a = 5;
var b = 4;
var c = a / b;
document.write("\nDivision of "+a+" and "+b+" is "+c);
document.write("<br>");
document.write("<br>");



// ******************Question # 02 ****************************
// Modulus
var a = 5;
var b = 4;
var c = a % b;
document.write("\nModulus of "+a+" and "+b+" is "+c);
document.write("<br>");
document.write("<br>");




// ******************Question # 03 ****************************

// ************ a ***************
var sherry;
// ************ b ***************
document.write("Value after variable declaration is:" + sherry);
document.write("<br>");
document.write("<br>");

// ************ c ***************
sherry = 05;

//d
document.write("Initial    value: " + sherry);
document.write("<br>");
document.write("<br>");

// e
sherry++

//f
document.write("value after increment is: " + sherry);
document.write("<br>");
document.write("<br>");


//g
// ************** 6  +  7   ****************
var result = sherry + 7;


//h
alert("Value after addition is " + result);


//i
result--
//j
document.write("value after decrement is: " + result);
document.write("<br>");
document.write("<br>");

//k 
var reminder = result % 3;

// L
document.write("The reminder is: " + reminder);
document.write("<br>");
document.write("<br>");

// ******************Question # 04 ****************************
var tic = 600, buy = 5;
var cost = tic * buy;
document.write("Total cost to buy" + buy + "tickets to a movie is " + cost+"PKR");
document.write("<br>");
document.write("<br>");

// ******************Question # 05 ****************************
var number = +prompt("Enter a Number to print a Table:");

document.write(number + " * " + 1 + " = " + number*1);
document.write("<br>");
document.write(number + " * " + 2 + " = " + number*2);
document.write("<br>");
document.write(number + " * " + 3 + " = " + number*3);
document.write("<br>");
document.write(number + " * " + 4 + " = " + number*4);
document.write("<br>");
document.write(number + " * " + 5 + " = " + number*5);
document.write("<br>");
document.write(number + " * " + 6 + " = " + number*6);
document.write("<br>");
document.write(number + " * " + 7 + " = " + number*7);
document.write("<br>");
document.write(number + " * " + 8 + " = " + number*8);
document.write("<br>");
document.write(number + " * " + 9 + " = " + number*9);
document.write("<br>");
document.write(number + " * " + 10 + " = " + number*10);
document.write("<br>");
document.write("<br>");


// ******************Question # 06 ****************************
//a  &    c
var C = 25, F = 77;

//b
C = (F - 32) * 5 / 9;
document.write("Celcius = " + F + "Fo <br>" );

//d
F = (C * 9/5) +32;
document.write("Faranheit = " + C + "Co");


// ******************Question # 07 ****************************

//a  Price of item 1
var item1 = 650;

//b  Price of item 2
var item2 = 100;

//c Ordered Quantity of item 1
var quantity1 = 3;


//d Ordered Quantity of item 1
var quantity2 = 7;

//e Shipping charges
var shippingcharges = 100;

document.write("<h1> Shopping Cart </h1>");
document.write("Price of item 1 is " + item1);
document.write("<br> Quantity of item 1 is " + quantity1);
document.write("<br> Price of item 2 is " + item2);
document.write("<br> Quantity of item 2 is " + quantity2);
document.write("<br> Shipping Charges is " + shippingcharges);
var resultant = (item1 * quantity1) + (item2 * quantity2) + shippingcharges;
document.write("<br> The Cost of your order is " + resultant);


// ******************Question # 08 ****************************
var om = 804 , tm = 980 , per;
per = om/tm;
document.write("<h1> Mark Sheet </h1> <br> <br>");
document.write("<br>Total Marks : " + tm);
document.write("<br>Obtained Marks : " + om);
document.write("<br>Percentage : " + per + "%");

// ******************Question # 09 ****************************
var dollars = 10, riyals = 25 , pk = 104.8, pks = 28;
document.write("<h1> Currency in PKR </h1> <br> <br>");
var conversion = (dollars*pk)+(riyals*pks);
document.write(conversion);
document.write("<br>");


// ******************Question # 10 ****************************
var num = 2;
var equation = (((num + 5)*10)/2);
document.write(equation);
document.write("<br>");

