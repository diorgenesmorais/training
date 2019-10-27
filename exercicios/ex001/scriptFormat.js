"use strict";
var App = App || {};

App.Format = (function(){
    function Format(){
        this.input = document.createElement('input');
        
        this.preco = document.querySelector('#preco');
        this.resultado = document.querySelector('#res');
        document.querySelector('#btn').addEventListener('click', exibir.bind(this));
    }

    function exibir(){
        this.input.setAttribute('value', this.preco.value);
        this.resultado.appendChild(this.input);
    }

    return Format;
})();

new App.Format();