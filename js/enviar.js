function enviar_mensagem () {

	var nome = document.getElementById("txtNome").value;
	var email = document.getElementById("txtEmail").value;
	var mensagem = document.getElementById("txtMensagem").value;
	
	if (nome != "" && email != "" && mensagem != "") {
		alert("Sua mensagem foi enviada com sucesso, em breve entraremos em contato.");
	}

	else {
		alert("Por favor, verifique se está preenchendo o formulário corretamente.");
	}
}