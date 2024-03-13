function tarefa (nota){
  if (nota >= 7){
    console.log ("Passou de ano!");
  }
  else if (nota >= 4 && nota <7){
    console.log ("Recuperação.");
  }
  else {
    console.log ("Reprovado.");
  }
}

var resultado=tarefa(6)
console.log(resultado)