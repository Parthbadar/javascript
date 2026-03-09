// 1.If statement
console.log("before my if statement");
let age = 23;
if (age >= 18) {
    console.log("you are vote");
    let a=5;           //if statement cha madhe dusr pan karu saktu
    console.log(a*5);
}
if (age > 20) {       // ani apan kiti pan loop try karu saktu
    console.log("you are in 20s")
}
console.log("after my if statement");

// 5Q. practice Q -> Traffic light sysstem
let color = "red";
if (color === "red") {
    console.log("stop! light color is red");
}
if (color === "yellow") {
    console.log("slow down. light color is yellow");
}
if (color === "green") {
    console.log("Go. light color is green");
}

// 2.else if statement
let marks = 75;
if (marks >= 80) {
    console.log("A+");
}
else if (marks >= 60) {
    console.log("A");
}
else if (marks >= 40) {
    console.log("B");
}
else if (marks < 30) {
    console.log("Fail")
}

// 3.else statement
let colors = "blue";
if (colors === "red") {
    console.log("stop! light color is red");
}
else if (colors === "yellow") {
    console.log("slow down. light color is yellow");
}
else if (colors === "green") {
    console.log("Go. light color is green");
}
else {
    console.log("traffic light color is brokn ")
}

// 6Q. practice Q
let size = "XL";
if (size === "XL") {
    console.log("the price is Rs.250");
}
else if (size === "L") {
    console.log("the price is Rs.200");
}
else if (size === "M") {
    console.log("the price is Rs.100");
}
else {
    console.log("the price is Rs.50");
}

// 4.Nested if else 
let markss =  "45";
if (markss >= 33) {
    console.log("pass");
    if (markss >= 80) {
        console.log("Grade : o");
    }
    else {
        console.log("Grade : A"); 
    }
} 
else {
    console.log("better luck next time!");
}   