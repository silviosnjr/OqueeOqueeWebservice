const express = require('express');
const app = express();

// Lista de piadas "O que é, o que é?" com IDs
const piadas = [
  { id: 1, pergunta: "O que é, o que é? Cai em pé e corre deitado?", resposta: "A chuva!" },
  { id: 2, pergunta: "O que é, o que é? Tem cabeça, tem dente, tem barba, mas não é gente?", resposta: "O alho!" },
  { id: 3, pergunta: "O que é, o que é? Anda com os pés na cabeça?", resposta: "O piolho!" },
  { id: 4, pergunta: "O que é, o que é? Quanto mais se tira, maior fica?", resposta: "O buraco!" },
  { id: 5, pergunta: "O que é, o que é? Tem no meio do ovo?", resposta: "A letra V!" }
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
