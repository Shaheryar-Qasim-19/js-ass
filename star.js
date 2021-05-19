// Note: Challenge is not included in Assignments.
document.writeln("<h1>Note: Challenge is not included in Assignments.</h1>");


for(var j = 0; j < 7 ; j++)
{
    for(var i = 7; i > j ; i--)
    {
        document.writeln("*");
    } 
    document.write("<br>");
}


// Write a program to create the following patterns in your browser. Take number of lines as an input.

// a. 
document.write("<hr>");
document.write("<br>");
document.write("<br>");
document.write("<h2>a</h1>");

for(var j = 0; j < 4 ; j++)
{
    for(var i = 0; i < 4 ; i++)
    {
        document.writeln("*");
    } 
    document.write("<br>");
}

// b. 
document.write("<hr>");
document.write("<br>");
document.write("<br>");
document.write("<h2>b</h1>");

for(var j = 1; j <= 5 ; j++)
{
    for(var i = 1; i <= j ; i++)
    {
        document.writeln("*");
    } 
    document.write("<br>");
}



// c. 
document.write("<hr>");
document.write("<br>");
document.write("<br>");
document.write("<h2>c</h1>");

for(var j = 0; j < 5 ; j++)
{
    for(var i = 5; i > j ; i--)
    {
        document.writeln("*");
    } 
    document.write("<br>");
}



// d. 
document.write("<hr>");
document.write("<br>");
document.write("<br>");
document.write("<h2>d</h1>");
for(var j = 1; j <= 10 ; j++)
{
    for(var i = 1; i <= j ; i++)
    {
        document.writeln("*");
    } 
    document.write("<br>");
}
for(var j = 0; j < 10 ; j++)
{
    for(var i = 10; i > j ; i--)
    {
        document.writeln("*");
    } 
    document.write("<br>");
}


// e. 
document.write("<hr>");
document.write("<br>");
document.write("<br>");
document.write("<h2>e</h1>");

for(var j = 0; j < 5 ; j++)
{
    
    for(var i = 0; i <= j ; i++)
    {
        
        document.writeln("*");
        
    } 
    document.write("<br>");
}