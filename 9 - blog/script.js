/** 

* Template string `${}` 

* innerHTML ou template 

* += operator 

*/ 

 

// 1. Je recupere le conteneur de publications 

const postsContainer = document.querySelector(".posts"); 

 

// 2. Voici ma base de données factise  

const posts =  

[ 

{ 

titre:"SEO, les bonnes pratiques", 

hashtag:"#SEO", 

link:"#", 

extrait:"Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi." 

}, 

{ 

titre:"Bien, les bonnes pratiques", 

hashtag:"#JS", 

link:"#", 

extrait:"Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi." 

}, 

{ 

titre:"Content, les bonnes pratiques", 

hashtag:"#PHP", 

link:"#", 

extrait:"Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi." 

} 

]; 

 

// 3. Je parcours la bdd 

posts.forEach(function(post_obj){ 

// 4. Je créer un nouveau post dans le conteneur de post pour chaque post de la BDD 

const post_elem = document.createElement("div"); 

post_elem.classList.add("post"); 

const divTitre_elem = document.createElement("div"); 

divTitre_elem.classList.add("post-titre"); 

post_elem.appendChild(divTitre_elem); 

 

const aTitre_elem = document.createElement("a"); 

divTitre_elem.appendChild(aTitre_elem);; 

aTitre_elem.innerText = post_obj.titre; 

aTitre_elem.setAttribute("href",post_obj.link); 

const divPostExtrait_elem = document.createElement("div"); 

divPostExtrait_elem.classList.add("post-extrait"); 

post_elem.appendChild(divPostExtrait_elem); 

divPostExtrait_elem.innerText = post_obj.extrait; 

 

const divPostHashtag_elem = document.createElement("div"); 

divPostHashtag_elem.classList.add("post-hashtag"); 

post_elem.appendChild(divPostHashtag_elem); 

divPostHashtag_elem.innerText = post_obj.hashtag; 

// 5. Je l'ajoute dans le conteneur de publication 

postsContainer.appendChild(post_elem); 

}); 

 