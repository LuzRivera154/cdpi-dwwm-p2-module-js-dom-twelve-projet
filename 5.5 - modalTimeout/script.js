/** 

* removeEventListener 

* Scroll Event 

*/







// 2. Je recupere la modale 

const modal = document.querySelector(".modal");

// 3. Je recupere le bouton quitter de la modale 

const modalQuit = document.querySelector(".modal-quit");



// 4. Je lance la fonction onScrollDisplayModal sur l'evenement scroll de la fenetre 

setTimeout(() => {

    onScrollDisplayModal()

}, 3000);



function onScrollDisplayModal() {

    modal.style.display = "flex"

}

// 5. Je fais disparaite la modale au clique sur la croix 

modalQuit.addEventListener("click", function () {

    modal.style.display = "none";

    window.removeEventListener("scroll", onScrollDisplayModal);

});



