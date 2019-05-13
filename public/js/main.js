import $ from 'jquery';
import BFunction from './Classes/BFunction.js';
// import MDSeason from './Classes/MDSeason.js';

$(document).ready(function(){

  $('button[name="calculate"]').on("click",function(){
    var fun = $('input[name="function"]').val();
    var objFun = new BFunction(fun);
  });


  //Limpiar todos los imputs y clacular
  $('button[name="clear"]').on("click",function(){
    var inputs = $('input[type="number"]:enabled');
    $.each(inputs, function(key, value){
      $(value).val('0');
    });
    season.calculate(false);
  });

  // //Random de numeros
  // $(':button[name="random"]').on('click', function(){
  //   var limit = 5;
  //   var inputs = $(':input[type="number"]:enabled');
  //   $.each(inputs, function(key,value){
  //     var rand = Math.floor(Math.random()*limit);
  //     $(value).val(rand);
  //   });
  //   season.calculate(true);
  // });

});
