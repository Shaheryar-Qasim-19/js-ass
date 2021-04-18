// **********************Chapter 06 to 09**************************

// ***************Question 01****************************
document.write("sir is question ko check kar len theek kiya hy???<br>")
var a = 10;
document.write("<br> Result<br> The value of a is: " + a);
document.write("<br>.................................<br>")

document.write("<br>The value of ++a is:" + a);
document.write("<br>Now the value of a is:" + ++a);
document.write("<br><br<br><br>")

document.write("<br>The value of a++ is:" + a);
document.write("<br>Now the value of a is:" + a++);
document.write("<br><br><br><br>")

document.write("<br>The value of --a is:" + a);
document.write("<br>Now the value of a is:" + --a);
document.write("<br><br><br><br>")

document.write("<br>The value of a-- is:" + a);
document.write("<br>Now the value of a is:" + a--);
document.write("<br><br><br><br><hr>")

// Sir is question ko check kar len upar walay ko



// ***************Question 02************************
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//            1  -  0  +  1  +  1  
document.write("<br>a is : " + a + "<br> b is : " + b + "<br> result is : " + result);

// ***************Question 03************************
var name = prompt("Enter your name here!" );
alert("Hello! " + name + " nice to meet you");
document.write("<br><br><hr>");



// ***************Question 05************************
var Num = +prompt("Enter a Number to print a Table:");
var five = 5;
if(Num === +prompt())
{
    for(var a = 1; a<=10 ; a++){
    document.write(Num + " * " + a + " = " + Num*a);
    document.write("<br>");
    }
}
else
{
    for(var a = 1; a<=10 ; a++){
        document.write(five + " * " + a + " = " + five*a);
        document.write("<br>");
        }
}



// ***************Question 06************************
var eng, urd, math, tm, om, gtm, gom;
eng = +prompt("Enter your English obtained number");
urd = +prompt("Enter your Urdu obtained number");
math = +prompt("Enter your Math obtained number");

gom = eng + urd + math;
tm = 100;
gtm = tm + tm + tm;
var perEng = (eng/tm)*100;
var perUrd = (urd/tm)*100;
var perMat = (math/tm)*100;

var percent = (gom/gtm)*100;

document.write("<h4>Subject  Total Marks  Obtained Marks  Percentage</h4> <br> English \xa0&nbsp" + tm + " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  " + eng + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp " + perEng + "%");
document.write(" <br> Urdu \xa0&nbsp" + tm + " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  " + urd + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp " + perUrd + "%");
document.write(" <br> Math \xa0&nbsp" + tm + " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  " + math + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp " + perMat + "%");

