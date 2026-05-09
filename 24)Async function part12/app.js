console.log("async function" );
// async function  greet() {
//     // throw "404 page not found";
//     return "hello!";
// }
// greet()
//   .then((result) =>{
//     console.log("promise was resolved");
//     console.log("result was :", result);
//   })
//   .catch((err) =>{
//     console.log("promise was rejected with err:",err);
//   });

// let demo = async() =>{
//     return 5;
// };  
// console.log(demo());

console.log("await func");
// function getNum() {                           1.Example ahe
//   return new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         let num = Math.floor(Math.random()*10) + 1;
//         console.log(num);
//         resolve();
//     },1000);
//   });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//      getNum();
// }
// console.log(demo());



//change color vala code 1hle apan .then ani .catch ni kela hota ata await ne ajun small ani simple 
// h1 = document.querySelector("h1");            //2.example ahe

// function changecolor(color,delay){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() =>{
//         h1.style.color = color;
//         console.log(`color changed to ${color}`);
//         resolve("color changed");
//         },delay);
//     });
    
// }
// async function demo1() {
//     await changecolor("red",1000);
//     await changecolor("orange",1000);
//     await changecolor("green",1000);
//      changecolor("blue",1000);
// }
// console.log(demo1());



console.log("handling rejections with await");
h1 = document.querySelector("h1");

function changecolor(color,delay){
    return new Promise ((resolve,reject)=>{
        setTimeout(() =>{
            let num = Math.floor(Math.random()*5)+1;
            if(num > 3){
                reject("promies rejected");
            }
        h1.style.color = color;
        console.log(`color changed to ${color}`);
        resolve("color changed");
        },delay);
    });
    
}
async function demo1() {
    try{
        await changecolor("red",1000);
        await changecolor("orange",1000);
        await changecolor("green",1000);
        await changecolor("blue",1000);
    }catch (err){
        console.log("error catcgue");
        console.log(err);
    }
    let a= 5;
    console.log(a);
    console.log("new number",a+3);
    
}
console.log(demo1());


