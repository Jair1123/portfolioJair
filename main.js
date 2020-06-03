$(document).ready(function () {
    /* function open  */
    $(".menu-toggler").on("click",function(){
        $(this).toggleClass("open");
        $(".top-nav").toggleClass("open");
    });
    /* Function when click on menu nav close open */
    $(".top-nav .nav-link").on("click",function () {
        $(".menu-toggler").removeClass("open");
        $(".top-nav").removeClass("open");
    });
    /* Function to move menu nav with scroll */
    $('nav a[href*="#"]').on("click",function () {
        $("html,body").animate(
            (keyframes = {
                scrollTop:$($(this).attr("href")).offset().top - 100,
            }),
            (options = 2000)
        );
    })

  /* Footer scroll animation */  
  $("#up").on("click", function () {
    $("html,body").animate(
      (keyframes = {
        scrollTop: 0,
      }),
      (options = 2000)
    );
  });
  /* Init aos animation */
  AOS.init({
    easing:'ease',
    duration:1800,
    once:true
  })

  /* Function to validate email */
  function validate_email(email){
    var regx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regx.test(email) ? true : false;
  }
  /* Function to reset Form */
  function resetForm(){
    document.getElementById("form-box").reset();
  }
  
  
  /* Validation form */
  $('#btnSend').click(function(){
    event.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#mensaje').val();
    var errores = '';
    /* Validando nombre */
    if(name == ''){
      errores += '<p>Escriba un nombre</p>';
      $('#name').css("border-bottom-color","#f14b4b")
    }else{
      $('#name').css("border-bottom-color","#ffe838");
    }
    /* Validando Correo */
    
    if (validate_email(email)){
      $('#email').css("border-bottom-color","#ffe838");
    }else{
      $('#email').css("border-bottom-color","#f14b4b");
      errores += '<p>Ingrese su email</p>';
    }

    
    /* Validando mensaje */
    if(message == ''){
      errores += '<p>Escriba un mensaje</p>';
      $('#mensaje').css("border-bottom-color","#f14b4b")
    }else{
      $('#mensaje').css("border-bottom-color","#ffe838")
    }
    if(!errores == ''){
      var mensajeModal = '<div class="modal-wrap">'+
                              '<div class="mensaje-modal">'+
                                  '<h2>Errores Encontrados</h2>'+
                                  errores+
                                  '<button type="submit" class="btnClose" id="btnClose">Cerrar</button>'+                                     
                              '</div>'+
                          '</div>'
      $('body').append(mensajeModal);
    }else{
      var mensajeModal = '<div class="modal-wrap">'+
                              '<div class="mensaje-modal">'+
                                  '<h2 class="mensaje-ok icon">Mensaje Enviado</h2>'+
                                  '<button type="submit" class="btnClose" id="btnClose">Cerrar</button>'+                                     
                              '</div>'+
                          '</div>'
      $('body').append(mensajeModal);
      /* Aqui es donde ocupo la funcionde ajax para mandar estos datos a php les paso los datos del formulario */
      $.post("enviar.php",{name:$('#name').val(),phone:$('#phone').val(),email:$('#email').val(),mensaje:$('#mensaje').val()},function(result){
        if(result == 'sent'){
          console.log("Mensaje Enviado")
          resetForm();
        }else{
          console.log("No se pudo enviar el mensaje")
        }
      });
      
    }
    /* Cerrar Modal */
    $('#btnClose').click(function (){
      $('.modal-wrap').remove();
    });
    
    
    
  });
});
