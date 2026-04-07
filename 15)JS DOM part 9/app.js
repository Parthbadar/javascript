// ha part getelementsbyclassname cha ahe 
// let smallimage = document.getElementsByClassName("oldImg");

// for(let i=0;i<=smallimage.length;i++) {
//     smallimage[i].src = "assets/spiderman_img.png" ;
//     console.log(`value of img no. ${i} is change`);
// }

console.log("querySelector cha part --------------------------------");
// console.dir(document.querySelector('p'));      // single p chaiye to ye querySelector

// console.dir(document.querySelector('#description'));

// console.dir(document.querySelector('.oldImg'));

// console.dir(document.querySelectorAll('p'));      // aru sare chaiye t ye querySelectorAll

// console.dir(document.querySelectorAll('div a'));

//setting content in object
console.log("  using properties and methods ------------------------------ "); // change in file (html,css) is know as manipulation
// let para = document.querySelector('p');
// console.dir(para);
// console.log(para.innerText = "hi, i am peter parker !");    //innertext madhe apn bold nahi karu sakt tya sathi innerhtml
// console.log(para.innerHTML = "hi, i am <b>peter parker </b>!");

// let headling = document.querySelector('h1');
// console.dir(headling);
// console.log(headling.innerHTML = "<u> Spider Man</u>");  

console.log(" Manipulating attributes ------------------------------ ");
// let img = document.querySelector('img');
// console.log(img);
//  // id value change keli tar mainid chi styling nahi lagnar
// console.log(img.getAttribute('id'));
// console.log(img.setAttribute('id','spidermanimg')); 
// console.log(img.getAttribute('id'));     
//  //src change kel 
// console.log(img.setAttribute('src','assets/creation_3.jpeg'));  
// //class change kela
// console.log(img.setAttribute('class','images'));
// console.log(img.getAttribute("class"));

console.log(" Manipulating style ------------------------------ ");
console.log(" 1. style property------------------------------ ");
// let heading1 = document.querySelector('h1');
// console.dir(heading1);
// console.log(heading1.style);          // styleing change kar sakthi ye
// console.log(heading1.style.backgroundColor='yellow');

// let links = document.querySelector(".box a");   //for madhe error yet ahe undastaing sathi ex. ase pan use karu sakto
// for(link of links){
//     link.style.color ="purple";
// }
// // for(let i=0;i< links.length; i++){
// //     links[i].style.color="red";
// // }

console.log("2. using classlist ------------------------------ ");
// let heading2 = document.querySelector('h1');
// //  Add() sathi
// console.log(heading2.classList.add('green'));    
// console.log(heading2.classList.add('underline'));
// //  remove sathi
// console.log(heading2.classList.remove('green'));
// //  contain sathi
// console.log(heading2.classList.contains('green'));   // green class nahi tyamuye false
// //  toggle sathi
// console.log(heading2.classList.toggle('green'));     // remove hoti tar ata add zali tya muye ata true 

// let box1 = document.querySelector('.box');
// console.log(box1.classList.add('yellowbg'));

console.log("Navigation ------------------------------ ");
// let h4 = document.querySelector('h4');
// console.log(h4.parentElement);        //parent ahe div
// console.log(h4.children);       //childern kahich nahi tar empty

// let ul = document.querySelector('ul');
// console.log(ul.children);  

// let img = document.querySelector('img');          //img cha sibling h1 ahe ani tyacha color change kela green
// console.log(img.previousElementSibling.style.color="green");

console.log("adding element                          ------------------------------ ");
//        create kele ata
let newp = document.querySelector('p');
console.dir(newp);
console.log(newp.innerText = "hi, i am a new box");
//1.     appendchild sathi
let box = document.querySelector('.box');  //newp add kela box madhe
console.log(box.appendChild(newp));
//2.   append 
console.log(newp.append("this is new text"));  // append ne newp madhe ch chage kel
console.log(newp.append("my name is parth")); 
// 3.      prepend
console.log(box.prepend(newp));    //  starting add karta he

//4.  inseradjacent
   // rahil ahe erron yet ahe button sathi tar nanter bagu note book madhe ahe sagl console madhe l

console.log("removing  element                          ------------------------------ ");
// console.log(box.removeChild(newp));
// console.log(newp.remove());    // same ch doni pan