pag = document.getElementById("paragrafo");

pag.addEventListener("click",mudarCor);
pag.addEventListener("mouseout",restaurarCor);

function mudarCor(){
    pag.style.color="red";
}

function restaurarCor(){
    pag.style.color="";
}