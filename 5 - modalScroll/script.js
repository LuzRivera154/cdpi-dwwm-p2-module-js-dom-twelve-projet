/** 

* removeEventListener 

* Scroll Event 

*/



// 1. Je recupere la section à partir de laquelle je veux faire apparaite la modale 

const section2 = document.querySelector(".two");



// 2. Je recupere la modale 

const modal = document.querySelector(".modal");

// 3. Je recupere le bouton quitter de la modale 

const modalQuit = document.querySelector(".modal-quit");



// 4. Je lance la fonction onScrollDisplayModal  

window.addEventListener("scroll", onScrollDisplayModal);



// 5. Je fais disparaite la modale au clique sur la croix 

modalQuit.addEventListener("click", function () {

    modal.style.display = "none";

    window.removeEventListener("scroll", onScrollDisplayModal);

});



/** 

* Fonction à passer en parametre de addEventListener("scroll",function) 

* Obligatoire pour pouvoir utiliser removeEventListener(function) 

*/

function onScrollDisplayModal() {

    if (window.scrollY >= section2.offsetTop) {

        modal.style.display = "flex"

    }

} 