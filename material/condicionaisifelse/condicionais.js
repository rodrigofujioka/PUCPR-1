
function verificarMaioridade(idade){
  if(idade >= 18 ){
      return "Maior de idade"
  }else{
      return "Menor de idade"
  }   
}

function verificarAnoAtual(anoTeste){
      if(anoTeste==="2020"){  //experimente ==
          console.log("É ano atual");
      }else{
          console.log("Não é ano atual");
      }
}


var retorno = verificarMaioridade(18);
console.log(retorno);
retorno = verificarMaioridade(16);
console.log(retorno);

verificarAnoAtual("2020");
verificarAnoAtual(2020);
