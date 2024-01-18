// // console.log("hello");
// // console.dir("world");

// let span = document.createElement("span");
// span.innerHTML = "I have been inserted a span <b>by kishor </b>"  
// span.setAttribute("class", "class-span");
// document.querySelector(".container").append(span);




let div = document.createElement("div");
div.innerHTML = "I am div";
document.querySelector(".box").append(div);
let p = document.createElement("p");
p.innerHTML = " Hi i am para";
div.appendChild(p);

let span = document.createElement("span");
span.innerHTML = " Hi I am a span"

p.replaceWith(span);
// div.replaceWith(p);















// let div1 = document.createElement("id");
// div1.innerHTML = "I have insterted a id by kishor";
// div1.setAttribute("id", "createdid");
// document.querySelector(".container").prepend(div1);

// let div2 = document.createElement("id");
// div2.innerHTML = "HEY I AM NEW ID";
// div2.setAttribute("id", "newid");
// document.querySelector(".container").before(div2);

// let div3 = document.createElement("id");
// div3.innerHTML = "this is div3";
// div3.setAttribute("id", "ID");
// document.querySelector("#createdid").after(div3);



// // replaceWith :

// let div4 = document.createElement("div");
// div4.innerHTML = "div4";
// div4.setAttribute("div");
// let p = document.createElement("p");
// div4.appendChild(p);

// // newid.replacewith(div4);



