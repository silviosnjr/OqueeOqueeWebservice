const express = require('express');
const app = express();

// Lista de piadas "O que é, o que é?" com IDs
const piadas = [
    { id: 1, pergunta: "O que é, o que é? Cai em pé e corre deitado?", resposta: "A chuva!" },
    { id: 2, pergunta: "O que é, o que é? Tem cabeça, tem dente, tem barba, mas não é gente?", resposta: "O alho!" },
    { id: 3, pergunta: "O que é, o que é? Anda com os pés na cabeça?", resposta: "O piolho!" },
    { id: 4, pergunta: "O que é, o que é? Quanto mais se tira, maior fica?", resposta: "O buraco!" },
    { id: 5, pergunta: "O que é, o que é? Tem no meio do ovo?", resposta: "A letra V!" },
    { id: 6, pergunta: "O que é, o que é? Sobe, sobe e nunca desce?", resposta: "A idade!" },
    { id: 7, pergunta: "O que é, o que é? Tem coroa, mas não é rei, tem raiz, mas não é planta?", resposta: "O dente!" },
    { id: 8, pergunta: "O que é, o que é? Não tem pernas, mas consegue correr?", resposta: "A água!" },
    { id: 9, pergunta: "O que é, o que é? Quanto mais cresce, mais baixo fica?", resposta: "O rabo do cavalo!" },
    { id: 10, pergunta: "O que é, o que é? Tem muitos dentes, mas não morde?", resposta: "O pente!" },
    { id: 11, pergunta: "O que é, o que é? Anda deitado e dorme em pé?", resposta: "O sapato!" },
    { id: 12, pergunta: "O que é, o que é? Tem asa, mas não voa?", resposta: "A xícara!" },
    { id: 13, pergunta: "O que é, o que é? Fica cheio de boca pra baixo e vazio de boca pra cima?", resposta: "O chapéu!" },
    { id: 14, pergunta: "O que é, o que é? Morre de pé?", resposta: "A vela!" },
    { id: 15, pergunta: "O que é, o que é? Tem orelha, mas não ouve?", resposta: "O vaso!" },
    { id: 16, pergunta: "O que é, o que é? Corre, mas não tem pernas?", resposta: "O rio!" },
    { id: 17, pergunta: "O que é, o que é? Quanto maior, menos se vê?", resposta: "A escuridão!" },
    { id: 18, pergunta: "O que é, o que é? É grande antes de ser pequeno?", resposta: "O pepino!" },
    { id: 19, pergunta: "O que é, o que é? Vive na água, mas morre se for na água?", resposta: "O sal!" },
    { id: 20, pergunta: "O que é, o que é? Tem olhos, mas não vê?", resposta: "A agulha!" },
    { id: 21, pergunta: "O que é, o que é? Não é planta, mas tem folhas?", resposta: "O livro!" },
    { id: 22, pergunta: "O que é, o que é? Está no meio do caminho?", resposta: "A letra 'H'!" },
    { id: 23, pergunta: "O que é, o que é? Quanto mais quente, mais fresco?", resposta: "O pão!" },
    { id: 24, pergunta: "O que é, o que é? O mundo tem, mas é de ninguém?", resposta: "O sol!" },
    { id: 25, pergunta: "O que é, o que é? Não é minha, mas todo mundo usa?", resposta: "O nome!" },
    { id: 26, pergunta: "O que é, o que é? Está sempre no prato e nunca é comido?", resposta: "O talher!" },
    { id: 27, pergunta: "O que é, o que é? Que se deita e se levanta ao mesmo tempo?", resposta: "A onda!" },
    { id: 28, pergunta: "O que é, o que é? É surdo e mudo, mas conta tudo?", resposta: "O livro!" },
    { id: 29, pergunta: "O que é, o que é? O céu é seu limite?", resposta: "O balão!" },
    { id: 30, pergunta: "O que é, o que é? Vive no campo e fala como gente?", resposta: "O papagaio!" },
    { id: 31, pergunta: "O que é, o que é? Vai até a Lua sem sair do lugar?", resposta: "A imaginação!" },
    { id: 32, pergunta: "O que é, o que é? Nunca volta, mas sempre vai?", resposta: "O tempo!" },
    { id: 33, pergunta: "O que é, o que é? O que fica maior quanto mais se tira?", resposta: "O buraco!" },
    { id: 34, pergunta: "O que é, o que é? Está na ponta da língua, mas nunca sai?", resposta: "A palavra não dita!" },
    { id: 35, pergunta: "O que é, o que é? Não tem olhos, mas pode fazer você chorar?", resposta: "A cebola!" },
    { id: 36, pergunta: "O que é, o que é? Tem chaves, mas não abre portas?", resposta: "O piano!" },
    { id: 37, pergunta: "O que é, o que é? Tem pés, mas não anda?", resposta: "A cama!" },
    { id: 38, pergunta: "O que é, o que é? Bebe água pelo pé?", resposta: "A árvore!" },
    { id: 39, pergunta: "O que é, o que é? Tem asa e voa, mas não é pássaro?", resposta: "O avião!" },
    { id: 40, pergunta: "O que é, o que é? Não tem boca, mas fala?", resposta: "O eco!" },
    { id: 41, pergunta: "O que é, o que é? Se você quebra, fica melhor?", resposta: "O ovo!" },
    { id: 42, pergunta: "O que é, o que é? Quanto mais leve, mais difícil de segurar?", resposta: "O sopro!" },
    { id: 43, pergunta: "O que é, o que é? Fica no fim do fim?", resposta: "A letra M!" },
    { id: 44, pergunta: "O que é, o que é? Tem folhas, mas não é árvore?", resposta: "O caderno!" },
    { id: 45, pergunta: "O que é, o que é? Sempre está a caminho, mas nunca chega?", resposta: "O amanhã!" },
    { id: 46, pergunta: "O que é, o que é? Dá muitas voltas, mas nunca sai do lugar?", resposta: "O relógio!" },
    { id: 47, pergunta: "O que é, o que é? Fica mais pesado quando seca?", resposta: "A toalha!" },
    { id: 48, pergunta: "O que é, o que é? Corta na carne, mas não faz sangrar?", resposta: "A faca cega!" },
    { id: 49, pergunta: "O que é, o que é? Está na água, mas não se afoga?", resposta: "O gelo!" },
    { id: 50, pergunta: "O que é, o que é? Tem um chapéu, mas não é humano?", resposta: "O cogumelo!" },
    { id: 51, pergunta: "O que é, o que é? Faz você rir, mas não tem graça?", resposta: "O espelho!" },
    { id: 52, pergunta: "O que é, o que é? Tem pés, mas nunca sai do lugar?", resposta: "A mesa!" },
    { id: 53, pergunta: "O que é, o que é? Tem boca, mas não come?", resposta: "O rio!" },
    { id: 54, pergunta: "O que é, o que é? Quanto mais tem, menos se vê?", resposta: "A neblina!" },
    { id: 55, pergunta: "O que é, o que é? Corre e não se cansa?", resposta: "O rio!" }
];

// Endpoint para retornar uma pergunta de piada aleatória
app.get('/api/piada', (req, res) => {
  const piadaAleatoria = piadas[Math.floor(Math.random() * piadas.length)];
  res.json({ id: piadaAleatoria.id, pergunta: piadaAleatoria.pergunta });
});

// Endpoint para retornar a resposta da piada com base no ID
app.get('/api/piada/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const piada = piadas.find(p => p.id === id);
  
  if (piada) {
    res.json({ resposta: piada.resposta });
  } else {
    res.status(404).json({ error: "Piada não encontrada" });
  }
});

// Exporta o app para o Vercel usar
module.exports = app;
