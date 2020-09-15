//1
var students = [];

//2
var students = new Array()

//3
var names = ["Ali", "Mughal", "Awais", "Bilal"];

//4
var nums = [3, 312, 5434, 23];

//5
var boo = [true, false];

//6
var mixedArray = [73, "my name", false];

//7
var qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.write(" <h1> Qualifications: </h1> <br> ");
document.write(" <h2> 1) " + qual[0] + " <br> 2) " + qual[1] + " <br> 3) " + qual[2] + " <br> 4) " + qual[3] + " <br> 5) " + qual[4] + " <br> 6) " + qual[5] + " <br> 7) " + qual[6] + " <br> 8) " + qual[7]);


//8
var names  = ["Awais", "Malik", "Awan"];
var scores = [344, 342, 269];
var percent = [scores[0]*100 / 500, scores[1]*100 / 500, scores[2]*100 / 500];

document.write(" <br> Score of " + names[0] + " is " + scores[0] + ". Percentage: " + percent[0] + "%");
document.write(" <br> Score of " + names[1] + " is " + scores[1] + ". Percentage: " + percent[1] + "%");
document.write(" <br> Score of " + names[2] + " is " + scores[2] + ". Percentage: " + percent[2] + "%");


//9
    
var cnames = ["red", "blue", "green", "yellow", "brown", "white", "black"];
document.write(cnames + " <br> ");
    //a
var askbegin = prompt("What color you want to add to the beginning: ");
cnames.unshift(askbegin);
document.write(cnames + " <br> ");
    //b
var askend = prompt("what color you want to add at the end: ");
cnames.push(askend);
document.write(cnames + " <br> ");
    //c
var ask2begin1 = prompt("Enter a color to add in the begin: ");
cnames.unshift(ask2begin1);
var ask2begin2 = prompt("Enter another color to add in the beginning: ");
cnames.unshift(ask2begin2);
document.write(cnames + " <br> ");
    //d
cnames.shift();
document.write(cnames + " <br> ");
    //e
cnames.pop();
document.write(cnames + " <br> ");
    //f
var askpos = prompt("At which index you want to add a color: ");
var askclr = prompt("what color you want to add: ");
//cnames = [ 'a', 'b', 'c', 'd', 'e', 'f']
cnames.splice(askpos, 0, askclr)
document.write(cnames + " <br> ")
    //g
var askind = prompt("At which index you want to delete a color: ");
var asknum = prompt("How many colors you want to delete: ");
cnames = [ 'a', 'b', 'c', 'd', 'e', 'f']
cnames.slice(2, 2)
document.write(cnames + " <br> ");   // not done

//10
var stScores = [320, 230, 480, 120];
document.write("Scores of Students: " + stScores + " <br> ");
stScores.sort();
document.write("Ordered Scores of Students: " + stScores);

//11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.splice(2,3);
document.write(selectedCities);

//12
var arr = ["This", " is", " my", " cat"];
var jn = arr.join("");
document.write("Array: " + arr + " <br> ");
document.write("String: " + jn + " <br> ");

//13
var devices = new Array();
devices.push('keyboard');
devices.push('mouse');
devices.push('printer');
devices.push('monitor');
document.write("Devices: " + devices + " <br> ");

document.write("Out: " + devices.shift() + " <br> ");
document.write("Out: " + devices.shift() + " <br> ");
document.write("Out: " + devices.shift() + " <br> ");
document.write("Out: " + devices.shift() + " <br> ");


//14
var devices = new Array();
devices.push('keyboard');
devices.push('mouse');
devices.push('printer');
devices.push('monitor');
document.write("Devices: " + devices + " <br> ");

document.write("Out: " + devices.pop() + " <br> ");
document.write("Out: " + devices.pop() + " <br> ");
document.write("Out: " + devices.pop() + " <br> ");
document.write("Out: " + devices.pop() + " <br> ");


//15
var mobile = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<form><label>mobile:</label><select><option>" + mobile[0] +"</option><option>" + mobile[1] +"</option><option>" + mobile[2] +"</option><option>" + mobile[3] +"</option><option>" + mobile[4] +"</option><option>" + mobile[5] +"</option></select></form>");
