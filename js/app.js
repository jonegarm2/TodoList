todo = document.getElementById("todo")



document.getElementById("check").addEventListener("click", click);



function click() {
    list = document.getElementsByTagName("input")[0].value;
    div = document.createElement("DIV")
    del = document.createElement("BUTTON")
    del.innerHTML = "Complete";
    div.innerHTML = list;
    todo.appendChild(div);
    // document.getElementsByTagName("input")
    div.appendChild(del);
    
    del.addEventListener("click", destroy);
    function destroy(event) {
        console.log(event.target)
        event.target.parentNode.innerHTML= "";
    }
}

