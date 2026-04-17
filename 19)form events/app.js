//form eventtttttttttttttt
// let form = document.querySelector("form");

// form.addEventListener("submit" , function(){
//     event.preventDefault();    // action="/action"> ya page janar nahi
//     alert("form submitedd")
// });


//  extracting form data
// let form = document.querySelector("form");

// form.addEventListener("submit" , function(event){
//     event.preventDefault();    // action="/action"> ya page janar nahi
//     console.dir(form);

//     let user = this.elements[0]; // form.element   ye pan chalt
//     let pass =  this.elements[1];

//     // let user = document.querySelector("#user");  // .dir(form) kel tar document.querySelector nahi del tari chall
//     // let pass = document.querySelector("#pass");

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`hi${user.value} your password is set to be ${pass.value}`);
 
// });


// more events
// let form = document.querySelector("form");

// form.addEventListener("submit" , function(event){
//     event.preventDefault(); 
// });

// let user = document.querySelector("#user");

// user.addEventListener("change",function(){
//     console.log("change event");
//     console.log("final value = ", this.value);
// });

// user.addEventListener("input",function(){
//     console.log("input event");
//     console.log("final value = ", this.value);
// });

//assigment q
 let form = document.querySelector("form");

form.addEventListener("submit" , function(event){
    event.preventDefault(); 
});

let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    console.log(btn.style.backgroundColor = "green");
    

});