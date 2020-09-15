//1
var mularr = [[[], [], [[], []], []], [], []];

//2
var mularray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// document.write(mularray);

var mularray = new Array();
for (var i = 0; i < 4; i++){
    for(var j = 0; j < 4; j++){
        document.write(mularray[i][j]);
    }
    document.write( " <br> ");
}
                // Not working

//3
for (var i = 1; i <= 10; i++){
    document.write(i + " <br> ");
}

//4
var mulnum = +prompt("Enter a number to show its multiplication table");
var mullen = +prompt("Enter length multiplication table");

for (var i = 1; i<mullen; i++){
    document.write(mulnum + " x " + i + " = " + mulnum * i +" <br> ");
}

//5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i<= fruits.length ; i++){
    document.write(fruits[i] + " <br> ");
}

for (var i = 0; i<= fruits.length; i++){
    document.write("Element at index " + i + " is " + fruits[i] + " <br> ");
}

//6
    //a
document.write(" <br> <h2> Counting: </h2>");
for (var i = 1; i<= 15; i++){
    document.write(i + ", ");
}
    //b
document.write(" <br> <h2> Reverse counting: </h2> ");
for (var i = 10; i>=1; i--){
    document.write(i + ", ");
}
    //c
document.write(" <br> <h2> Even: </h2> ");
for (var i = 0; i <= 10; i++){
    document.write(i * 2 + ", ");
}
    //d
document.write(" <br> <h2> Odd: </h2> ");
for (var i = 1; i <= 19; i++){
    document.write(i + ", ");
    i = i + 2;
}
    //e
document.write(" <br> <h2> Series: </h2> ");
for (var i = 1; i <= 10; i++){
    document.write(i * 2 + "k, ");
}

//7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var find = prompt("Welcome to Isa Bakery! What do you want to order Sir/ mam");
var offset = true;
for (var i = 0; i<= A.length; i++){
    if (find == A[i]){
        alert("Cookie is <b> available </b> at index " + i + " in our bakery");
        offset = false;
        break;
    }
}
if (offset == true){
    alert("We are sorry, " + find + " is <strong> not available </strong> in our bakery");
}


//8
var A = [24, 53, 78, 91, 12];
var lrgst = 0
document.write("Array items: " + A + " <br> ");
for (var i = 0; i<= A.length; i++){
    if(A[i] >= lrgst){
        lrgst = A[i]
    }
}
document.write("The largest number is " + lrgst + " <br> ");


//9
var A = [24, 53, 78, 91, 12];
var smlst = 1/0;
document.write(" <br> Array items: " + A + " <br> ");
for (var i = 0; i<= A.length; i++){
    if(A[i] <= smlst){
        smlst = A[i]
    }
}
document.write("The smallest number is " + smlst + " <br> ");


//10
for (var i = 1; i<=20; i++){
    document.write(i * 5 + ", ")
}

