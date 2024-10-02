var back = document.querySelector('.back');
var cardine = document.querySelectorAll('.card');
var pop = document.querySelector('.popup');
var chiudi = document.querySelector('.chiudi');

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
window.onscroll = function() {scrollFunction()};

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
});

/* Funzione popup */
document.addEventListener('DOMContentLoaded', function(){
disableScrolling();
});

chiudi.addEventListener('click', function(){
pop.classList.add('nascosto');
enableScrolling();
});



/* Scroll */
function disableScrolling(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
  window.onscroll=function(){};
}
