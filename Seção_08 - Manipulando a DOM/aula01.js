let visu = document.getElementsByTagName("body");

let ancora = document.querySelector('.link');

let titulo = document.querySelector('h1');

/*console.log(ancora);
console.log(ancora.innerText);
console.log(ancora.parentNode);
console.log(ancora.parentNode.parentNode);
console.log(ancora.parentNode.parentNode.parentNode);

console.log(titulo.childNodes);*/
console.log(ancora.parentNode.parentNode.firstChild.nextSibling);
console.log(ancora.parentNode.parentNode.firstChild.nextSibling.nextSibling);

console.log("next next = " + ancora.parentNode.parentNode.firstChild.nextSibling.nextSibling);
console.log("next previous = " + ancora.parentNode.parentNode.firstChild.nextSibling.nextSibling.previousSibling);
console.log(ancora.parentNode.parentNode.firstChild.nextSibling.nextSibling.firstChild.nextSibling);


