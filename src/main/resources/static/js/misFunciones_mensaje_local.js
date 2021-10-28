function traerInformacion(){
    $.ajax({
        url: 'http://localhost/api/Message/all',
        type : 'GET',
        dataType : 'json',
        contentType: "application/json; charset=utf-8",

        success: function(respuesta){
            console.log(respuesta);

            $("#resultado").empty();
            let miTabla = '<table border= "1px solid black" style="border-collapse: collapse">';
            miTabla+= '<td>'+ "Message Text"+ '</td>'; 	
            miTabla += '</tr>';
            for (i=0; i<respuesta.length; i++){
                miTabla += '<tr>';
                miTabla += '<td>'+ respuesta[i].messageText+ '</td>'; 		                		
                miTabla += '<td><button onclick="editarRegistro('+respuesta[i].idMessage+' )">Editar</button>';
                miTabla += '<td><button onclick="borrarRegistro('+respuesta[i].idMessage+' )">Borrar</button>'; 		
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
	let misDatos = {
        messageText: $("#messagetext").val(),

	};
	let datosJson = JSON.stringify(misDatos); 
	$.ajax(    
        'http://localhost/api/Message/save',
	{data: datosJson,
    type : 'POST',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",

    statusCode : {
		201 :  function() {
			alert("Se ha ingresado el registro en la base de datos");
			$("#messagetext").val("");
        	traerInformacion();	
			}
		}
	});
}

function editarRegistro (codMessage){
	$.ajax({    
    url : 'http://localhost/api/Message/'+codMessage,
	//data: "{}",
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",

    success : function(respuesta) {
		console.log(respuesta);
        let miTabla = '<table>';
		//for (i=0; i<respuesta.items.length; i++){
			$("#id").val(respuesta.idMessage);
			$("#messagetext").val(respuesta.messageText);
		//}
	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status + json);
    }
});
}

function actualizarInformacion(){
	let misDatos = {
		idMessage: $("#id").val(),
        messageText: $("#messagetext").val(),
	};
	let datosJson = JSON.stringify(misDatos); 
	$.ajax(    
        'http://localhost/api/Message/update',
	{data: datosJson,
    type : 'PUT',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",

    statusCode : {
		201 :  function() {
			alert("El registro se ha actualizado");
			$("#id").val("");
			$("#messagetext").val("");
        	traerInformacion();	
			}
		}
	});
}
	
function borrarRegistro(codMessage){
	let misDatos = {
		idMessage: $("#id").val(),
        messageText: $("#messagetext").val(),
	};
	let datosJson = JSON.stringify(misDatos); 
	$.ajax(    
        'http://localhost/api/Message/'+codMessage,
	{data: datosJson,
    type : 'DELETE',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",

    statusCode : {
		204 :  function() {
			alert("El registro se ha eliminado de la base de datos");
			$("#id").val("");
			$("#messagetext").val("");
        	traerInformacion();	
			}
		}
	});
}
	