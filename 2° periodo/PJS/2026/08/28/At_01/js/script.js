pag = document.getElementById("paragrafo");

pag.addEventListener("click",mudarCor);
pag.addEventListener("mouseout",restaurarCor);

function mudarCor(){
    pag.style.color="red";
    pag.style.backgroudColor="yellow";
}

function restaurarCor(){
    pag.style.color="";
    pag.style.backgroudColor="";
}