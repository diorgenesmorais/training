"use strict";
var App = App || {};

App.Application = (function(){
    function Application(){
        this.img = document.createElement('img');
        this.img.setAttribute('id', 'foto');

        document.querySelector('#btn').addEventListener('click', verificar.bind(this));

        this.pessoa = (genero, idade) => {
            this.img.setAttribute('src', "images/" + genero + "-" + getFaixa(idade) + ".png");
        }
    }

    function getFaixa(idade){
        var faixa;
        if(idade >= 0 && idade <= 10){
            faixa = "crianca";
        } else if(idade < 21){
            faixa = "jovem";
        } else if(idade < 50){
            faixa = "adulta";
        } else {
            faixa = "idosa";
        }
        return faixa;
    }

    function verificar(){
        var anoAtual = new Date().getFullYear();
        //var fano = document.getElementById('ano').value;
        var fano = document.querySelector('#ano').value;
        
        if(fano.length == 0 || fano > anoAtual){
            alert("ERROR: Verifique os dados e tente novamente");
        } else {
            //var fsex = document.getElementsByName('radsex');
            // NOTA: querySelectorAll retorna um NodeList, p/ retornar um array (Array.from(NodeList))
            var fsex = document.querySelectorAll('input[name=radsex]');
            var res = document.querySelector('#resultado');
            
            var idade = anoAtual - Number(fano);
            var gênero = fsex[0].checked ? "homem" : "mulher";
            this.pessoa(gênero, idade);
            res.style.textAlign = 'center';
            res.innerHTML = `Detectamos o gênero: ${gênero} com ${idade} anos.` + '<br>';
            res.appendChild(this.img);
        }
    }
    
    return Application;
})();
new App.Application();