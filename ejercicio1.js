var banco = "Sofía,David,Juan";
var fila = banco.split(",");
//convertimos un string en un array
function filadeBanco(banco,fila){
	console.log(fila);
	//añadimos 2 personas a la cola y elimnamos al primero
	fila.shift();
	fila.push("Sara", "Agustin");
	console.log(fila);
	//David mete a Renata detrás de el y Elena se forma	
	fila.shift();
	fila.unshift("David","Renata");
	fila.push("Elena");
	console.log(fila);	
};
filadeBanco(banco,fila);