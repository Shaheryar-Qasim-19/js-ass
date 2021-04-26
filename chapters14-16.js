// *************************Question_01*************************

// 1
var nul = [];
// 2
var nul = [""];
// 3
var nul = ["hello","world","programming","coding"];
// 4
var number = [1,2,3,4,5,6,7,8,9,0];
// 5
var boolean = [true,false,1,0];
// 6
var mixedArray = [1,2,"hello",true,false,0.25];
// 7
var qualification = ["SSC1", "HSC", "BCS", "BS"," BCOM"," MS", "M. Phil.", "PhD"];

document.write("Qualifications: <br><br>1)" + qualification[0] + "<br>2) " + qualification[1] + "<br>3) "+ qualification[2] + "<br>4) "+ qualification[3] + "<br>5) "+ qualification[4] + "<br>6) "+ qualification[5] + "<br>7) "+ qualification[6] + "<br>8) "+ qualification[7] )



// 8
var stdName = ["Ahsan ", "Ashir ", "Shabi "];
var scrStd = [320, 230, 480];
var total = 500;
var per = [(scrStd[0]/total)*100, (scrStd[1]/total)*100, (scrStd[2]/total)*100 ];
document.write("<br><br><br> <br>Score of "+ stdName[0] + "is " + scrStd[0] + ". Percentage: " + per[0]+"%");
document.write("<br>Score of "+ stdName[1] + "is " + scrStd[1] + ". Percentage: " + per[1]+"%");
document.write("<br>Score of "+ stdName[2] + "is " + scrStd[2] + ". Percentage: " + per[2]+"%");


document.write("<hr>")
// 9

var clrName = ["Red", "Green", "Blue"];
document.write(clrName);
// a
var input = prompt("What color you want to add to the begining:");
clrName.unshift(input);
document.write("<br>unshift updated : "+ clrName);
// b
var input = prompt("What color you want to add to the end:");
clrName.push(input);
document.write("<br>push updated : "+ clrName);
// c
var input1 = prompt("What 1st color you want to add to the start:");
var input2 = prompt("What 2nd color you want to add to the start:");
clrName.unshift(input1 , input2);
document.write("<br>unshift do add color updated : "+ clrName);
// d
clrName.shift();
document.write("<br>shift start deleted color updated : "+ clrName);
// e
clrName.pop();
document.write("<br>pop end deleted color updated : "+ clrName);
// f
var input3 = +prompt("which index he/she wants to add a color: range 1 to 5");
colorName = prompt("Color Name daaal");
clrName.splice(input3,0,colorName);
document.write("<br>"+clrName);
// g
var input4 = +prompt("which index he/she wants to delete a color: range 1 to 5");
// colorName = prompt("Color Name daaal");
clrName.splice(1,input4);
document.write("<br>"+clrName);



document.write("<hr>")


// 10
var scs = [230,153,478,615];
document.write(scs);
scs.sort()
document.write("<br>"+scs);

// 11

var cityName = ["Karachi","Lahore", "Islamabad", "Quetta","Peshawar"];
var selectedCities = [cityName[2],cityName[3]]
document.write("<br><br><br>Cities List:<br>"+cityName+"<br><br>Selected cities list:<br>"+selectedCities);

// 12
document.write("<br>")
var arr = ["This", "is", "my", "cat"];
document.write("<br>"+arr);


// 13
var dev = ["keyboard", "mouse", "printer", "monitor"];
document.write("<br>First in First out<br>Device:<br>Out:"+dev[0]+"<br>Out:"+dev[1]+"<br>Out:"+dev[2]+"<br>Out:"+dev[3]);

// 14
document.write("<br><br><br>Last in First Out<br>Device:<br>Out:"+dev[3]+"<br>Out:"+dev[2]+"<br>Out:"+dev[1]+"<br>Out:"+dev[0]);


// 15
var man = ["Apple", "Samsung", "Motorola", "Nokia","Sony","Hair"];
document.write("<h5>Drop Down List</h5> <a href='#'>Apple</a><br/><a href='#'>Samsung</a><br/><a href='#'>Motorola</a><br/><a href='#'>Nokia</a><br/><a href='#'>Sony</a><br/><a href='#'>Hair</a>")

