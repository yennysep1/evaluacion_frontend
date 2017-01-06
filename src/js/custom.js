$(document).ready(function(){
	
	// llenar selec de forma dinamica
	var ciudades = get_regiones();
	var ciudadOrigen = $('#sel1');
	var ciudadDestino = $('#sel2');

	$.each(ciudades, function(index,value){
		ciudadOrigen.append('<option value="'+ciudades[index].name+'">'+ciudades[index].name+'</option>');
		ciudadDestino.append('<option value="'+ciudades[index].name+'">'+ciudades[index].name+'</option>');

	// tomar el valor de los select
	});

  
       




});
