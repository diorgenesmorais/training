"use strict";
var App = App || {};

App.Contagem = (function(){
    function Contagem(){
        this.inicio = document.querySelector('#inicio');

        document.querySelector('#btn').addEventListener('click', exibir.bind(this));
    }
    function exibir(){
        console.log(this.inicio.value);
        this.inicio.value = 500;
    }
    return Contagem;
})();
new App.Contagem();