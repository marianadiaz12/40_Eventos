function newElement() {
    var li = document.createElement("li");
    var textValue = document.getElementById("tarea").value;
    var t = document.createTextNode(textValue);
    li.appendChild(t);
    if (textValue === '') {
        alert("No puedes agregar una tarea vacia");
    } else {
        document.getElementById("lista").appendChild(li);
    }
    document.getElementById("tarea").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    var close = document.getElementsByClassName("close");
    var i;
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            }
        }

    var list = document.querySelector('ul');// El check subrayado
    list.addEventListener('click', function(ev)  {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        }
    }, false);
}
