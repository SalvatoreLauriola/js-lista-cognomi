// 1 Chiedere all'utente il cognome;
// 2 Inserirlo in un array con altri cognomi;
// 3 Stampa la lista ordinata alfabeticamente
// 4 Scrivi anche la posizione della lista in cui il nuovo utente si trova



var list = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var cognomi = document.getElementById('cognomi');
var listaCognomi = document.getElementById('lista-cognomi');
var btn = document.getElementById('create');

btn.addEventListener('click',

function() {
  list.push(cognomi.value);
  list.sort();

  var items= '';
  for (i=0; i < list.length; i++) {
    items += '<li>' + list [i] + '</li>';

    listaCognomi.innerHTML = items + 'Il tuo cognome è il ' + list.indexOf(cognomi.value);
  }
}
);







