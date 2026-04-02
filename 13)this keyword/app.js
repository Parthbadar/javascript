const student = {
    name:"parth",
    age:19,
    eng:89,
    math:90,
    marathi:99,
    getavg(){
        let avg=(this.eng+ this.math + this.marathi)/3;
        console.log(`${this.name} got avg marks ${avg}`);
    }
    
}
console.log(student.getavg());

//try and catch
console.log("try and catch");
console.log("hello");
console.log("hello");
try{
    console.log(a);
}catch(err){
    console.log("caugth an error ..a is not define");
    console.log(err);
}
console.log("hello");
console.log("hello");

//arrow function
console.log(" arrow function");
const sum = (a,b) =>{
    console.log(a+b);
};
sum(2,3);

const cube = (n) =>{
    return n*n*n;
};
cube(3);

const pow = (a,b) =>{
    console.log( a**b);
};
pow(3,4)

//implicit return in arrow function
console.log("implicit return in arrow function");
const mul = (a,b) =>(a*b);
console.log(mul(3,2));

const cube1 = (n) => n*n*n;
console.log(cube(3));

//set timeout
console.log("set timeout------------------------------------------------------------------------------");
console.log("hello");

// setTimeout(() => {
//     console.log("apna college");
// }, 4000);

console.log("well cometo ");
console.log("parthhhhhhhhhhhhhhhh");

//set interval
console.log("set interva----------------------------------------------------------l");

let id=setInterval(() => {
    console.log("apna college");
}, 2000);
console.log(id);
clearInterval(id)  // apna college print karana ban karditya

let id2=setInterval(() => {
    console.log("hello wordle");
}, 3000);
console.log(id2);
clearInterval(id2) // stop karnya sathi nanter comment karun bag 2s nanter hello w. print holil infint time

//this with arrow function ha point baki ahe 

//19Q
console.log("19Q practice Q----------------------------------------------------------l");
const sur = (n) => n*n;
console.log(sur(3));

let id3=setInterval(() => {
    console.log("hello world");
}, 2000);
setTimeout(() =>{
         clearInterval(id);
         console.log("clear interval run");
},10000);


//
console.log("assigment 1Q----------------------------------------------------------l");
const arrayAverage=(arr)=>{
    let total=0;
    for(let number of arr){
        total+=number;
    }
    return total/arr.length;
};
let arr=[1,2,3,4,5,6];
console.log(arrayAverage(arr));