$("#btn-crear-carpeta").click(function(){
    var parametros = $("#formularioCarpetas").serialize();
    console.log("Información a guardar: " + parametros);
    $.ajax({
        url:"/carpetas/nuevaCarpeta",
        method:"post",
        data: parametros,
        dataType: "json",
        success:function(res){
            console.log(res);
            $("#modal-nueva-carpeta").modal("hide");
            $("#contenedorPrincipal").append(
            `	<div class="col-xl-3 col-sm-12 col-xs-12 text-center mb-5" id="${res._id}">
                  <a href="/carpetas/${res._id}"><i class="far fa-folder fa-5x" style="color:#E18E48";></i></a>
                  <h4>${res.nombre}</h4>
              </div>` );
        },
        error:function(error){
            console.log(error);
            $("#modal-nueva-carpeta").modal("hide");
        }
    });
  });


