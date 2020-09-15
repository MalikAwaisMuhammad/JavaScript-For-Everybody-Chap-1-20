//1
var city = prompt("Enter a city name: ");
if (city == "Karachi"){
    document.write("Welcome to City of lights");
}

//2
var gender = prompt("What's your gender? ", "My gender is: ");
if (gender == "male"){
    document.write("Good Morning Sir");
}
else{
    document.write("Good Morning Ma'am")
}

//3
var color = prompt("Road Traffic Signal Color? ", "either of Red, Yellow or Green");
if (color == "Red"){
    document.write("Must Stop");
}
else if (color == "Yellow"){
    document.write("Ready to move");
}
else if (color == "Green"){
    document.write("Move now");
}

//4
var rf = +prompt("Please tell the remaining fuel in your car", "write amount in liters");
if (rf < 0.25){
    document.write("Please refill the fuel in your car");
}


//5
    //a
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
    }

    //b
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
    }

    //c
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

    //d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
    }

    //e
if (true){
    alert("True");
    }
if (false){
    alert("False");
    }

    //f
if("car" < "cat"){
    alert("car is smaller than cat");
    }


// 6
var marksObtained = +prompt("Marks obtained: ", "Marks");
var totalMarks    = +prompt("Total Marks: ");
var percentage = marksObtained * 100 / totalMarks;
document.write("Total marks : " + totalMarks + " <br>");
document.write("Marks obtained : " + marksObtained + " <br> ");
document.write("Percentage : " + percentage + "% <br> " );
if (percentage >= 80){
    document.write("Grade : A-one <br> Remarks : Excellent" );
}
else if (percentage >= 70){
    document.write("Grade : A <br> Remarks : Good" );
}
else if (percentage >= 60){
    document.write("Grade : B <br> Remarks : You need to improve" );
}
else if (percentage < 60){
    document.write("Grade : Fail <br> Remarks : Sorry" );
}

//7
var sno = 5;
var guess = +prompt("Guess the secret Number: ");
if (guess === sno){
    alert("Bingo! Correct answer");
}
else if(guess === sno + 1 ){
    alert("Close enough to the correct answer");
}

//8
var num = +prompt("Enter a number: ");
if (num % 3 == 0 ){
    alert("number is divisible by 3")
}

//9
var num = +prompt("Enter a number: ");
if (num % 2 == 0){
    alert("Even Number");
}
else{
    alert("Odd Number");
}

//10
var T = +prompt("Enter a temperature: ");
if (T > 40){
    document.write("It is too hot outsite")
}
if (T > 30){
    document.write("The Weather today is Normal.")
}
if (T > 40){
    document.write("Today’s Weather is cool.")
}
if (T > 40){
    document.write("OMG! Today’s weather is so Cool.")
}

//11
var first = +prompt("Enter first num: ");
var sec   = +prompt("Enter second num: ");
var op    = prompt("Enter Operation to perform", " + - * / %");
if(op == '+'){
    document.write(first + sec);
}
if(op == '-'){
    document.write(first - sec);
}
if(op == '*'){
    document.write(first * sec);
}
if(op == '/'){
    document.write(first / sec);
}
if(op == '%'){
    document.write(first % sec);
}