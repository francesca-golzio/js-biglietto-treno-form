/* is it working? */
//console.log("🟢 it's working...")


/* Raccolgo dati */
const nameEl = document.getElementById('name');
const ageEl = document.getElementById('age');
const kmEl = document.getElementById('km');
const btnEl = document.querySelector('button');  

/* Attivo il bottone */
btnEl.addEventListener('click', function(e) {
  /* prevengo il refresh e la cancellazione dei valori inseriti */
  e.preventDefault();  

  /* Raccolgo dati */
  let price_km_based, output_price, user_price;
  let passenger_name = nameEl.value;
  let age = ageEl.value;   
  let kilometers = Number(kmEl.value);
  //console.log(passenger_name, age, kilometers);
  let fare;
  let cardNameEl = document.querySelector('.cardName'); 
  //console.log(cardNameEl);  
  let cardKm = document.querySelector('.cardKm');
  let cardFare = document.querySelector('.cardFare');
  let cardPrice = document.querySelector('.cardPrice');
  
  /* Determino il costo totale del biglietto */ 
  /* prezzo in base alla tratta (km) */
  price_km_based = (kilometers * 0.21); 
  //console.log(price_km_based);
  
  /* Controllo se ha diritto a sconti (e, nel caso, li applico) */   
  if (age === 'Minor') {
    output_price = (price_km_based - (price_km_based / 100) * 20);
    /* Arrotondo il prezzo ai centesimi */
    user_price = `${output_price.toFixed(2)}`;  
    fare = 'Minor ticket (20% off)'
    
  } else if (age === 'Over 65') {
    output_price = (price_km_based - (price_km_based / 100) * 40);
    /* Arrotondo il prezzo ai centesimi */
    user_price = output_price.toFixed(2);  
    fare = 'Elder ticket (40% off)'
    
  } else if (age === 'Adult') { // adulto
    output_price = price_km_based;
    //console.log(output_price);
    /* Arrotondo il prezzo ai centesimi */
    user_price = output_price.toFixed(2);  
    fare = 'Adult ticket'
  } else {
    alert('Age not selected! Please, select the right Passenger Age')
  }

  /* Restituisco il prezzo del biglietto (stampo in console) */
  console.log(user_price);
  
  /* Stampo in pagina il biglietto */
  cardNameEl.innerHTML = `Passenger: ${passenger_name}`;
  cardFare.innerHTML = `Ticket Fare: ${fare}`;
  cardKm.innerHTML = `${kilometers} km`;
  cardPrice.innerHTML = `Ticket Price: ${user_price} euro`;
  
  console.log(cardNameEl.innerHTML, cardFare.innerHTML, cardKm.innerHTML, cardPrice.innerHTML);
  })


  
  










