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
  let user_name = nameEl.value;
  let age = ageEl.value;   
  let kilometers = Number(kmEl.value);
  //console.log(user_name, age, kilometers);  
  
  /* Determino il costo totale del biglietto */ 
    /* prezzo in base alla tratta (km) */
    price_km_based = (kilometers * 0.21); 
    //console.log(price_km_based);
    
    /* Controllo se ha diritto a sconti (e, nel caso, li applico */ 
    
    if (age === 'minore') {
        output_price = (price_km_based - (price_km_based / 100) * 20);
        /* Arrotondo il prezzo ai centesimi */
        user_price = `${output_price.toFixed(2)} euro`;  
        
      } else if (age === 'over 65') {
        output_price = (price_km_based - (price_km_based / 100) * 40);
        /* Arrotondo il prezzo ai centesimi */
        user_price = `${output_price.toFixed(2)} euro`;  
        
      } else if (age === 'adulto') {      
        output_price = price_km_based;
        //console.log(output_price);
        /* Arrotondo il prezzo ai centesimi */
        user_price = `${output_price.toFixed(2)} euro`;  
      }
    /* Restituisco il prezzo del biglietto (stampo in console) */
    console.log(user_price);
    
  })
  










