// console.log("accssing json data");
// //1.JSON.parse
// let jsonres = '{"fact":"The oldest cat to give birth was Kitty who, at the age of 30, gave birth to two kittens. During her life, she gave birth to 218 kittens.","length":136}';

// let validres = JSON.parse(jsonres);
// console.log(validres.fact);

// //2.JSON.stringify
// let student = {
//     name : "shradha",
//     marks : 95,
// };
// console.log(JSON.stringify(student));

// our first request
console.log(" our first request");
// let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((res) =>{
//     return res.json();
//   })
//   .then((data) =>{
//     console.log("data1 =",data.fact);
//     return fetch(url);
//   })
//   .then((res) =>{
//     return res.json();
//   })
//   .then((data2) =>{
//     console.log("data2 =",data2.fact);
//     return fetch(url);
//   })
//   .catch((err)=>{
//     console.log("error -",err);
//   });

console.log("using fetch with async- await");
// let url = "https://catfact.ninja/fact";
// async function getfact() {
//   try{
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2.fact);
//   }
//   catch (e){
//     console.log("error", e);
//   }
//   console.log("byee");
// }
// console.log(getfact());

console.log("Axios");
// let btn = document.querySelector("button");

// btn.addEventListener("click",async() => {
//   let fact = await getfact();
//   console.log(fact);
//   let p = document.querySelector("#result");
//   p.innerText = fact;
// });


// let url = "https://catfact.ninja/fact";
// async function getfact() {
//   try{
//     let res = await axios.get(url);
//     return res.data.fact;
//   }
//   catch (e){
//     console.log("error", e);
//     return "no result found";
//   }
  
// }



console.log("Dog picture Api");

// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click",async() => {
//    let link = await getimage();
//    let img = document.querySelector("#result");
//    img.setAttribute("src", link);
//    console.log(link);
// });



// async function getimage() {
//   try{
//     let res = await axios.get(url2);
//     return res.data.message;
//   }
//   catch (e){
//     console.log("error", e);
//     return "/";
//   }
  
// }

// console.log("sending header api");

// const url = "https://icanhazdadjoke.com/";

// async function getjokes() {
//   try{
//     const config = {headers : {Accept :"application/json"}};
//     let res = await axios.get(url,config);
//     console.log(res.data);
//   }catch (err) {
//     console.log(err);
//   }
// }
// console.log(getjokes());

console.log("Activity using Query string bakii ahee");