txtNota = document.getElementById("txtNota");
txtNota2 = document.getElementById("txtNota2");
btnResultado = document.getElementById("btnResultado");

btnResultado.addEventListener("click", calcularNota);


function calcularNota(){
    notaFinal = parseFloat(txtNota.value) + parseFloat(txtNota2.value);
    if(txtNota.value < 0 || txtNota2.value < 0 || txtNota.value > 50 || txtNota2.value > 50 ){
        if(notaFinal >= 60){
            alert("Aprovado");
        }else{
            alert(`Reprovado. Faltou ${60 - notaFinal} pontos`);
        }
    }
}