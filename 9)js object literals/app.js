// object literals
const student = {
    name : "parth",
    age : "20",
    marks : "94.4",
    city : "mumbai"
} ;
console.log(student);

const item = {
    price : 100.99,
    discount : 50,
    color : ["red","pinnnk"]
};
console.log(item);

//thread / twitter post
const post = {
    username : "@parthbadar",
    contents : "this is my #firstpost",
    likes : 150,
    repost : 5,
    tags : ["@apnacollege","@delta"]

};
console.log(post);

// Get value 
let student1 = {
    name1 : "parth",
    marks1 : "90"
}

console.log(student1["name1"]);
console.log(student1.name1);

//Add / update value
const student2 = {
    name : "parth",
    age : "20",
    marks : "94.4",
    city : "delhi"
} ;
console.log(student2.city="mumbai"); //change city delhi to mumbai
console.log(student2.gender="male");  // add gender
console.log(student2.marks=[99,87,76]); //array pan creat karu saktu
console.log(delete student2.age);   //delete pan karu saktu
console.log(student2);

//nested object
console.log("Nested object----------------------------------");
const classinfo = {
    aman:{
        grade : "A+",
        city : "Delhi"
    },
    parth:{
         grade : "A",
        city : "pune"
    },
    kaka:{
         grade : "o",
        city : "mumbai"
    }
};
console.log(classinfo.aman);
console.log(classinfo.parth);
console.log(classinfo.parth.city);
console.log(classinfo.parth.city="nashik");
console.log(classinfo);

//array of objects
console.log("Nested object--------------------------------");
const classinfo1 = [
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
console.log(classinfo1[0]);
console.log(classinfo1[1].name);
console.log(classinfo1[1].city);
console.log(classinfo1[1].city="nashik");
console.log(classinfo1);

//math object
console.log("math object--------------------");
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-12));
console.log(Math.pow(2,5));
console.log(Math.floor(5.56));
console.log(Math.floor(5.566));
console.log(Math.random());

//random integers
console.log("random integers---------------------------------------------------");
let random = Math.floor(Math.random()*10)+1;
console.log(random);

//12Q. practice
console.log("12Q. practice-------------------------------------------------------------------");
//genrate a random no. between 1 to 100
let random1 = Math.floor(Math.random()*100)+1;
console.log(random1);
//genrate a random no. between 1 to 5
let random3 = Math.floor(Math.random()*5)+1;
console.log(random3);
//genrate a random no. between 21 to 25             
let random2 = Math.floor(Math.random()*5)+21;
console.log(random2);
