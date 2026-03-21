let fruits = ["mango","apple","banana","litchi","orange"];
fruits.push("pinapple");

// for(let i=0; i<fruits.length; i++) {
//     console.log(i,fruits[i]);
// }

for(let n=fruits.length-1; n>=0; n--) {
    console.log(n,fruits[n]);
}

//nested loops with nested arrays
console.log("nested loops")
let heroes = [
    ["ironman","spiderman","thor"],
    ["superman","wonder woman","flash"]
];

for (let i=0; i<heroes.length; i++) {
    console.log(i,heroes[i],heroes[i].length);
    for(let j=0; j<heroes[i].length;j++) {
        console.log(`j=${j},${heroes[i][j]}`);
    }
}

// let student = [["aman",95],["shradha",94.4],["karan",100]];

// for (let i=0; i<=student.length;i++){
//     console.log(`info of stu #${i+1}`);
//     for(let j=0; j<student[i].length;j++){
//         console.log(student[i][j]);
//     }
// }

//for of loop
console.log("for of loop");
let fruits1 = ["mango","apple","banana","litchi","orange"];

for(fruit of fruits1){
    console.log(fruit);
}

for(char of "apnacollege"){
    console.log(char);
}

//nested for of loop
let heroes1 = [
    ["ironman","spiderman","thor"],
    ["superman","wonder woman","flash"]
];

for(list of heroes1){
      for(hero of list){
        console.log(hero);
      }
}
