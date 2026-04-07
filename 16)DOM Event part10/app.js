console.log("onclick  and onmouseenter");       //oncklick multipel value / function set ani karu sakt 1ch karu saktu
// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     btn.onclick = sayhello ;
//     btn.onmouseenter = function() {
//         console.log("you entered the button");
//     }
// }
// function sayhello(){
//     alert("hello");
// }

// Event listener -->  multipel value / function set karu saktu
console.log("Event listener");    
let btns1 = document.querySelectorAll("button");

for(btn1 of btns1){
    // btn1.onclick = sayhello1 ;  // ye as use nahi karu sakt onclick 1 alert holil. comment outch rahu de parmentn samja sathi lil ahe
    // btn1.onclick = sayname ;

    btn1.addEventListener("click" , sayhello1);
    btn1.addEventListener("click" , sayname);  // ye use karu saktu mutiple velaa as bag 

//  btn1.addEventListener("dblclick" ,function() {
//     console.log("you double click the button");// double click kel ki print hot types ahe eventlistener che search on mdn 
//  });

}
function sayhello1(){
    alert("hello");
}
function sayname(){
    alert("apna college");
}