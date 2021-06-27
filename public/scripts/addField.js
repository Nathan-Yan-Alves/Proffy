// Procurar o botao
document.querySelector("#add-time").addEventListener("click", cloneField)
// Quando clicar no botão

// Executar uma ação
function cloneField() {

    // Duplicar os campos. Que campos?
    const clone_field = document.querySelector(".schedule-item").cloneNode(true) // Boolean -> true or false

    // Limpar os campos. Que campos?
    const fields = clone_field.querySelectorAll('input')
    
    for(var i = 0; i < fields.length; i++) {
        fields[i].value = ""
    }

    // Colocar na página. Coloca onde? 
    document.querySelector("#schedule-items").appendChild(clone_field)
}


