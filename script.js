// ===== Controle de seções =====
function mostrarSecao(id, botao) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("ativo"));
  document.getElementById(id).classList.add("ativo");
  document.querySelectorAll("nav button").forEach(b => b.classList.remove("ativo"));
  botao.classList.add("ativo");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== Instruções =====
const instrucoes = {
  desmaio: `<h3>😵 Desmaio</h3><ul>
    <li>Deite a pessoa de costas e eleve suas pernas.</li>
    <li>Afrouxe roupas apertadas e garanta ventilação.</li>
    <li>Não jogue água nem ofereça comida.</li>
    <li>Se não acordar em 1 minuto, chame o SAMU (192).</li>
  </ul>`,
  engasgo: `<h3>🤐 Engasgo</h3><ul>
    <li>Peça para tossir com força.</li>
    <li>Se não conseguir, aplique a manobra de Heimlich.</li>
    <li>Se desmaiar, inicie compressões torácicas e chame o SAMU.</li>
  </ul>`,
  queimadura: `<h3>🔥 Queimadura</h3><ul>
    <li>Lave com água corrente fria por 10 minutos.</li>
    <li>Não aplique pomadas, gelo ou pasta de dente.</li>
    <li>Cubra com um pano limpo e procure atendimento.</li>
  </ul>`,
  corte: `<h3>🩸 Corte</h3><ul>
    <li>Lave com água e sabão.</li>
    <li>Pressione com um pano limpo para estancar.</li>
    <li>Se persistir sangramento, procure um hospital.</li>
  </ul>`,
  parada: `<h3>❤️ Parada Cardíaca</h3><ul>
    <li>Verifique se há respiração.</li>
    <li>Chame o SAMU (192) imediatamente.</li>
    <li>Inicie compressões torácicas: 100 a 120 por minuto.</li>
  </ul>`,
  convulsao: `<h3>⚡ Convulsão</h3><ul>
    <li>Afaste objetos perigosos.</li>
    <li>Não coloque nada na boca da pessoa.</li>
    <li>Após cessar, deite-a de lado e chame ajuda médica.</li>
  </ul>`
};

function mostrarInstrucao(tipo) {
  const div = document.getElementById("instrucao");
  div.style.opacity = 0;
  setTimeout(() => {
    div.innerHTML = instrucoes[tipo];
    div.style.opacity = 1;
  }, 200);
}

// ===== Quiz =====
const perguntas = [
  { pergunta: "O que fazer primeiro em um caso de desmaio?", opcoes: ["Jogar água no rosto", "Deitar e elevar as pernas", "Dar comida"], correta: 1 },
  { pergunta: "O que NÃO se deve fazer em uma queimadura?", opcoes: ["Usar pomadas", "Lavar com água fria", "Cobrir com pano limpo"], correta: 0 },
  { pergunta: "Qual é o número do SAMU?", opcoes: ["190", "192", "193"], correta: 1 },
  { pergunta: "Em caso de engasgo, qual é a manobra indicada?", opcoes: ["Heimlich", "RCP", "Torniquete"], correta: 0 }
];

let indice = 0, pontuacao = 0;

function carregarPergunta() {
  const q = perguntas[indice];
  document.getElementById("pergunta").innerHTML = `<h3>${q.pergunta}</h3>`;
  document.getElementById("opcoes").innerHTML = q.opcoes
    .map((op, i) => `<button onclick="verificar(${i})">${op}</button>`).join("");
  document.getElementById("resultadoQuiz").textContent = "";
  atualizarBarra();
}

function verificar(opcao) {
  const correta = perguntas[indice].correta;
  const resultado = document.getElementById("resultadoQuiz");
  if (opcao === correta) {
    resultado.textContent = "✅ Correto!";
    resultado.style.color = "green";
    pontuacao++;
  } else {
    resultado.textContent = "❌ Errado!";
    resultado.style.color = "red";
  }
  document.querySelectorAll("#opcoes button").forEach(b => b.disabled = true);
}

function proximaPergunta() {
  indice++;
  if (indice >= perguntas.length) {
    document.getElementById("pergunta").innerHTML = "<h3>Quiz concluído! 🚑</h3>";
    document.getElementById("opcoes").innerHTML = "";
    document.getElementById("resultadoQuiz").textContent = "";
    document.getElementById("proxima").style.display = "none";
    document.getElementById("pontuacao").textContent = `Sua pontuação: ${pontuacao}/${perguntas.length}`;
  } else {
    carregarPergunta();
  }
}

function atualizarBarra() {
  const progresso = ((indice) / perguntas.length) * 100;
  document.getElementById("barraProgresso").style.width = `${progresso}%`;
}

carregarPergunta();

// ===== Tema Escuro =====
const botaoTema = document.getElementById("toggleTema");
botaoTema.onclick = () => {
  document.body.classList.toggle("dark");
  botaoTema.textContent = document.body.classList.contains("dark") ? "☀️ Modo Claro" : "🌙 Modo Escuro";
};

// Função para exibir as instruções da emergência selecionada
function mostrarInstrucao(emergencia) {
  const instrucaoBox = document.getElementById('instrucao');
  const titulo = document.getElementById('tituloInstrucao');
  const descricao = document.getElementById('descricaoInstrucao');

  instrucaoBox.style.display = 'block'; // Mostra a área de instruções

  // Exemplo de dados das instruções para cada emergência
  switch (emergencia) {
    case 'desmaio':
      titulo.textContent = 'Desmaio';
      descricao.textContent = 'Se uma pessoa desmaiar, deite-a de costas e eleve as pernas dela para ajudar na circulação sanguínea. Verifique a respiração e chame ajuda imediatamente.';
      break;
    case 'engasgo':
      titulo.textContent = 'Engasgo';
      descricao.textContent = 'Se alguém estiver engasgado, tente ajudá-lo a tossir. Se a pessoa não conseguir tossir, aplique a manobra de Heimlich até a obstrução ser desfeita.';
      break;
    case 'queimadura':
      titulo.textContent = 'Queimadura';
      descricao.textContent = 'Em caso de queimadura, resfrie a área com água corrente fria por pelo menos 10 minutos. Evite estourar bolhas e procure atendimento médico se necessário.';
      break;
    case 'corte':
      titulo.textContent = 'Corte';
      descricao.textContent = 'Se houver um corte, limpe a ferida com água e sabão, aplique uma gaze limpa e pressione para estancar o sangue. Se o sangramento não parar, procure ajuda médica.';
      break;
    case 'parada':
      titulo.textContent = 'Parada Cardíaca';
      descricao.textContent = 'Em caso de parada cardíaca, inicie a reanimação cardiopulmonar (RCP) imediatamente e chame o SAMU. Se possível, utilize um desfibrilador externo automático (DEA).';
      break;
    case 'convulsao':
      titulo.textContent = 'Convulsão';
      descricao.textContent = 'Durante uma convulsão, mantenha a pessoa segura, afastando objetos que possam machucar. Não tente segurar a pessoa, apenas proteja sua cabeça e procure ajuda médica.';
      break;
    default:
      titulo.textContent = 'Selecione uma emergência';
      descricao.textContent = 'Clique em um dos botões para ver as instruções sobre como agir em uma emergência.';
  }
}

