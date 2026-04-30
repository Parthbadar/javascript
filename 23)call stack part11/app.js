console.log("call stackkk");
// function one(){
//     return 1;
// }

// function two(){
//     return one()+one();
// }

// function three(){
//     let ans= two() + one();
//     console.log(ans);
// }

//  console.log(three());

console.log("Js is single Threaded");
//synchronous
// let a= 3;
// console.log(a);
// let b= 3;
// console.log(b);
// console.log(a+b);

// //asynchoronous
// setTimeout(()=>{
//     console.log("apna college");
// },2000);

// console.log("hellooo...");

console.log("callback Hell");
// h1 = document.querySelector("h1");

// function changecolor(color,delay,nextcolorchange){
//     setTimeout(() =>{
//         h1.style.color = color;
//         if (nextcolorchange) nextcolorchange();
//     },delay);
// }

// changecolor("red",1000,() =>{
//    changecolor("orange",1000,() =>{
//     changecolor("green",1000,() =>{
//       changecolor("yellow",1000,() =>{
    
// });
// });
// }); 
// });
// //callback nesting -> callback hell

console.log(" callback  hell (setting up for promices)");//callback hell asha comikede code la bachane ke lily promices chikna ye
// function savetoDb(data,success,failure){
//     let internetspeed = Math.floor(Math.random()*10) + 1;
//     if(internetspeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// savetoDb("apna college",()=>{
//      console.log("success :  your data was saved");
//      savetoDb("hello world" , ()=>{
//         console.log("success2 :  your data2 was saved");
//             savetoDb("parth" , ()=>{
//                     console.log("success3 :  your data3 was saved");
//                 },
//                 ()=>{
//                        console.log("failure3: weak connection data not saved");
//                      });
//     },
//       ()=>{
//            console.log("failure2: weak connection data not saved");
//           });
// },
//   ()=>{
//          console.log("failure: weak connection data not saved");
//       });

console.log("promises");
// function savetoDb(data){
//     return new Promise ((resolve,reject) =>{
//         let internetspeed = Math.floor(Math.random()*10) + 1;
//         if(internetspeed > 4) {
//              resolve("success : data was saved");
//         } else {
//            reject("failure : weak connection ");
//         }
//     });
    
// }
// console.log(savetoDb("apna college"));

console.log("then(),catch()");
// function savetoDb(data){
//     return new Promise ((resolve,reject) =>{
//         let internetspeed = Math.floor(Math.random()*10) + 1;
//         if(internetspeed > 4) {
//              resolve("success : data was saved");
//         } else {
//            reject("failure : weak connection ");
//         }
//     });
    
// }
// savetoDb("apna college")
//   .then((result)=>{                           //promise chaining use kel
//     console.log("data1 saved");
//     console.log("result of promise:",result);
//     return savetoDb("helloworld");
//   })
//   .then((result)=>{
//     console.log("data2 saved");
//     console.log("result of promise:",result);
//     return savetoDb("parth");
//   })
//   .then((result)=>{
//     console.log("data3 saved");
//     console.log("result of promise:",result);
//   })

//   .catch((error) =>{
//     console.log("promise rejected");
//     console.log("error of promise:",error);
//   });

console.log("refactoring old code");
 h1 = document.querySelector("h1");

function changecolor(color,delay){
    return new Promise ((resolve,reject)=>{
        setTimeout(() =>{
        h1.style.color = color;
        resolve("color changed");
        },delay);
    });
    
}

changecolor("red",1000)
  .then(()=>{
    console.log("red color was completed");
    return changecolor("orange",1000);
  })
  .then(()=>{
    console.log("orange color was completed");
    return changecolor("green",1000);
  })
  .then(()=>{
    console.log("green color was completed");
    return changecolor("blue",1000);
  })
  .then(()=>{
    console.log("blue color was completed");
    
  });