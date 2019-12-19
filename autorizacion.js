function verificar(){
	var usu = document.getElementById("usuario").value;

	if(document.getElementById("usuario").value==""){
		document.getElementById("mensaje").value="Debe escribir un nombre de usuario";
	}
	else if(usu == 'guess'){
		document.getElementById("mensaje").value = "usuario autorizado";
	}
	else if(usu == 'invitado'){
		document.getElementById("mensaje").value = "usuario autorizado";
	}
	else if(usu == 'usuario'){
		document.getElementById("mensaje").value = "usuario autorizado";
	}
	else{
		document.getElementById("mensaje").value = "usuario NO autorizado";
	}
}

function salir(){
	window.close();
}

function reiniciar(){
	document.getElementById("usuario").value="";
	document.getElementById("mensaje").value="";
}








