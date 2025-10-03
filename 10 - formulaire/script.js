/** 
* Event submit 
* event.preventDefault() 
* HTMLInputElement.value 
* String.prototype.trim() 
* regex 
* RegexExp.prototype.test() 
*/
/** 
* 1 .Je recupère 
* - le formulaire 
* - le champ prenom 
* - le champ nom 
* - le champ email 
* - le champ message 
*/

const form = document.getElementById("formulaire");
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");

// 2. Lorsque le formulaire est soumit (clique du bouton submit ou touche ENTER) 
form.addEventListener("submit", onLogin);
// 3. J'annule le comportement par défaut du formulaire : qui consiste à envoyer une requete http GET à l'adresse de l'attribut action du formualire et donc recharger la page 
function onLogin(event) {
    event.preventDefault();

    prenom.value.length <= 2 || prenom.value.length >= 20 ? prenom.nextElementSibling.classList.remove("invisible") : prenom.nextElementSibling.classList.add("invisible");
    nom.value.length <= 2 || prenom.value.length >= 20  ? nom.nextElementSibling.classList.remove("invisible") : nom.nextElementSibling.classList.add("invisible");
    message.value.length <= 10 || prenom.value.length >= 100  ? message.nextElementSibling.classList.remove("invisible") : message.nextElementSibling.classList.add("invisible");
    
    if (isValidEmail(email.value) == false) {
        email.nextElementSibling.classList.remove("invisible");
    }else{
        email.nextElementSibling.classList.add("invisible");
    }
    const data = {
        prenom: prenom.value,
        nom: nom.value,
        email: email.value,
        message: message.value
    }

    console.log(data);

};


/** 
* HELPERS FUNCTIONS 
*/
/** 
* Renvoie vrai si la string email passé en paramètre correspond à une adresse email valide. 
*/

function isValidEmail(email) {
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Création d'un objet RegexExp 
    if (emailFormat.test(email)) {
        return true;
    } else {
        return false
    }
}


/** 
* BONUS HORS ACTIVITE ********************************************* 
* Envoyer un mail 
*/
/** 
* sendMail : Fonction qui permet d'envoyer un mail 
*/
function sendMail(message, from) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: `{"message":"${message}","from":"${from}"}`
    };

    fetch('http://localhost:3000/sendmail', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
} 