name = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")
if(idade>=18) alert(`${name} vc já tem idade para tirar carteira de motorista.`)
else {
    x = 18 - idade
    alert(`${name} vc não idade para tirar carteira de motorista, vc ainda precisa esperar ${x}`)
}