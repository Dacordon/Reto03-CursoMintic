
function traerInformacionStatus(){
    $.ajax({
        url: 'http://localhost/api/Reservation/report-status',
        type : 'GET',
        dataType : 'json',
        contentType: "application/json; charset=utf-8",

        success: function(respuesta){
            console.log(respuesta);

            $("#resultado").empty();
            let miTabla = '<table border= "1px" style="border-collapse: collapse">';
            miTabla+= '<td>'+ "Completadas"+ '</td>';
            miTabla+= '<td>'+ "Canceladas"+ '</td>'; 	

            miTabla += '</tr>';
            //for (i=0; i<respuesta.length; i++){
                miTabla += '<tr>';
                miTabla += '<td>'+ respuesta.completed+ '</td>'; 		
                miTabla += '<td>'+ respuesta.cancelled+ '</td>'; 		 		
                miTabla += '</tr>';
        
            //}
            miTabla += '</table>';
            $("#resultado").append(miTabla);


        },
        error: function(xhr, status){
            alert('problema:'+status+json);
        }

    });

}

function traerInformacionClients(){
    $.ajax({
        url: 'http://localhost/api/Reservation/report-clients',
        type : 'GET',
        dataType : 'json',
        contentType: "application/json; charset=utf-8",

        success: function(respuesta){
            console.log(respuesta);

            $("#resultado").empty();
            let miTabla = '<table border= "1px solid black" style="border-collapse: collapse">';
            miTabla+= '<td>'+ "Cliente"+ '</td>';
            miTabla+= '<td>'+ "Total Reservas"+ '</td>'; 	

            miTabla += '</tr>';
            for (i=0; i<respuesta.length; i++){
                miTabla += '<tr>';
                miTabla += '<td>'+ respuesta[i].client.name+ '</td>';
                miTabla += '<td>'+ respuesta[i].total+ '</td>'; 		                 		 		
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
	
