let newelement= document.createElement("h1");
console.dir(newelement);     
console.log(newelement.innerText =" hi what going on " );
console.dir(newelement);
// appendchild use   
let body = document.querySelector("body");
console.log(body.appendChild(newelement));
// example class box  add button
let btn  = document.createElement("button");
console.log(btn.innerText="click me  ");
// add now 
let box = document.querySelector(".box");
console.log(box.appendChild(btn));
// if (box) {
//     box.appendChild(btn)
//     console.log("button is connet ");
// }
// else{
//     console.log("button is not connet ");
// }
// new   is  only append this one add string , text , element 
newelement.append( " abhishek "); 
// prepand use 
let btn2  = document.createElement("button");
console.log(btn2.innerText="click me perpend ");
console.log (box.prepend(btn2));
// insert adjacent element is type 4
let btn3 = document.createElement("button");
console.log(btn3.innerText="select now ");
let btn4 = document.createElement("button");
console.log(btn4.innerText=" hello ");
let newp = document.querySelector("p");
console.log(newp.insertAdjacentElement("beforeend", btn3));
console.log(newp.insertAdjacentElement("afterbegin",btn2));
console.log(newp.insertAdjacentElement("beforebegin",btn));
console.log(newp.insertAdjacentElement("afterend",btn4));