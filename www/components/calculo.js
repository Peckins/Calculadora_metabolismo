// This is a JavaScript file

//Verificando o sexo

document.getElementsByName("input").value = null;//Limpa todos os input pela primeira vez

$(document).on("click", "#calcular", function(){

  var taxaAtividade = $("#atividade").val();

  var sexo = $("#sexo").val();

    if (sexo != ""){

      $("#sexo").css("border-color", "transparent");

      if (taxaAtividade != ""){
        $("#atividade").css("border-color", "transparent");
        CalcularImb(sexo, taxaAtividade);
      }
      else{
        alert("Selecione o nível de atividade!");
        $("#atividade").css("border-color", "red");
      }

    }
    else{
      alert("Informe seu sexo");
      $("#sexo").css("border-color", "red");
    }

});

//Calculando o índice de acordo com o sexo
function CalcularImb(sexo, taxaAtividade){

  var peso = $("#peso").val();
  var altura = $("#altura").val();
  var idade = $("#idade").val();
  var result;

  if (sexo == "masculino"){
    result = taxaAtividade * (66 + ((13.7 * peso) + (5 * altura) - (6.8 * idade)));
  }
  else{
    result = taxaAtividade * (655 + ((9.6 * peso) + (1.8 * altura) - (4.7 * idade)));
  }

  $("#resultado").val(result.toString());
}

//Limpando o formulário
$(document).on("click", "#clear", function(){
  $(".form-control").val(null);
  $("select").css("border-color", "transparent");
});