var lista = document.getElementById("lista");
var inicioLista =document.getElementById("inli");
function newList() {
	var cajaLista = document.createElement("div");
    var inputTitulo = document.createElement("input");
    inputTitulo.setAttribute("placeholder", "Añadir Lista...");
    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("value", "Guardar");
    button.setAttribute("id", "guardar");
    button.setAttribute("class", "btn btn-success");
    inli.replaceChild(cajaLista, añadirLista);
    lista.appendChild(cajaLista);
    cajaLista.appendChild(inputTitulo);
    cajaLista.appendChild(button);
    button.appendChild(document.createTextNode("Guardar"));

    guardar.addEventListener("click", function(e){
	var textarea = document.createElement("textarea");
    textarea.setAttribute("placeholder", "Añadir Tarjeta...");
    textarea.setAttribute("class", "tarea");
    lista.appendChild(textarea);
    var button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("value", "Añadir");
    button.setAttribute("id", "añadir");
    button.setAttribute("class", "btn  btn-success");
    lista.appendChild(button);
	});
}
