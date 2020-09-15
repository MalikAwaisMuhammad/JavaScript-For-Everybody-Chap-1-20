//1
var chr = prompt("Enter a character (number or string): ");
var asciiChr = chr.charCodeAt(0);
if (asciiChr >= 65 && asciiChr <= 90){
    alert("Character entered is a upper case letter")
}
else if (asciiChr >= 97 && asciiChr <= 122){
    alert("Character entered is a lower case letter")
}
else if (asciiChr >= 47 && asciiChr <= 57){
    alert("Character entered is a number")
}

//2
var a = +prompt("Enter a number: ");
var b = +prompt("Enter another Number: ");
if (a > b){
    alert(a + " is greater");
}
else if (b > a){
    alert(b + " is greater");
}
else if (a == b){
    alert("both are equal")
}

//3
var a = +prompt("Enter a number: ");
if (a > 0){
    alert("Positive number")
}
else if (a < 0){
    alert("Negative number")
}
else if (a == 0){
    alert("Zero")
}

//4
var a = prompt("Enter a single letter: ");
if (a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u'){
    alert("vowel entered");
}
else{
    alert(false);
}

//5
var pass = '12abc';
askpass = false
while (askpass == false){
    var askpass = prompt("Enter password: ");
    alert("Please enter your password");
}
if (askpass == pass){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect password");
}


//6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}

//7
var time = +prompt("Enter time in 2400 format: ");
if (time >= 0000 && time < 1200){
    alert("Good Morning!")
}
else if(time >= 1200 && time < 1700){
    alert("Good Afternoon!")
}
else if(time >= 1700 && time < 2100){
    alert("Good Evening!")
}
else if(time >= 2100 && time <= 2359){
    alert("Good Night!")
}
else{
    alert("Not a right format")
}