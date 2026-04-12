// let p = document.querySelector("p");

// p.addEventListener("click",function(){
//     console.log("para was clicked");
// });

// let box = document.querySelector(".box");

// box.addEventListener("mouseenter",function(){
//     console.log("mouse inside box");
// });                                      // var cha eventlis.. for element cha part ahe 


//this in eventlis.. cha part khalch
// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changecolor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }
// btn.addEventListener("click",changecolor);
// p.addEventListener("click",changecolor);
// h1.addEventListener("click",changecolor);
// h3.addEventListener("click",changecolor);

//keyboard eventsssssssss
let inp = document.querySelector("input");
//1. code samjya sathi
// // inp.addEventListener("keydown",function(event){
// //     console.log("key = ",event.key);
// //     console.log("code = ",event.code);
// //     console.log("key was pricess");
// // });

//2. code simple arrow ex. samjya sathi
inp.addEventListener("keydown",function(event){

    console.log("code = ",event.code);  //Arrowup(W) , Arrowdown(S) , Arrowleft(A) ,Arrowrigth(D)

    if(event.code == "keyr"){
        console.log("charater move up");
    }else  if(event.code == "KeyS"){
        console.log("charater move down");
    }else  if(event.code == "KeyA"){
        console.log("charater move left");
    }else  if(event.code == "KeyD"){
        console.log("charater move rigth");
    }
   
});

