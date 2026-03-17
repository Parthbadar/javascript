// Logical operator
// 1.AND (&&) operator    2exp madhl yek pan false asel tar answer false asel.
let marks1 = 90;

if (marks1 >= 33 && marks1 >= 80) {
    console.log("pass");
    console.log("A+");
}

// 2.OR (||) operator   2exp madhl yek pan true asel tar answer true asel.
let marks2 = 75;

if (marks2 >= 33 || marks2 >= 80) {
    console.log("pass");
    console.log("A+");
}

// 3.NOT (!)    
let marks3 = 75;

if (!(marks3 < 33 )) {
    console.log("pass");
    console.log("A+");
}

// combine all operator (combine kel tar left to right check hot )
let marks4 = 75;

if (marks4 >= 33 || marks4 <= 80 || !(false)) {   //not false/true asel or(||) sobat tar ans true asel 
    console.log("pass");
    
}

//Q6. practice Q
let str = "apple";

if(str[0] = "a" && str.length > 3){
    console.log("good string");
} else {
    console.log("not a good string");
}

//Switch statement
let color = "green";
switch (color) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow Down");
        break;    
    case "green":
        console.log("Go");
        break; 
    default:
        console.log("Broken light");       
}

//Q7. practice Qs (base on switch stt)
let day = "3";
switch (day) {
    case "1":
        console.log("monday");
        break;
    case "2":
        console.log("tuesday");
        break;
    case "3":
        console.log("wensday");
        break;
    case "4":
        console.log("thursday");
        break;
    case "5":
        console.log("friday");
        break;
    case "6":
        console.log("saturday");
        break;
    case "7":
        console.log("sunday");
        break; 
    default :
        console.log("wrong day");                           
}

// Alert and prompt

// alert("something is wrong !");
console.error("this is an error msg");
console.warn("this is a waring msg");

let firstname = prompt("enter your firstname");
let lastname = prompt("enter your lastname");
// console.log("wellcome",firstname, lastname,"!");
let msg = "wellcome" +firstname + " " + lastname + "!";
alert(msg);