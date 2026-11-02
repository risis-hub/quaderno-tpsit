// TODO:
// 1. Al click su "Aggiungi" (o premendo Invio) aggiungi un elemento alla lista
//    con il testo inserito nell'input.
// 2. Ogni elemento deve avere un bottone "Rimuovi" che lo elimina dalla lista.
// 3. Se l'input è vuoto, mostra un messaggio di errore e non aggiungere nulla.
// 4. (Bonus) Al click sul testo dell'elemento, barralo come "fatto".

const lista = document.getElementById("lista")
const item = document.getElementById("item")
const btnAggiungi = document.getElementById("btn-aggiungi")

btnAggiungi.addEventListener("click", () => {
    const singleItem = document.createElement("li")
    let deleteButton = document.createElement("button")
    let doneButton = document.createElement("button")

    deleteButton.textContent = "x"
    doneButton.textContent = "F"
    singleItem.textContent = item.value;
    singleItem.className = "container"
    
    deleteButton.addEventListener("click", () => {
        lista.removeChild(singleItem)
    })

    doneButton.addEventListener("click", () => {
        
    })

    if(item.value == ""){
        alert("sei un down")
    } else {
        lista.appendChild(singleItem)
        singleItem.appendChild(doneButton)
        singleItem.appendChild(deleteButton)
        item.value = ""
    }
    
})

