var back = document.querySelector('.back');
var cardine = document.querySelectorAll('.card');
var chiudi = document.querySelector('.chiudi');
var paypal = document.querySelector('.pulsantePP');

console.log(cardine);
document.querySelectorAll('.card').forEach(item => {
  item.addEventListener('click', function(e) {
    const currentlySelectedElem = document.querySelector(".card.attivo");
    if (currentlySelectedElem) {
      currentlySelectedElem.classList.remove("attivo");
  }
  
  // Indicate the current selection
  item.classList.add("attivo");
      // item.classList.remove('attivo');
  });
});

// When the user scrolls down 20px from the top of the document, show the button
/* window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    back.style.display = "block";
  } else {
    back.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
back.addEventListener('click', function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}); */

/* Funzione popup 
/* document.addEventListener('DOMContentLoaded', function(){ 
  paypal.addEventListener('click', function(){
    pop.classList.remove('nascosto');
 
disableScrolling();
     });
/* }); 

chiudi.addEventListener('click', function(){
pop.classList.remove('nascosto');
enableScrolling();
});*/



/* Scroll 
function disableScrolling(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
  window.onscroll=function(){};
}
*/
let whatsapp = document.getElementById('wa');
let pop = document.getElementById('popup');
let close = document.getElementById('iconaClose');
let pulsante = document.getElementById('bottone');
let tooltip = document.getElementById('tool');
let notifica = document.getElementById('notification');
let mail = document.getElementById('secondaria');
let linkedin = document.getElementById('secondaria1');

whatsapp.addEventListener('click', function(){
whatsapp.classList.toggle ('animato');
tooltip.classList.add('nascosto');
});
whatsapp.addEventListener('mouseover', function(){
  tooltip.classList.toggle('nascosto');
  });
setTimeout(() => {
    tooltip.classList.remove('nascosto');
},
3000);
setTimeout(() => {
    tooltip.classList.add('nascosto');
},
8000);
