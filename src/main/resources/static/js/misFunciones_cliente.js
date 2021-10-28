function traerInformacion(){
    $.ajax({
        url: 'http://152.70.214.211/api/Client/all',
        type : 'GET',
        dataType : 'json',
        contentType: "application/json; charset=utf-8",

        success: function(respuesta){
            console.log(respuesta);

            $("#resultado").empty();
            let miTabla = '<table border= "1px solid black" style="border-collapse: collapse">';
            miTabla+= '<td>'+ "Email"+ '</td>';
            miTabla+= '<td>'+ "Password"+ '</td>'; 	
            miTabla+= '<td>'+ "Name"+ '</td>'; 
            miTabla+= '<td>'+ "Age"+ '</td>'; 
            miTabla += '</tr>';
            for (i=0; i<respuesta.length; i++){
                miTabla += '<tr>';
                miTabla += '<td>'+ respuesta[i].email+ '</td>'; 		
                miTabla += '<td>'+ respuesta[i].password+ '</td>';
                miTabla += '<td>'+ respuesta[i].name+ '</td>';
                miTabla += '<td>'+ respuesta[i].age+ '</td>';		
                miTabla += '<td><button onclick="editarRegistro('+respuesta[i].idClient+' )">Editar</button>';
                miTabla += '<td><button onclick="borrarRegistro('+respuesta[i].idClient+' )">Borrar</button>'; 		
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
        email: $("#email").val(),
        password: $("#password").val(),
        name: $("#name").val(),
        age: $("#age").val(),
	};
	let datosJson = JSON.stringify(misDatos); 
	$.ajax(    
        'http://152.70.214.211/api/Client/save',
	{data: datosJson,
    type : 'POST',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",

    statusCode : {
		201 :  function() {
			alert("Se ha guardado el nuevo registro");
			$("#email").val("");
			$("#password").val("");
			$("#name").val("");
			$("#age").val("");
        	traerInformacion();	
			}
		}
	});
}

function editarRegistro (codClient){
	$.ajax({    
    url : 'http://152.70.214.211/api/Client/'+codClient,
	//data: "{}",
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta);
        let miTabla = '<table>';
		//for (i=0; i<respuesta.items.length; i++){
			$("#id").val(respuesta.idClient);
			$("#email").val(respuesta.email);
			$("#password").val(respuesta.password);
            $("#name").val(respuesta.name);
			$("#age").val(respuesta.age);
		//}
	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status + json);
    }
});
}

function actualizarInformacion(){
	let misDatos = {
		idClient: $("#id").val(),        
        email: $("#email").val(),
        password: $("#password").val(),
        name: $("#name").val(),
        age: $("#age").val(),
	};
	let datosJson = JSON.stringify(misDatos); 
	$.ajax(    
        'http://152.70.214.211/api/Client/update',
	{data: datosJson,
    type : 'PUT',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",

    statusCode : {
		201 :  function() {
			alert("EL registro ha sido actualizado");
			$("#id").val("");			
			$("#email").val("");
            $("#password").val("");
            $("#name").val("");
			$("#age").val("");
        	traerInformacion();	
			}
		}
	});
}
	
function borrarRegistro(codClient){
	let misDatos = {
		idClient: $("#id").val(),        
        email: $("#email").val(),
        password: $("#password").val(),
        name: $("#name").val(),
        age: $("#age").val(),
	};
	let datosJson = JSON.stringify(misDatos); 
	$.ajax(    
        'http://152.70.214.211/api/Client/'+codClient,
	{data: datosJson,
    type : 'DELETE',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",

    statusCode : {
		204 :  function() {
			alert("El registro se ha eliminado");
			$("#id").val("");			
			$("#email").val("");
            $("#password").val("");
            $("#name").val("");
			$("#age").val("");
        	traerInformacion();	
			}
		}
	});
}
	