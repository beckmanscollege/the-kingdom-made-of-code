/* const är som grupper som sedan ändras i med funktioner, de listas högst upp*/
const enterBtn = document.getElementById('enter-btn');
const overlay = document.querySelector('.overlay');


/* koden under gör att man klickar en knapp då aktiveras en 
display 'none' på gruppen "overlay" i css, alltså slutas gruppen
overlay visas 'none'- som "inget" visas. */

enterBtn.addEventListener('click', () => {
overlay.style.display = 'none';
});



/* Koden under här är JavaScriptet som gör att kaninbilden alltid 
följer musen, den "pratar" med css gruppen "image", i denna css grupp
avgörs hur nära gifen är musen */
document.addEventListener("mousemove", function (event) {
  var x = event.clientX;
  var y = event.clientY;
  var image = document.querySelector(".image");
  image.style.transform = `translate(${x}px, ${y}px)`;
});

