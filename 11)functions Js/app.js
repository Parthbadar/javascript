function hello() {
    console.log("hello parth");
}
hello();

function print1to5() {
    for(let i=0;i<=5;i++){
        console.log(i);
    }
}
print1to5();

function isadult() {
    let age = 13;
    if(age>=18){
        console.log("adult");
    }else{
        console.log("is not adult");
    }
}
isadult();

//13Q. practice
function printpoem() {
    console.log("twinkle twinkle little star");
}
printpoem();

//14Q
function rolldices() {
    let rand = Math.floor(Math.random()*6)+1;
    console.log(rand);
}
rolldices();

//functions with arguments
console.log("fun with argument");
function printinfo(name,age) {
    console.log(`${name} age is ${age}`);
}
printinfo("parth",19);

function sum(a,b) {
    console.log(a+b);
}
sum(2,4);

//Q15. avg of 3 numbers
console.log("avg of 3 num.");
function calcavg(a,b,c) {
    let avg = a+b+c/3;
    console.log(avg);
}
calcavg(2,4,6);

//Q16. multi. table any number
console.log("table print");
function printtable(n) {
    for(let i=n;i<=n*10;i=i+n){
        console.log(i);
    }
    
}
printtable(3);

//return keyword
console.log("return keyword");
function sum1(a,b) {
    return a+b;
}
console.log(sum1(2,4));
console.log(sum1(sum1(2,3),4));

function isadult(age11) {
    
    if(age11>=18){
        return"adult";
    }else{
        return"is not adult";
    }
    console.log(" hello"); // print nahi honga return keyword ki niche ahe is liya
}
console.log(isadult(15));

//Q16. return the sum of 1 to n numbers
console.log("Q16. return the sum of 1 to n numbers");
function getsum(n){
    let sum2=0;
    for(let i=1;i<=n;i++){
        sum2+=i;
    }
    return sum2;
}
console.log(getsum(10));  // 10 parnt chi sum yeli ata
console.log(getsum(5));
console.log(getsum(12));

//Q17.return the concatenation of all string in array
console.log("Q17.return the concatenation of all string in array");
let str = ["hi","hello","bye"];

function conct(str){
    let result ="";
    for(let i=0;i<str.length;i++){
        result +=str[i];
    }
    return result;
}
console.log(conct(str));