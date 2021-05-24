// // Question No 01*************************************
// var multiArray = [[],[],[]]
// alert(multiArray);

// // Question No 02*************************************
// var multiArr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// console.log(multiArr[0][0],multiArr[0][1],multiArr[0][2],multiArr[0][3]);
// console.log(multiArr[1][0],multiArr[1][1],multiArr[1][2],multiArr[1][3]);
// console.log(multiArr[2][0],multiArr[2][1],multiArr[2][2],multiArr[2][3]);

// // Question No 03*************************************
// var arr = []
// var j=0;
// for(var i = 1 ; i<=10 ; i++){
//     arr[j] = arr.push(i);
//     console.log(arr[j])
//     j++;
// }
// console.log(arr)


// for (var i = 1 ; i<=10 ; i++){
//     console.log(i);
// }


// // Question No 04*************************************
// var mul = +prompt("Enter a number");
// var len = +prompt("Enter a length");
// var res;

// for(var i = 1 ; i<=len ; i++){
//      res = mul*i;
//     console.log(mul + " * " + i + " = " + res);
// }


// // Question No 05*************************************

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(var i=0; i<fruits.length;i++){
//     console.log("Element at index" + i + " is " + fruits[i]);
// }

// // Question No 06*************************************
// // a   Counting.........
// var i;
// for(i=1; i<=15; i++){
//     console.log(i);
// }

// // b   reverse counting.........
// var r;
// for(r=10; r>=1; r--){
//     console.log(r);
// }

// // c   even counting.........
// var e;
// for(e=0; e<=20; e++){
//     if(e%2===0){
//     console.log(e);}
// }


// // d   odd counting.........
// var o;
// for(o=0; o<=20; o++){
//     if(o%2!==0){
//     console.log(o);}
// }

// // e   series counting.........
// var o;
// for(o=2; o<=20; o+=2){
    
//     console.log(o+"k");
// }


// // Question No 07*************************************
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to ABC bakery, What do you want to order sir/ma'am?");
// var i;
// for(i=0 ; i<=A.length;i++){
//     if(A[i]===search){
//         console.log(search + " is available at index " + i + " in our bakery");
//     break;
//     }

//     else{
//     console.log("We are sorry. " + search + " is not available in our bakery");
//         break;
//     }
// }


// // Question No 08*************************************
// var A = [24, 53, 78, 91, 12]
// // var i,largest;
// var largest = [A[0]];

// for(i=0;i<A.length;i++){
//     if(largest < A[i]){
//         largest=A[i];
//     }
// }
// console.log("Array items " + A)
// console.log("The largest number is "+largest);

// var check = Math.max.apply(Math,A);
// console.log(check);

// // Question No 09*************************************
// var A = [24, 53, 78, 91, 12]

// var small = [A[0]];

// for(i=0;i<A.length;i++){
//     if(small > A[i]){
//         small=A[i];
//     }
// }
// console.log("Array items " + A)
// console.log("The smallest number is "+small);

// var check = Math.min.apply(Math,A);
// console.log(check);


// Question No 10*************************************
var i = 5 ,j = 0;

var arr=[];
for(i; i<=100; i=i+5){
    arr[j] = arr.push(i)
    // j++;
}
console.log(arr+",");



