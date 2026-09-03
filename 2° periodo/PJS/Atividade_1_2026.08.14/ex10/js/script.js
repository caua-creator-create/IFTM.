let x;
let nome;

x = Number(prompt("Digite um número inteiro maior que zero:"));

if (x > 0 && Number.isInteger(x)) {

    nome = prompt("Digite seu nome completo:");

    for (let i = 1; i <= x; i++) {
        document.write(nome + "<br>");
    }

} else {
    alert("Digite um número inteiro maior que zero!");
}