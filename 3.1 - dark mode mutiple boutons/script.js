//1. Je recupere tout les switchs 

const switch_elem = document.querySelector(".switch"); 

//2. Je recupere tout les elements html de ma page 

const body_arr = document.querySelectorAll("*"); 

const icon_arr = document.querySelectorAll(".icon"); 

//3. Je parcours tout les switchs 

switch_elem.addEventListener("click", darkmode_func); 

function darkmode_func() { 

icon_arr.forEach(icon_elem => { 

icon_elem.classList.toggle("fa-moon"); 

}) 

body_arr.forEach(body_elem => { 

body_elem.classList.toggle("darkmode"); 

}); 

} 