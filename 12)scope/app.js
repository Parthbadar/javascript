//1.function scope
let sum = 54; //global scope 

function calsum(a,b) {
    let sum = a+b; //function scope
    console.log(sum);
}
calsum(2,3);
 console.log(sum);

//2.block scope
for(let i=1; i<=5; i++){
   console.log(i);//block scope
}

// let age = 18;
// if(age<=18){
//     let str = "adult";
// }
// console.log(str); //not block scope this line ouside the {}

//3.lexical scope(baki ahe run nahi zala nanter karu)
// outerfunc ke variable innerfunction use kar sakta ye butt innerfunc ke variable outerrfunc use nahi kar sakta
function outerf(){
    let a = 3;
    let b = 4;
    function innerf(){
        console.log(a);

    }
   innerf();
}

//18Q. what will be the output
let greet = "hello";  //global

function changegreet() {
    let greet ="namaste";  //function scope
    console.log(greet);

    function innergreet() {
        console.log(greet);
    }
    innergreet();// lexical
}
console.log(greet);
changegreet();

//function expression
let sum1 = function(a,b){
    console.log(a+b); 
}
sum1(2,4);

// let hello = function(){
//     console.log("hello");
// }
// hello();

//higher order function
// 1.arguments sathi
function multiplegreet(func,count){        //higher order function ahe func loop madhe call age ani greet func chi passs kel ahe..
    for(let i=1;i<=count;i++){
        func();
    }
}
let greet1 = function(){
    console.log("hello");
}
multiplegreet(greet1,4);

//2.return fun
function oddeventest(request){
    if (request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }
    else if (request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    }else{
        console.log("wrong request");
    }
    
}
console.log(request="even");
let func = oddeventest(request);
func(4);

//Methods
const calc = {
    add  : function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    multi: function(a,b){
        return a*b;
    }
}
console.log(calc);
console.log(calc.add(2,4));
console.log(calc.sub(2,4));

//method shorthand
const calc1 = {
    add1 (a,b){
        return a+b;
    },
    sub1(a,b){
        return a-b;
    },
    multi1(a,b){
        return a*b;
    }
}
console.log(calc1);
console.log(calc1.add1(2,4));
console.log(calc1.sub1(2,4));

//Qs1.WriteaJavaScriptfunctionthatreturnsarrayelementslargerthananumber.assigment Q...
let arr=[8,9,10,1,2,3,4,5,6,7];
let num=5;
//elementslargerthananumbernum
function getElements(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
getElements(arr,num)


