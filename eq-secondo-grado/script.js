const aInput = document.getElementById("a")
const bInput = document.getElementById("b")
const cInput = document.getElementById("c")
const btnCalcola = document.getElementById("btn-Calola")


btnCalcola.addEventListener("click", () => {
    let a = parseFloat(aInput.value)
    let b = parseFloat(bInput.value)
    let c = parseFloat(cInput.value)
    let delta = b**2 - (4 * a * c)
    let ris1 = ( -b -Math.sqrt(delta)) / (2 * a)
    let ris2 = ( -b +Math.sqrt(delta)) / (2 * a)
    

    if(delta >= 0){
        document.getElementById("soluzione1").textContent = "x1 = " + ris1;
        document.getElementById("soluzione2").textContent = "x2 = " + ris2;
    } else if(delta < 0) {
        document.getElementById("soluzione1").textContent = "non ci sono soluzioni"
    }
    
    
})
