/* 

Nouvelles compétences: 

- forEach 

- querySelectorAll 

*/ 

const body_arr = document.querySelectorAll ("*"); 

let btn_elem = document.querySelector(".btn"); 

btn_elem.addEventListener("click", darkmode_func); 

i_elem = document.querySelector(".icon"); 

 

function darkmode_func(){ 

i_elem.classList.toggle("fa-moon"); 

body_arr.forEach(body_elem => { 

body_elem.classList.toggle("darkmode"); 

}) 

} 

 