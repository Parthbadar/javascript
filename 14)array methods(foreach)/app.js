let arr = [1,2,3,4,5];

// function print (el){
//     console.log(el);
// }
// arr.forEach(print)

//oR
arr.forEach (function(el){
    console.log(el);
});

arr.forEach ((el)=>{         //arrow function nii
    console.log(el);
});

//object sathi pan foreach use karu saktu
const arr1 = [
    {
        name : "aman",
        grade : "A+",
        city : "Delhi"
    },
    {
        name : "parth",
        grade : "A",
        city : "pune"
    },
    {
        name : "kaka",
        grade : "o",
        city : "mumbai"
    }
];
arr1.forEach((student)=>{
    console.log(student.grade);
});

//2.Mappppppppppppp
console.log("mappppppppppppp------------------------------------------");
let num = [1,2,3,4];

let double = num.map(function(el){
    return el*2;
});
console.log(double);

const students = [
    {
        name : "aman",
        mark : 93
        
    },
    {
        name : "parth",
        mark : 94
    },
    {
        name : "kaka",
        mark : 95
    }
];
let gpa = students.map((el)=>{
   return el.mark/10;
});
console.log(gpa);

//3.filter
console.log("filter------------------------------------------");
let nums = [1,2,3,4,5,9,6,7,11,21];

let ans = nums.filter((el)=>{
    return el%2 == 0;  //even -> true
});
console.log(ans);

//4.every
console.log("every------------------------------------------");
let n=[2,4,6].every((el) => (el%2 == 0));
let n2=[2,4,6,1].every((el) => (el%2 == 0));
let n3=[3,5].every((el) => (el%2 != 0));
let n4=[3,5,2].every((el) => (el%2 != 0));

console.log(n,n2,n3,n4);     // 1 ka ch line madhe kel ans

//5.some
console.log("some------------------------------------------");
let n1=[2,4,6].some((el) => (el%2 == 0));
let n22=[2,4,6,1].some((el) => (el%2 == 0));
let n33=[3,5].some((el) => (el%2 != 0));
let n44=[3,5,2].some((el) => (el%2 != 0));

console.log(n,n22,n33,n44);     // 1 ka ch line madhe kel ans

//6.reduces
console.log("reduces------------------------------------------");
let nums1 = [1,2,3,4];
let finalval = nums1.reduce((res,el)=>(res+el));
console.log(finalval);

//finding maximum in an array
let num2 = [2,4,3,5,6,7,8,9];
// let max = -1;

// for(let i=0;i<=num2.length;i++){              // method for loops to find out max no. in array
//     if(max<num2[i]){
//         max=num2[i]
//     }
// }
// console.log(max);

let result = num2.reduce((max,el)=>{
    if(el>max){
        return el;
    }else{
        return max;
    }
});
console.log(result);

//Q12.(Q1 check multiple of 10 in array)
console.log("Q12.(Q1 check multiple of 10 in array)");
let arr2 = [10,20,30,40];

let ans1 = arr2.every((el)=> el % 10 == 0);

console.log(ans1);

// (Q2 craate a function to find min no. in array)
let num3 = [10,20,30,40,5];

function getmin(num3){
    let min = num3.reduce((min,el)=>{
        if(min<el){
            return min;
        }else{
            return el;
        }
    });
     return min;
}
console.log(getmin(num3));

//default parameter
console.log("default parameter---------------------------------------------");
function sum (a,b=3){           //sum (a=3,b) not valid staring la ch pahije default parameter
    return a+b;
}
sum(2);  
console.log(sum(2));

//spread
console.log("spread-----------------");
let arr4 = [1,4,3,6,2];
console.log(Math.min(...arr4));
console.log(...arr4);

//spread with array literals
let arr5 = [1,4,3,6,2];
let newarr = [...arr5];
console.log(newarr);

let chars = [..."hello"];
console.log(chars);

let odd = [1,3,5,7];
let even = [2,4,6,8];
let nums6 = [...even,...odd];
console.log(nums6);

//spread with object literals
let data = {
    email : "parthbadar@gmail.com",
    password : "abcd",
};
let datacopy = {...data,id:123,country:"ind"};
console.log(datacopy);

let arr6 = [1,4,3,6,2];  //val
let obj1 = {...arr6} // obj = key:value
console.log(obj1);

//rest
console.log("rest-----------------");

function sum(...args){
    return args.reduce((sum,el) => sum + el);
}
console.log(sum( 1,2,3,3));


function min(msg,...args){
    console.log(msg);
    return args.reduce((min,el)=>{
        if(min< el){
            return min;
        }else {
            return el;
        }
    });
}
console.log(min( "parth",2,3,-20,3));

//destructuring
console.log("destructuring-----------------");
let names = ["tony" , "bruce" , "steve" , "peter" , "abc" , "xyz"];
// let winner = names[0];
// let runerup = names[1];
// let secrunerup = names[2];
let [winner,runerup,...others] = names;
console.log(winner,runerup,...others);

//object sathi
const student2 = {
    name : "parth",
    class : 9,
    age : 14,
    sub : ["hindi","english","math"],
    username : "parth@123",
    password : "abcd"
};
const {username:user,password:pass,city="mumbai"}= student2
console.log(user);
console.log(pass);
console.log(city);

//assginment Q2,
let numbers=[2,4,6,8,-2,-4]; 
console.log(numbers.map((number)=>number+5));