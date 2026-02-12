/* is it working? */
//console.log("🟢 it's working...")


/* Raccolta dati */

const nameEl = document.getElementById('name');
const kmEl = document.getElementById('km');
const ageEl = document.getElementById('age');
const btnEl = document.querySelector('button');

console.log(nameEl, kmEl, ageEl);

/* Attivare il bottone */

btnEl.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(nameEl.value, kmEl.value, ageEl.value);

})











