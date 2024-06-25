document.getElementById('title');   //It prints only the element in which given Id is defined
document.getElementsByClassName('heading');     //It gives a HTML COllection as an ouput
// document.getElementById('title').id;
// document.getElementById('title').className;
document.getElementById('title').getAttribute('id');
document.getElementById('title').getAttribute('class');
document.getElementById('title').setAttribute('class', 'test');
document.getElementById('title').setAttribute('class', 'test', 'heading');
const title = document.getElementById('title');
title.style.backgroundColor = 'green';
title.style.padding = "15px";
title.style.borderRadius = "5px";

title.innerText;    //It will print only the visible content.
title.textContent;  //It will print all text content either it is visible or not.
title.innerHTML;    //It gives the output as the text content as well as the tags which are defined inside a particular tag.

document.querySelector('h2');
document.querySelector('#title');
document.querySelector('.heading');
document.querySelector('input[type="password"]');

const myul = document.querySelector('ul');
myul.querySelector('li');

const turnGreen = myul.querySelector('li');
turnGreen.style.backgroundColor = 'green';
turnGreen.style.padding = "10px";
turnGreen.innerHTML;
turnGreen.innerHTML = "five";

const tempLiList = document.querySelectorAll('li'); //It prints a NodeList as it contains all elements according to the query input
tempLiList.style.color = 'green';   //It will give type error as tempLiList is a NodeList and Nodelist works as an array somehow 
tempLiList[0].style.color = 'green';    //It will change the color of first element of NodeList to Green

tempLiList.forEach((l) => {
    l.style.backgroundColor = 'red';
})

const tempClassList = document.getElementsByClassName('list-item');
const myConvertedArray = Array.from(tempClassList);
myConvertedArray.forEach((li) => {
    li.style.backgroundColor = 'orange';
})

const parent = document.querySelector('.parent');
console.log(parent);   
console.log(parent.children);   //it will give HTML Collection as an output
console.log(parent.children[1].innerHTML);

for(let i=0; i<parent.children.length; i++){
    console.log(parent.children[i].innerHTML);
}

parent.children[1].style.color = 'orange';
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const dayOne = document.querySelector('.day');
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

console.log("NODES: ", parent.childNodes);
