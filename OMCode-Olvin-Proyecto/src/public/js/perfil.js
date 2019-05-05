
$(document).ready(function() {

  cargarDatos();

});


function cargarDatos(){
  //console.log("Cargar los Datos del Usuario.")
   
  $.ajax({
    url: "/notes",
    method: "GET",
    dataType: "json",
    success: function(response){
      console.log(`Se cargaron los datos de: ${response.user.name} con exito.`);
   
      $('#nombre-cuenta').html(response.user.name);
      //$('#descripcion-cuenta').html(response.usuario.descripcion);
      
      //$('#nombre').val(response.usuario.nombre);
      //$('#apellido').val(response.usuario.apellido);
      //$('#usuario').val(response.usuario.nombreUsuario);
      $('#correo').val(response.user.email);
      //$('#contrasena').val(response.usuario.contrasena);
      //$('#descripcion').val(response.usuario.descripcion);
      //$('#').val(response.usuario.);
      //$('#').val(response.usuario.);
    },
    error: function(err){
      console.log(err);
    }
  });

}

function actualizarUsuario(){

  $.ajax({
    url: '/api/usuario/id',
    method: "PUT",
    dataType: "json",
    data: {
      "nombre": $('#nombre').val(),
      "apellido": $('#apellido').val(),
      "nombreUsuario": $('#usuario').val(),
      "correo": $('#correo').val(),
      "contrasena": $('#contrasena').val(),
      "descripcion": $('#descripcion').val()
    },
    success: function(response){
      console.log(`Nombre usuario: ${response.usuario.nombre}`);

      // Mensajes Validos
      $.alert({
        title: '',
        content: `Usuario "${response.usuario.nombreUsuario}", actualizado con exito`,
        type: 'green',
        typeAnimated: true,
        icon: 'fas fa-check',
        closeIcon: true,
        closeIconClass: 'fas fa-times',
        autoClose: 'cerrar|5000', // Tiempo para cerrar el mensaje
        theme: 'modern', // Acepta propiedades CSS
        buttons: {
          cerrar: {
            text: 'Cerrar',
            btnClass: 'btn-success',
            keys: ['enter', 'shift']
          }
        }
      });

      cargarDatos();
    },
    error: function(err){
      console.error(err);
    }
  });
}

$("#btn-guardar").click(function(){
  var datosValidos = false; // Inicialmente es falso
  
  // Manda  a llamar la función de validar por cada campo
  for (var i=0; i<campos.length; i++) {
    campos[i].valido = validarDatos(campos[i].campo, campos[i].expresion, campos[i].formato);
  }

  for (var i=0; i<campos.length; i++){
    if (!campos[i].valido){
      return datosValidos = false;
    } else {
      datosValidos = true;
    }
  }

  if (datosValidos) {
    actualizarUsuario();
  }


});

