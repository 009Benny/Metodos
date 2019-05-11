import $ from 'jquery';
import MDSeason from './Classes/MDSeason.js';

$(document).ready(function(){
  var resultsSeason = "#table-rounds";
  var resultsDescend = "#table-results-descend";
  var season = initFunction();

  function initFunction(){
    if( $("#table-rounds").length ){
      season = new MDSeason(resultsSeason);
      season.calculate(false);
    }else if ($("#table-results-descend").length) {
      season = new MDSeason(resultsSeason);
    }
    return season;
  }

  //Limpiar todos los imputs y clacular
  $('button[name="clear"]').on("click",function(){
    var inputs = $('input[type="number"]:enabled');
    $.each(inputs, function(key, value){
      $(value).val('0');
    });
    season.calculate(false);
  });

  //Random de numeros
  $(':button[name="random"]').on('click', function(){
    var limit = 5;
    var inputs = $(':input[type="number"]:enabled');
    $.each(inputs, function(key,value){
      var rand = Math.floor(Math.random()*limit);
      $(value).val(rand);
    });
    season.calculate(true);
  });

});
