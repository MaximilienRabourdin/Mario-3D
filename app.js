//Mise en place des animations
const card = document.querySelector(".card");
const container = document.querySelector(".container");


//Items
const title = document.querySelector(".title");
const games = document.querySelector(".games img");
const commande = document.querySelector(".commande");
const description = document.querySelector(".text h3");
const console = document.querySelector(".console");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let axeX = (window.innerWidth / 2 - e.pageX) / 25;
  let axeY = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${axeX}deg) rotateX(${axeY}deg)`;
});
//3D activé 
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";


  //Mise en place de 3D sur chaque élément
  title.style.transform = "translateZ(150px)";
  games.style.transform = "translateZ(200px) rotateZ(-98deg)";
  description.style.transform = "translateZ(125px)";
  console.style.transform = "translateZ(100px)";
  commande.style.transform = "translateZ(75px)";
});
//3D désactivé
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;


  // Désactivé les effets sur chaque élement.
  title.style.transform = "translateZ(0px)";
  games.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  console.style.transform = "translateZ(0px)";
  commande.style.transform = "translateZ(0px)";
});
