
// 1
var a = parseInt(prompt("Enter a number: "));
document.write(" <br> Result <br>");
document.write("The value of a is: " + a + " <br> ");
document.write("''''''''''''''''''''''''''''''' <br> ");
document.write(" <br> The value of ++a is: " + ++a);
document.write(" <br> Now the value of a is: " + a + " <br> ");
document.write(" <br> The value of a++ is: " + a++);
document.write(" <br> Now the value of a is: " + a + " <br> ");
document.write(" <br> The value of --a is: " + --a);
document.write(" <br> Now the value of a is: " + a + " <br> ");
document.write(" <br> The value of a-- is: "+ a--);
document.write(" <br> Now the value of a is: " + a + " <br> ")


// 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write(" <br> Result of --a - --b + ++b + b-- : " + result)
//  --a                      => 1
//  --a - --b                => 1
//  --a - --b + ++b          => 2
//  --a - --b + ++b + b--    => 3


//3
var name = prompt("Your Name: ");
document.write(" <br> Welcome to TLS " + name + " <br> ");
 
//4

//5
var a = +prompt("Enter a number to have it's multiplication table: ")
for (var i = 1; i<= 10; i++){
    if (a == 0){
        document.write(" <br> 5 x " + i + " = " + 5 * i );
        }
    else{
        document.write(" <br> " + a + " x " + i + " = " + a * i);
    }
}


//6
var a =  prompt("Enter first subject name: ");
var b =  prompt("Enter 2nd subject name: ");
var c =  prompt("Enter 3rd subject name: ");
var totalMarksPerSubject = 100;
var oa = +prompt(" Enter marks obtained in " + a + ": ");
var ob = +prompt(" Enter marks obtained in " + b + ": ");
var oc = +prompt(" Enter marks obtained in " + c + ": ");
var commulativeTotalMarks    = 100 * 3;
var commulativeObtainedMarks = oa + ob + oc;
var commulativePercentage = (oa + ob + oc) / 3;

document.write("<table><tr><h1><td> Subject </td><td> Total Marks </td> <td> Obtained Marks </td> <td> Percentage </td></h1></tr> <tr> <td> " + a + " </td> <td> " + totalMarksPerSubject + " </td> <td> " + oa + " </td> <td> " + oa + "% </td> </tr> <tr> <td> " + b + " </td> <td> " + totalMarksPerSubject + " </td> <td> " + ob + " </td> <td> " + ob + "% </td> </tr> <tr> <td> " + c + " </td> <td> " + totalMarksPerSubject + " </td> <td> " + oc + " </td> <td> " + oc + "% </td> </tr> <tr> <td> </td> <td> " + commulativeTotalMarks + " </td> <td> " + commulativeObtainedMarks + " </td> <td> " + commulativePercentage + "% </td> </tr> </table>");
