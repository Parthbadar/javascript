// // loops
console.log("1.for loop");
// for(let i=1; i<=5; i++){
//     console.log(i);
// }

// for(let i=10; i>=1; i=i-3) {
//     console.log(i);
// }

// print all odd no.
console.log("odd number");
for(let i=1; i<=15; i=i+2){
   console.log(i);
 }

console.log("Backward");
for(let i=15; i>=1; i=i-2) {
    console.log(i);
}

//print all even no.
console.log("Even numbers")
for(let i=2; i<=10; i=i+2) {
    console.log(i);
}

//multiplication table 5
console.log("5 table");
let n = prompt("write your number");
n= parseInt(n);
for(let i=n; i<=n*10; i=i+n) {
    console.log(i);
}
// for(let i=5; i<=50; i=i+5) {
//     console.log(i);
// }

//Nested for loops
console.log("nested for loop");
for(let i=1; i<=3; i++) {
   console.log(`outer loop ${i}`);
   for(let j=1; j<=3; j++) {
    console.log(j);
}
}

// while loops
console.log("2.while loop");
let i=1;
while (i<=5){
    console.log(i);
    i++;
}

// game ahe fav movie cha 
const favmovie = "avatar";

let guess = prompt("guess my fav movie");

while((guess != favmovie) && (guess != "quit")){
    guess = prompt("wrong guess. pls try again");
}

if(guess == favmovie){
    console.log("congrats");
}else{
    console.log("quit");
}

// break statement
console.log("we use break at 3");
let p=1;
while(p<=5){
    if(p==3){
        break;
    }
    console.log(p);
    p++;
}

// in game use break statement
// const favmovie1 = "avatar";

// let guess1 = prompt("guess my fav movie");

// while(guess != favmovie1){
//     if(guess1 == "quit"){
//         console.log("you quit");
//         break;
//     }
//     guess1 = prompt("wrong guess. pls try again");
// }

// if(guess1 == favmovie){
//     console.log("congrats");
// }
