/** 

* firstChild 

* lastChild 

* childNodes 

* nextSibiling MAIS preferez nextElementSibiling pour eviter de selectionner les passages à la ligne 

* previousSibiling MAIS preferez previousElementSibiling pour eviter de selectionner les passages à la ligne 

*  

*/ 

 

// 1. Je recupere toutes les questions/ icon 

const questions = document.querySelectorAll(".question"); 

const icons = document.querySelectorAll(".btn-arrow"); 

 

 

// 2. Je parcours toutes les questions 

questions.forEach(function (question) { 

// 3. Lors du click sur la question 

question.addEventListener("click", function () { 

// 4. Je recupere la reponse correspondante et le chevron correspondante 

question.nextElementSibling.classList.toggle("show-reponse"); 

icons.forEach(icon => { 

icon.classList.toggle("fa-chevron-down"); 

icon.classList.toggle("fa-chevron-up"); 

}) 

}); 

}); 