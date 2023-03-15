function gerarJogos() {
    const quantidade = document.getElementById("quantidade").value;
    const resultados = document.getElementById("resultados");
    
    let jogos = [];
    for (let i = 0; i < quantidade; i++) {
      let jogo = [];
      while (jogo.length < 6) {
        let numero = Math.floor(Math.random() * 60) + 1;
        if (!jogo.includes(numero)) {
          jogo.push(numero);
        }
      }
      jogos.push(jogo);
    }
    
    resultados.innerHTML = "";
    for (let jogo of jogos) {
      resultados.innerHTML += jogo.join(" ") + "<br>";
    }
  }
  