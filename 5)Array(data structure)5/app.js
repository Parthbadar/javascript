// let student1 = "aman";
// let student2 = "shradha";
// let student3 = "rajat";

let students = ["aman","shradha","rajat"];

//visualizing array
let nums =[2,4,5,6];
console.log(nums[2]);

//array are mutable
let fruits = ["mango","apple","litchi"];
console.log(fruits[0]="banana");
console.log(fruits.length); 

// array methods
//1.push
let cars = ["ovid","bmw","maruti","xuv"];
console.log(cars.push("toyota"));
console.log(cars);
//2.pop
console.log(cars.pop());
console.log(cars);
//3.unshift
let cars1 = ["ovid","bmw","maruti","xuv"];
console.log(cars1.unshift("toyota"));
console.log(cars1);
//4.shift
console.log(cars1.shift());
console.log(cars1);

//9Q.practice Qs
let start = ["january","july","march","august"];
console.log(start.shift());
console.log(start);
console.log(start.shift());
console.log(start);
console.log(start.unshift("june"));
console.log(start);
console.log(start.unshift("july"));
console.log(start);

//5.indexof
let primary = ["red","yellow","blue"];
console.log(primary.indexOf("yellow"));
console.log(primary.indexOf("green"));

//6.includes
console.log(primary.includes("red"));
console.log(primary.includes("green"));

//7.concatenate
let primary1 = ["red","yellow","blue"];
let secondary1 = ["orange","green","violet"];
let allcolor = primary1.concat(secondary1);
console.log(allcolor);

//8.reverse
console.log(primary.reverse());

//9.slice
let color = ["red","yellow","blue","orange","green","violet"];
console.log(color.slice());
console.log(color.slice(2));
console.log(color.slice(2,3));
console.log(color.slice(-2));

//10.splice
let colors = ["red","yellow","blue","orange","pink","white"];
console.log(colors.splice(4));
console.log(colors);
console.log(colors.splice(0,1));
console.log(colors);
console.log(colors.splice(0,1,"black","grey"));
console.log(colors);
console.log(colors.splice(1,0,"blue"));
console.log(colors);
console.log(colors.splice(1,1,"violet"));
console.log(colors);

//11.sort
let char = ['b','c','a','d'];
console.log(char.sort());

//array references , constant array, ani nested arrays notebook madhe ahe 

//11Q. practice Qs
let game = [['x','null','o'],['null','x','null'],['o','null','x']];
console.log(game);
console.log(game[0][1]='N');

// assigment Qs ahe 
let str=prompt("pleaseenterastring");
console.log(`originalstring=${str}`);
console.log(`stringwithoutspaces=${str.trim()}`);







