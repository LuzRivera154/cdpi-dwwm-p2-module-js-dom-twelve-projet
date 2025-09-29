/** 

* let 

* element.getAttribute() 

* element.setAttribute() 

* ++ operator 

* operateur ternaire 

*/ 

 

// 1. Je recupere toutes les petites vignettes 

const vignettes = document.querySelectorAll(".small"); 

// 2. Je recupere la grande photo 

const fullImg = document.getElementById("full"); 

 

// 3. Je recupere le bouton AJOUTER 

const btnAdd = document.querySelector(".btn-add"); 

 

// 4. Je recupere la balise vide de message d'ajout du panier 

const panierMsg = document.querySelector(".panier-msg"); 

// 5. Je crée une variable qui contient le nombre de produits ajoutées ua panier 

let panier = 0; 

// ... 

btnAdd.addEventListener("click", ajouter_func); 

function ajouter_func() { 

panier++; 

panierMsg.innerText = "Vous avez " + panier + " produits dans votre panier." 

} 

vignettes.forEach(vignette_elem => { 

vignette_elem.addEventListener("click", changePhoto_func); 

function changePhoto_func() { 

let imgBig = fullImg.getAttribute("src"); 

let img_reemplazo = vignette_elem.getAttribute("src"); 

vignette_elem.setAttribute("src", imgBig); 

fullImg.setAttribute("src", img_reemplazo); 

} 

 

}); 