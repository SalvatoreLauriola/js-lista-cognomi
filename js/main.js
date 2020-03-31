// 1 Chiedere all'utente il cognome;
// 2 Inserirlo in un array con altri cognomi;
// 3 Stampa la lista ordinata alfabeticamente
// 4 Scrivi anche la posizione della lista in cui il nuovo utente si trova

var cognome = prompt('Inserisci il tuo cognome');

var list = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

list.push(cognome);

list.sort();

console.log(list);


var order = list.indexOf(cognome);

var orderFixed = order + 1;
console.log(orderFixed);





