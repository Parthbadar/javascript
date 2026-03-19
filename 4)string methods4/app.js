// 2.str.strim()
// let msg = "   hello   ";

let password = prompt("set your password");
let newpass = password.trim();
console.log(newpass);

// 3. uppercase and lowercase
let msg1 = "error";

console.log(msg1.toUpperCase());
console.log(msg1.toLowerCase());

//4.string method with arguments stringName.method(arg) madhe : indexof
let msg2 ="ILovecoding"  
// console madhe msg type kar mg >msg.indexof ("Love")
                            //   <. 1

//5. method chaining
let msg = "     hello     ";
// let newmsg = msg.trim();
// console.log("after trim :", newmsg);
// newmsg = newmsg.toUpperCase();
// console.log("after uppercase :",newmsg);
let newmsg = msg.trim().toUpperCase();    // chaining
console.log(newmsg);

//6.slice
let parth = "apnacollege";
console.log(parth.slice(1,4));
console.log(parth.slice(4));
console.log(parth.slice(-2));  //11-2 = 9

//7.replace and repeat notebook madhe ahe 

//Q8. practice Qs

let msg3 = "hello!";    // chaining
console.log(msg3.trim().toUpperCase());
