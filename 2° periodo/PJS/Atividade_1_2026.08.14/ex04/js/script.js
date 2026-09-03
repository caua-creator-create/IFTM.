nota1 = parseInt(prompt("Informe a sua nota do primeiro bimestre:"))
nota2 = parseInt(prompt("Informe a sua nota do segunda bimestre:"))

x =(nota1 + nota2)

if(x>=60) alert("Você já passou de ano!")

else{
    y =(60 - x)
    alert(`Você não passou de ano! Ainda falta ${y} pontos para você passar`)
}