// This is a JavaScript file

$(document).on("click",".btn",function(){

var peso = $("#peso").val();
var altura = $("#altura").val();
var idade = $("#idade").val();
var sexo = $("#sexo").val();

  if(sexo != ""){
      if(sexo == "masculino"){
       $("#resultado").val(66+(13.7*peso)+(5.0 * altura)(6.8*idade));
  }
    else{
       $("#resultado").val(665 + (9.6 * peso) + (1.8*altura) - (4.7*idade));
  }

}
  else{
    alert("Informe seu sexo");
  }

});