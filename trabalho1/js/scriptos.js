function valida_form (){
if(document.getElementById("nome").value.length < 5){
alert('Por favor, preencha o campo nome');
document.getElementById("nome").focus();
return false
}
if(document.getElementById("phone").value.length < 10){
alert('Por favor, preencha o campo Telefone corretamente');
document.getElementById("phone").focus();
return false
}
if(document.getElementById("msg").value.length < 1){
alert('O campo mensagem não pode ficar vazio');
document.getElementById("msg").focus();
return false
}
}
