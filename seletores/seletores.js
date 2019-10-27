"use strict";
var App = (function(app, d){
    var selecionadoTodosUsuarios = d.querySelector('#selecionar-todos');
    // converte um NodeList para uma array
    var usuarios = Array.prototype.slice.call(d.querySelectorAll('.js-checkbox'));

    selecionadoTodosUsuarios.addEventListener('click', function(){
        usuarios.forEach(i => i.checked = selecionadoTodosUsuarios.checked);
    });

    usuarios.forEach(i => i.addEventListener('click', checado));
    function checado(){
        // contar quantos estão selecionados
        var totalSelecionado = usuarios.filter(function(i){
            return i.checked;
        }).length;
        // preencher o geral
        selecionadoTodosUsuarios.checked = usuarios.length === totalSelecionado;
    }
    return app;
}(App || {}, document));