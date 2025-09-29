/* 

Nouvelles compétences: 

- Font awesome 

- type Boolean 

- if else 

- HTMLElement.classList 

- toggle Inverse l'etat de la classe : present ou pas 

* add 

* remove 

* replace 

*/ 

 

// 1. Je recupere l'icone smiley 

icone_elem = document.querySelector("#emoji"); 

// 2. Je recupere le bouton ABONNER 

btnAbonner_elem = document.querySelector(".btn-sub"); 

// 3. Je défini une variable binaire qui exprime l'etat abonné ou non de l'utilisateur 

 

 

 

// 4. J'ecoute le clique sur l'icone smiley 

icone_elem.addEventListener("click", icone_func); 

function icone_func() { 

icone_elem.classList.toggle("happy"); 

icone_elem.classList.toogle("fa-face-meh"); 

icone_elem.classList.toogle("fa-smile-wink"); 

 

// let valor = icone_elem.classList.contains("happy"); 

// if (valor){ 

// icone_elem.classList.replace("fa-face-meh","fa-smile-wink" ); 

// }else { 

// icone_elem.classList.replace("fa-smile-wink","fa-face-meh" ); 

// } 

} 

// 5. J'ecoute l'evenemment click sur le bouton ABONNEZ 

 

btnAbonner_elem.addEventListener("click", btnAbonner_func); 

function btnAbonner_func() {  

btnAbonner_elem.classList.toggle("abonne"); 

let valor = btnAbonner_elem.classList.contains("abonne"); 

if (valor) { 

btnAbonner_elem.innerText = "Abonné" 

} else { 

btnAbonner_elem.innerText = "Abonnez-vous" 

} 

} 
