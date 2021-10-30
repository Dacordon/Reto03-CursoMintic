
function traerInformacion(){
    $.ajax({
        //url: 'http://152.70.214.211/api/Category/all',
        url: 'http://152.70.214.211/api/Category/all',
        type : 'GET',
        dataType : 'json',
        contentType: "application/json; charset=utf-8",

        success: function(respuesta){
            console.log(respuesta);

            $("#resultado").empty();
            let miTabla = '<table border= "1px" style="border-collapse: collapse">';
            miTabla+= '<td>'+ "Name"+ '</td>';
            miTabla+= '<td>'+ "Description"+ '</td>'; 
            miTabla += '</tr>';
            for (i=0; i<respuesta.length; i++){
                miTabla += '<tr>';
                miTabla += '<td>'+ respuesta[i].name+ '</td>'; 		 		
                miTabla += '<td>'+ respuesta[i].description+ '</td>';                		             
                miTabla += '<td><button onclick="editarRegistro('+respuesta[i].id+' )">Editar</button>';
                miTabla += '<td><button class="o-btn_tab_del" onclick="borrarRegistro('+respuesta[i].id+' )">Borrar</button>'; 		
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
        name: $("#name").val(),
        description: $("#description").val(),

	};
    console.log(misDatos);

	let datosJson = JSON.stringify(misDatos); 

	$.ajax(    
        'http://152.70.214.211/api/Category/save',
        //'http://152.70.214.211/api/Category/save',
	{data: datosJson,
    type : 'POST',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",

    statusCode : {
		201 :  function() {
			alert("Se ha ingresado el registro en la base de datos");
			$("#name").val("");
            $("#description").val("");
        	traerInformacion();	
			}
		}
	});
}

function editarRegistro (id){
	$.ajax({    
    url : 'http://152.70.214.211/api/Category/'+id,
	//data: "{}",
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8", 
    success : function(respuesta) {
		console.log(respuesta);
        let miTabla = '<table>';
		//for (i=0; i<respuesta.items.length; i++){
			$("#id").val(respuesta.id);
			$("#name").val(respuesta.name);
			$("#description").val(respuesta.description);

		//}
	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status + json);
    }
});
}

function actualizarInformacion(){
	let misDatos = {
		id: $("#id").val(),
        name: $("#name").val(),
        description: $("#description").val(),
	};
	let datosJson = JSON.stringify(misDatos); 
	$.ajax(    
        'http://152.70.214.211/api/Category/update',
	{data: datosJson,
    type : 'PUT',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",

    statusCode : {
		201 :  function() {
			alert("El registro se ha actualizado");
			$("#id").val("");
			$("#name").val("");
			$("#description").val("");
        	traerInformacion();	
			}
		}
	});
}
	
function borrarRegistro(id){
	let misDatos = {
		id: $("#id").val(),
        name: $("#name").val(),
        description: $("#description").val(),
	};
	let datosJson = JSON.stringify(misDatos); 
	$.ajax(    
        'http://152.70.214.211/api/Category/'+id,
	{data: datosJson,
    type : 'DELETE',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",

    statusCode : {
		204 :  function() {
			alert("El registro se ha eliminado de la base de datos");
			$("#name").val("");
			$("#description").val("");
        	traerInformacion();	
			}
		}
	});
}
	