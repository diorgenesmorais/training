"use strict";
var a = {name: 'Diorgenes'}

var App = (function(){
    function App(...obj){
        this.obj = obj;
        this.obj.name = "Laudeci";
    }
    function exibir(){
        return this.obj;
    }
    return App;
})();
var b = new App(a);
console.log(a);
console.log(b);