$(document).ready(function(){
	
	// llenar selec de forma dinamica
	var ciudadOrigen = $('#sel1');
	var ciudadDestino = $('#sel2');

	$.each(ciudades, function(index,value){
		ciudadOrigen.append('<option value="'+ciudades[index].name+'">'+ciudades[index].name+'</option>');
		ciudadDestino.append('<option value="'+ciudades[index].name+'">'+ciudades[index].name+'</option>');

	});

	$('#buscar').on('click', function(){

	    var selectOrigen = $('#sel1').val();
	    var selectDestino = $('#sel2').val();

	    //validacion de selectores
	    if (selectOrigen == 'null'){
	    	alert('debe ingresar ciudad de origen!');
	        return false;
	    } 
	    if (selectDestino == 'null'){
	    	alert('debe ingresar ciudad de destino!');
	        return false;
	    }

	    var origen = "null";
	    var destino = "null";

	    //iteracion en arreglo para identificar selectores
	    $.each(ciudades, function(index,item){
	      if(ciudades[index].name == selectOrigen){
	       origen = ciudades[index];
	      }
	      if(ciudades[index].name == selectDestino){
	        destino = ciudades[index];
	      }
	      // calculo de consumo de gasolina por vehiculo
	  	  var distancia =  Math.abs(destino.distance-origen.distance);
	  	  var consumoAuto = Math.round(distancia/12*673);
	  	  var consumoMoto = Math.round(distancia/21*673);
	  	  var consumoMinivan = Math.round(distancia/7*673);
	  	  var consumoCamion = Math.round(distancia/6*673);

	  	  console.log(consumoMoto);


	  	});
	});

});