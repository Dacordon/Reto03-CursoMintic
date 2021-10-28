
function traerInformacion(){
    $.ajax({
        url: 'http://localhost/api/Reservation/all',
        type : 'GET',
        dataType : 'json',
        contentType: "application/json; charset=utf-8",

        success: function(respuesta){
            console.log(respuesta);

            $("#resultado").empty();
            let miTabla = '<table border= "1px solid black" style="border-collapse: collapse">';
            miTabla+= '<td>'+ "Start Date"+ '</td>';
            miTabla+= '<td>'+ "Dev Date"+ '</td>'; 	

            miTabla += '</tr>';
            for (i=0; i<respuesta.length; i++){
                miTabla += '<tr>';
                miTabla += '<td>'+ respuesta[i].startDate+ '</td>'; 		
                miTabla += '<td>'+ respuesta[i].devolutionDate+ '</td>'; 		
                miTabla += '<td><button onclick="editarRegistro('+respuesta[i].idReservation+' )">Editar</button>';
                miTabla += '<td><button onclick="borrarRegistro('+respuesta[i].idReservation+' )">Borrar</button>'; 		
                miTabla += '</tr>';
        
            }
            miTabla += '</table>';
            $("#resultado").append(miTabla);


        },
        error: function(xhr, status){
            alert('problema:'+status+json);
        }

    });

}
	
function guardarInformacion(){

	// var e = document.getElementById("cat");
    // var valor_seleccionado = e.options[e.selectedIndex].value;
    // console.log(valor_seleccionado)
    //let selected = $("#cat").children(":selected").attr("value");

    let misDatos = {
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),

	};
    console.log(misDatos);

	let datosJson = JSON.stringify(misDatos); 

	$.ajax(    
        'http://localhost/api/Reservation/save',
	{data: datosJson,
    type : 'POST',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",

    statusCode : {
		201 :  function() {
			alert("Se ha ingresado el registro en la base de datos");
			$("#startDate").val("");
			$("#devolutionDate").val("");

        	traerInformacion();	
			}
		}
	});
}

function editarRegistro (id){
	$.ajax({    
    url : 'http://localhost/api/Reservation/'+id,
	//data: "{}",
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",

    success : function(respuesta) {
		console.log(respuesta);
        let miTabla = '<table>';
		//for (i=0; i<respuesta.items.length; i++){
			$("#id").val(respuesta.idReservation);
			$("#startDate").val(respuesta.startDate);
			$("#devolutionDate").val(respuesta.devolutionDate);
		//}
	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status + json);
    }
});
}

function actualizarInformacion(){
	let misDatos = {
		idReservation: $("#id").val(),
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
	};
	let datosJson = JSON.stringify(misDatos); 
	$.ajax(    
        'http://localhost/api/Reservation/update',
	{data: datosJson,
    type : 'PUT',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",

    statusCode : {
		201 :  function() {
			alert("El registro se ha actualizado");
			$("#id").val("");
			$("#startDate").val("");
			$("#devolutionDate").val("");
        	traerInformacion();	
			}
		}
	});
}
	
function borrarRegistro(id){
	let misDatos = {
		idReservation: $("#id").val(),
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
	};
	let datosJson = JSON.stringify(misDatos); 
	$.ajax(    
        'http://localhost/api/Reservation/'+id,
	{data: datosJson,
    type : 'DELETE',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",

    statusCode : {
		204 :  function() {
			alert("El registro se ha eliminado de la base de datos");
			$("#id").val("");
			$("#startDate").val("");
			$("#devolutionDate").val("");
        	traerInformacion();	
			}
		}
	});
}
	