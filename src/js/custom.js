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

	  	 //manipulacion del DOM - agregando valores 
	  	 $('#vMoto').html('$' + consumoAuto);
	  	 $('#vAuto').html('$' + consumoMoto);
	  	 $('#vVan').html('$' + consumoMinivan);
	  	 $('#vCamion').html('$' + consumoCamion);

	  	 $('#vehiculos,#compartir').show();

	  	});

    });

		 $('#compartir').on('click', function(){

    	// validar input radio 
		var inputRadio =$("input[name='radio']:checked").val();
		var pasajeros =$("#cant-pasajeros").val();

		if(inputRadio =="input-moto"){
			$('#myModal').modal(options);
			$('#img-modal').attr('src','dist/img/moto.jpg');
			$('#costoPP').html(consumoMoto/pasajeros);
		}	
		if(inputRadio =="input-auto"){
			$('#myModal').modal(options);
			$('#img-modal').attr('src','dist/img/auto.jpg');
			$('#costoPP').html(consumoAuto/pasajeros);
		}	
		if(inputRadio =="input-van"){
			$('#myModal').modal(options);
			$('#img-modal').attr('src','dist/img/van.jpg');
			$('#costoPP').html(consumoMinivan/pasajeros);
		}
		if(inputRadio =="input-camion"){
			$('#myModal').modal(options);
			$('#img-modal').attr('src','dist/img/camion.jpg');
			$('#costoPP').html(consumoCamion/pasajeros);
		}

    });

});


  
