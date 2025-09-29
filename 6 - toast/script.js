/** 

* document.createElement() 

* element.classList.add() 

* element.innerHTML 

* elemParent.appendChild(elemEnfant) 

* element.remove() 

* setTimeout() 

*/ 

 

// 1. Je recupere le bouton 

const btn = document.querySelector("button"); 

// 2. Je recupere le conteneur de toasts 

const ctnToasts = document.querySelector(".container-toasts"); 

 

btn.addEventListener("click", toast_func); 

function toast_func() { 

const toast_elem = document.createElement("div"); 

toast_elem.classList.add("toast"); 

ctnToasts.appendChild(toast_elem); 

const parr_elem = document.createElement("p"); 

parr_elem.innerText = "Votre fichier est enregister !"; 

toast_elem.appendChild(parr_elem); 

setTimeout(() => { 

toast_elem.remove() 

}, 1000); 

} 