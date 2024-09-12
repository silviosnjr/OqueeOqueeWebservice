const express = require('express');
const app = express();

// Lista de piadas "O que é, o que é?"
const piadas = [
  { pergunta: "O que é, o que é? Cai em pé e corre deitado?", resposta: "A chuva!" },
  { pergunta: "O que é, o que é? Tem cabeça, tem dente, tem barba, mas não é gente?", resposta: "O alho!" },
  { pergunta: "O que é, o que é? Anda com os pés na cabeça?", resposta: "O piolho!" },
  { pergunta: "O que é, o que é? Quanto mais se tira, maior fica?", resposta: "O buraco!" },
  { pergunta: "O que é, o que é? Tem no meio do ovo?", resposta: "A letra V!" }
];

// Endpoint para retornar uma piada aleatória
app.get('/api/piada', (req, res) => {
  const piadaAleatoria = piadas[Math.floor(Math.random() * piadas.length)];
  res.json(piadaAleatoria);
});

// Exporta o app para o Vercel usar
module.exports = app;
