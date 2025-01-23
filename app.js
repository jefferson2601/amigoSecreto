//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

// Função para adicionar amigo
document.getElementById('adicionar').addEventListener('click', function() {
    const nomeAmigo = document.getElementById('amigo').value; 
    if (nomeAmigo) {
        amigos.push(nomeAmigo);
        document.getElementById('listaAmigos').innerHTML += `<li>${nomeAmigo}</li>`;
        document.getElementById('amigo').value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, digite um nome.');
    }
});

// Função para sortear amigo secreto
document.getElementById('sortear').addEventListener('click', function() {
    if (amigos.length === 0) {
        alert('Adicione amigos antes de sortear!');
        return;
    }
document.getElementById('listaAmigos').style.display = 'none'; // Oculta a lista de amigos
const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').innerText = `Amigo Secreto: ${amigoSorteado}`;
});
