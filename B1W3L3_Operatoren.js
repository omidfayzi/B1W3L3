var tafel = prompt('Welke tafel wil je uitrekenen?')
var body = document.querySelector('body')


function tafelUitrekenen() {
 
 for (i=1; i <= 10; i++) {
 	var element = document.createElement('h')
 	body.appendChild(element)
 	
 	element.innerHTML = `${i} × ${tafel} = ${i * tafel} <br>`
 }

} tafelUitrekenen();
