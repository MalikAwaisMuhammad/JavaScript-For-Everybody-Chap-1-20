// 1
var one = prompt("Enter 1st number: ");
var two = prompt("Enter 2nd number: ");
var total = parseInt(one) + parseInt(two);
document.write("<br>");
document.write("Sum of "+ one + " and " + two + " is " + total);

//2
var total = parseInt(one) - parseInt(two);
document.write("<br>");
document.write("Subraction of "+ one + " and " + two + " is " + total);


var total = parseInt(one) * parseInt(two);
document.write("<br>");
document.write("Multiplication of "+ one + " and " + two + " is " + total);


var total = parseInt(one) / parseInt(two);
document.write("<br>");
document.write("Division of "+ one + " and " + two + " is " + total);

var total = parseInt(one) % parseInt(two);
document.write("<br>");
document.write("Modulas of "+ one + " and " + two + " is " + total);

// 3

var dec;
document.write("Value after variable declaration is: ??")
dec = 5;
document.write("<br>");
document.write("Initial Value: " + dec);
dec += 1;
document.write("<br>");
document.write("Value after increment is: " + dec);
dec = dec + 7;
document.write("<br>");
document.write("Value after addition is: " + dec);
dec -= 1;
document.write("<br>");
document.write("Value after decrement is: " + dec);
document.write("<br>");
document.write("Remainder after dividing by 3 is: " + dec % 3);
document.write("<br>");
document.write("The remainder is: 0");
document.write("<br>");


// 4

var ticketPrice = 600;
var numtickets = 5;
document.write("<br>");
document.write("Total cost to buy " + numtickets + " tickets is " + (ticketPrice * numtickets) + " PKR");

//5
document.write("<br>");
document.write("Table of 6")
document.write("<br>");
document.write(6 + " x "+ 1 + " = " + 6 * 1);
document.write("<br>");
document.write(6 + "  "+ 2 + " = " + 6 * 2);
document.write("<br>");
document.write(6 + " x* "+ 3 + " = " + 6 * 3);
document.write("<br>");
document.write(6 + " x "+ 4 + " = " + 6 * 4);
document.write("<br>");
document.write(6 + " x "+ 5 + " = " + 6 * 5);
document.write("<br>");
document.write(6 + " x "+ 6 + " = " + 6 * 6);
document.write("<br>");
document.write(6 + " x "+ 7 + " = " + 6 * 7);
document.write("<br>");
document.write(6 + " x "+ 8 + " = " + 6 * 8);
document.write("<br>");
document.write(6 + " x "+ 9 + " = " + 6 * 9);
document.write("<br>");
document.write(6 + " x "+ 10 + " = " + 6 * 10);


//6
document.write("<br>");
var Cinput = prompt("Enter a temperature in Celcius: ")
F = (Cinput * 9 / 5) + 32;
document.write("<br>");
document.write(Cinput + "&degC is " + F +"&degF")
document.write("<br>");
var Finput = prompt("Enter a temperature in Fahrenheit: ")
C = (Finput - 32) * 5/9;
document.write("<br>");
document.write(Finput + "&degF is " + C +"&degC")
document.write("<br>");

//7
document.write(" <br> ");
var item1p = 650;
var item2p = 100;
var item1q = 3;
var item2q = 7;
var shippingCharges = 100;
document.write(" <br> ");
document.write("<h1> Shopping Cart </h1>");
document.write("<br>");
document.write("<br>");
document.write("Price of item 1 is " + item1p + " <br> ");
document.write("Quantity of item 1 is " + item1q + " <br> ");
document.write("Price of item 2 is " + item2p + " <br> ");
document.write("Quantity of item 2 is " + item2q + " <br> ");
document.write("Shipping Charges " + 100 + " <br> ");
document.write("Total cost of your order is " + (item1p * item1q) + (item2p * item2q) + " <br> ");

//8

var tmarks;
var omarks;

tmarks = parseInt(prompt("Total Marks: "));
omarks = parseInt(prompt("Marks Obtained"));
var percentage = omarks * 100 / tmarks;
document.write("Total Marks: " + tmarks + " <br> ");
document.write("Obtained Marks: " + omarks + " <br> ");
document.write("Percentage: " + percentage + " <br> ");


//9

var usd = 10;
var srl = 25;

var exchange = (10 * 104.80) + (25 * 28);
document.write(" <br> Total Currency in PKR: " + exchange + " <br> ")

//10
var a = 4;
a = a + 5 * 10 / 2;

//11
var cyear = parseInt(prompt("Current year: "));
var byear = parseInt(prompt("Birth year: "));
document.write(" <br> Current Year: " + cyear);
document.write(" <br> Birth Year: " + byear);
var age = cyear - byear;
document.write(" <br> You are either " + age + " or " + (age - 1) + " years old <br> ");

//12
var r = prompt("Enter the radius: ");
var C = 2 * 3.142 * r;
var a = 3.142 * r * r;
document.write(" <br> Radius of a circle: " + r);
document.write(" <br> The circumferernce is: " + C);
document.write(" <br> The area is: " + a + " <br> ");

//13
var fsnack = prompt(" Favourite Snack: ");
var cage   = prompt(" Current age: ");
var mage   = prompt(" Estimated Maximum Age");
var estamntperday = 3;
var totaleat = ((mage*356) - (cage*356)) * estamntperday;
document.write(" <br> Favourite Snack: " + fsnack);
document.write(" <br> You will need " + totaleat + " to last you until the ripe old age of " + mage + " <br> ")

