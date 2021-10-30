pintarSelect()

function traerInformacion(){
    $.ajax({
        //url: 'http://152.70.214.211/api/Motorbike/all',
        url: 'http://152.70.214.211/api/Motorbike/all',
        type : 'GET',
        dataType : 'json',
        contentType: "application/json; charset=utf-8",

        success: function(respuesta){
            console.log(respuesta);

            $("#resultado").empty();
            let miTabla = '<table border= "1px" style="border-collapse: collapse">';
            miTabla+= '<td>'+ "Name"+ '</td>';
            miTabla+= '<td>'+ "Brand"+ '</td>'; 	
            miTabla+= '<td>'+ "Year"+ '</td>'; 
            miTabla+= '<td>'+ "Description"+ '</td>'; 
            miTabla+= '<td>'+ "Category"+ '</td>';
            miTabla += '</tr>';
            for (i=0; i<respuesta.length; i++){
                miTabla += '<tr>';
                miTabla += '<td>'+ respuesta[i].name+ '</td>'; 		
                miTabla += '<td>'+ respuesta[i].brand+ '</td>'; 		
                miTabla += '<td>'+ respuesta[i].year+ '</td>'; 		
                miTabla += '<td>'+ respuesta[i].description+ '</td>';
                miTabla += '<td>'+ respuesta[i].category.id+ '</td>';               		             
                miTabla += '<td><button onclick="editarRegistro('+respuesta[i].id+')">Editar</button>';
                miTabla += '<td><button class="o-btn_tab_del" onclick="borrarRegistro('+respuesta[i].id+')">Borrar</button>'; 		
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

function pintarSelect(){
	$.ajax({    
    
    //url : 'http://152.70.214.211/api/Category/all',
    url: 'http://152.70.214.211/api/Category/all',
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8", 
    success : function(respuesta) {
		console.log(respuesta);
		$("#cat").empty();
        miSelectEmp='<option>'+'-'+'</option>';
        $("#cat").append(miSelectEmp);
        miSelect="";
		for (i=0; i<respuesta.length; i++){
	        miSelect += '<option value='+ respuesta[i].id+ '>'+respuesta[i].name+'</option>'; 		
		}
	    $("#cat").append(miSelect);    

	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status);
    }
});
	
}	
	
function guardarInformacion(){

	// var e = document.getElementById("cat");
    // var valor_seleccionado = e.options[e.selectedIndex].value;
    // console.log(valor_seleccionado)
    let selected = $("#cat").children(":selected").attr("value");
    console.log(selected)

    let misDatos = {
        name: $("#name").val(),
        brand: $("#brand").val(),
        year: $("#year").val(),
        description: $("#description").val(),
        category:{id:selected} 
	};
    console.log(misDatos);

	let datosJson = JSON.stringify(misDatos); 

	$.ajax(
        //'http://152.70.214.211/api/Motorbike/save'    
        'http://152.70.214.211/api/Motorbike/save',
	{data: datosJson,
    type : 'POST',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",

    statusCode : {
		201 :  function() {
			alert("Se ha ingresado el registro en la base de datos");
			$("#name").val("");
			$("#brand").val("");
			$("#year").val("");
            $("#description").val("");
        	traerInformacion();	
			}
		}
	});
}

function editarRegistro (id){
	$.ajax({    
    url : 'http://152.70.214.211/api/Motorbike/'+id,
	//data: "{}",
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8", 
    success : function(respuesta) {
		console.log(respuesta);
        let miTabla = '<table>';
		//for (i=0; i<respuesta.length; i++){
            $("#id").val(respuesta.id);
			$("#name").val(respuesta.name);
			$("#brand").val(respuesta.brand);
			$("#year").val(respuesta.year);
			$("#description").val(respuesta.description);
            $("#cat").val(respuesta.category.name);
		//}
	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status + json);
    }
});
}

function actualizarInformacion(){
    let selected = $("#cat").children(":selected").attr("value");
	let misDatos = {
        id: $("#id").val(),
        name: $("#name").val(),
        brand: $("#brand").val(),
        year: $("#year").val(),
        description: $("#description").val(),
        category:{id:selected}    
	};
	let datosJson = JSON.stringify(misDatos); 
    console.log(datosJson);
	$.ajax(    
        'http://152.70.214.211/api/Motorbike/update',
	{data: datosJson,
    type : 'PUT',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",

    statusCode : {
		201 :  function() {
			alert("El registro se ha actualizado");
            $("#id").val("");
			$("#name").val("");
			$("#brand").val("");
			$("#year").val("");
			$("#description").val("");
            

        	traerInformacion();	
			}
		}
	});
}
	
function borrarRegistro(codMoto){
	let misDatos = {
		name: $("#name").val(),
        brand: $("#brand").val(),
        year: $("#year").val(),
        description: $("#description").val(),
	};
	let datosJson = JSON.stringify(misDatos); 
	$.ajax(    
        'http://152.70.214.211/api/Motorbike/'+codMoto,
	{data: datosJson,
    type : 'DELETE',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",

    statusCode : {
		204 :  function() {
			alert("El registro se ha eliminado de la base de datos");
			$("#name").val("");
			$("#brand").val("");
			$("#year").val("");
			$("#description").val("");
			
        	traerInformacion();	
			}
		}
	});
}
	