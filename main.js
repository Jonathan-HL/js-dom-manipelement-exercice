// Partie 1
// 1
let exo1 = document.querySelector("h1");
exo1.innerHTML = "Les attributs class et id";
// 2
let exo2 = document.querySelector("h2");
exo2.innerHTML = "Exercice 2 partie A";
// 3
let exo3 = document.querySelectorAll("h2")[1];
exo3.innerHTML = "Exercice 2 partie B";
// 4
let exo4 = document.querySelector("p");
exo4.innerHTML = " L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>"
// 5
let exo5 = document.querySelectorAll("p")[1];
exo5.innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide";

// partie 2
// 6
let exo6 = document.querySelector("h1");
exo6.setAttribute("id", "bigTitle");
console.log(exo6);
// 7
let exo7 = document.querySelector("div");
exo7.setAttribute("class", "container");
console.log(exo7);
// 8
let exo8 = document.querySelectorAll("h2");
exo8.forEach(element => {
    element.setAttribute("class", "title")
    console.log(element);
});
// 9
let exo9 = document.querySelectorAll("p");
exo9.forEach(element => {
    element.setAttribute("class", "text")
    console.log(element);
});

// Partie 2.2
// 10
let exo10 = document.querySelector("section");
exo10.setAttribute("class", "margin-bottom border-black padding ");
console.log(exo10);
// 11
let exo11 = document.querySelectorAll("section")[1];
exo11.setAttribute("class", "margin-top"+" border-balck"+" padding");
console.log(exo11);
// 12
let exo12 = document.querySelectorAll("section")[1].lastElementChild
exo12.style.backgroundColor = "red";
exo12.style.border = "thick solid #0000FF";
exo12.style.height = "50px";
exo12.style.width = "50px";
console.log(exo12);