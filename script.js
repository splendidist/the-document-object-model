console.log("Hello-World!");

//Accessing Elements

console.log(document); //Output: html
console.dir(document); //Output: html properties

const body = document.querySelector("body");
console.log(body); //Output: body
console.dir(body); //Output: body properties

const h1 = document.querySelector("h1");
console.log(h1); //Output <h1>Title/h1>
console.dir(h1); //Output h1 properties

//Modifying Elements

//set the elements textContent property

h1.textContent = "The Document Object Model"; //Output: h1 changes on webpage

//update image path

const image = document.querySelector("img");
image.src = "./monet-painting.jpg"; //Output: image changes on webpage

//Adding Elements

//add a h2

const h2 = document.createElement("h2");

//select the section to add h2

const section = document.querySelector("Section");

//give h2 a value

h2.textContent = "Workshop";

//add h2 to section

section.appendChild(h2);

//Add a List

const ul = document.createElement("ul");
section.appendChild(ul);

const list1 = document.createElement("li");
const list2 = document.createElement("li");
const list3 = document.createElement("li");
const list4 = document.createElement("li");

list1.textContent = "this";
list2.textContent = "is";
list3.textContent = "a";
list4.textContent = "list";

ul.appendChild(list1);
ul.appendChild(list2);
ul.appendChild(list3);
ul.appendChild(list4);

//Removing Elements

// h1.remove(); Output: h1 is removed
