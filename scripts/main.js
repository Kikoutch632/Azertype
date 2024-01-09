/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
 *********************************************************************************/

lancerJeu()


let inputEcriture = document.getElementById("inputEcriture");

let btnValiderMot = document.getElementById("btnValiderMot");

let zoneProposition = document.querySelector(".zoneProposition");
console.log(zoneProposition);

let zoneScoreSpan = document.querySelector(".zoneScore span");
console.log(zoneScoreSpan);

let listeBtnRadio = document.querySelectorAll(".optionSource input");
console.log(listeBtnRadio);