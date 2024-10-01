$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        const respostaFormulario = $('#resposta-usuario').val();
        $('#minhaLista').append(`<li>${respostaFormulario}</li>`);
        $('#resposta-usuario').val('');
    });

    $("#minhaLista").on("click", "li", function() {
        $(this).toggleClass("finalizado"); 
    });

});
