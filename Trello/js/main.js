function newList() {
    var input = document.createElement("input");
    input.setAttribute("placeholder", "Añadir Lista...");
    lista.appendChild(input);
    var button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("value", "Guardar");
    button.setAttribute("id", "guardar")
    lista.appendChild(button);
}

	guardar.addEventListener("click", function(e){
	var textarea = document.createElement("textarea");
    textarea.setAttribute("placeholder", "Añadir Tarjeta...");
    lista.appendChild(textarea);
    var button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("value", "Añadir");
    lista.appendChild(button);
	});



	