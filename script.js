// Elemento onde o conteúdo será injetado
const content = document.getElementById('content');

// Funções de renderização para cada seção
function renderHome() {
    document.body.className = "home-bg";
    content.innerHTML = `
      <section class="section">
        <div class="home-layout">
          <div class="main-texto">
            <h2>Bem-vindo a nossa Campanha</h2>
            <p>
              Explore os personagens, as cidades e as histórias vividas por este grupo de amigos dentro de um quarto mágico.
            </p>
          </div>
  
          <aside class="raridades">
            <h3>Itens Raros Descobertos</h3>
            <div class="carrossel">
                <div class="item-info">
                    <p id="item-desc">Espada Elemental</p>
                    <p id="item-details">Confccionada por magos eremitas possui uma lâmina feita com um grande cristal mágico. A magia é ativada com uma palavra de comando ou gesto específico de seu portador. Surge uma criatura elemental para lutar ao lado do portador.</p>
                </div>

                <div class="item-container">
                    
                    <img id="item-img" src="assets/Itens/ID.jpg" alt="Espada Elemental">
                    <div class="carrossel-nav">
                        <button class="nav-btn" id="prev-btn">⬅</button>
                        <button class="nav-btn" id="next-btn">➡</button>
                    </div>
                </div>
            </div>
          </aside>
        </div>
      </section>
    `;
  
    // Lógica do carrossel
    const itensRaros = [
      {
        imagem: 'assets/Itens/ID2.jpg',
        descricao: 'Escudo Animado',
        detalhes: 'Esse escudo possui vida própria e personalidade. É quase indestrutível e aumenta consideravelmetne a defesa do portador. Alerta o portador sobre inimigos quando está na suas costas. Contudo, é um verdadeiro tagarela, prejudicando em situações de furtividade.',
      },

      {
        imagem: 'assets/Itens/ID3.jpg',
        descricao: 'Bússola dos Desejos ',
        detalhes: 'Criada por goblins artífices possui quatro máscaras onde deveriam estar os pontos cardeias. Ela consegue "ler" o que você quer naquele momento. Se você está com sede, ela mostrará onde tem água. Ela sente o que você quer na sua alma, e não o que quer encontrar.',
      },
      {
        imagem: 'assets/Itens/ID4.jpg',
        descricao: 'Anel Astral ',
        detalhes: 'Permite a seu portador mudar sua forma física, tornando-o intangível. O portador assume a forma astral, podendo atravessar corpos e paredes. O portador pode abrir um portal para o plano astral. Usado incorretamente o levará a loucura.',
      },
      {
        imagem: 'assets/Itens/ID.jpg',
        descricao: 'Espada Elemental',
        detalhes: 'Confccionada por magos eremitas possui uma lâmina feita com um grande cristal mágico. A magia é ativada com uma palavra de comando ou gesto específico de seu portador. Surge uma criatura elemental para lutar ao lado do portador',
      },
    ];
  
    const imgEl = document.getElementById("item-img");
    const descEl = document.getElementById("item-desc");
    const detailsEl = document.getElementById("item-details"); // novo!
    let indexItem = 0; // Inicializa o índice do item atual
    
    function renderItem() {
      imgEl.style.opacity = 0;
      descEl.style.opacity = 0;
      detailsEl.style.opacity = 0;
    
      setTimeout(() => {
        const item = itensRaros[indexItem];
        imgEl.src = item.imagem;
        imgEl.alt = item.descricao;
        descEl.textContent = item.descricao;
        detailsEl.textContent = item.detalhes;
    
        imgEl.style.opacity = 1;
        descEl.style.opacity = 1;
        detailsEl.style.opacity = 1;
      }, 300);
    }
    
//   BOTÕES DO CARROSEL
    document.getElementById("prev-btn").addEventListener("click", () => {
      indexItem = (indexItem - 1 + itensRaros.length) % itensRaros.length;
      renderItem();
    });
  
    document.getElementById("next-btn").addEventListener("click", () => {
      indexItem = (indexItem + 1) % itensRaros.length;
      renderItem();
    });
  

  }
  
//   PAGINA DOS PERSONAGENS
function renderPersonagens() {
  let html = `
    <section class="section-personagens">
      <div class="personagens-grid">
  `;
  
  personagens.forEach(p => {
    html += `
      <div class="personagem">
        <div class="personagem-layout">
          <div class="imagem"><img src="${p.imagem}" alt="${p.nome}" /></div>
          <div class="info">
            <h3>${p.nome}</h3>
            <p><strong>Raça:</strong> ${p.raca}</p>
            <p><strong>Classe:</strong> ${p.classe}</p>
            <p><strong>Level:</strong> ${p.level}</p>
          </div>
        </div>
      </div>
    `;
  });

  html += `
      </div>
    </section>
  `;
  content.innerHTML = html;
}

// PAGINA DAS CIDADES
function renderCidades() {
    let html = `<section class="section-cidades">
    <div class="cidades-grid">`;

    cidades.forEach(c => {
      html += `
        <div class="cidade">
          <div class="cidade-layout">
            <div class="info">
              <h3>${c.nome}</h3>
              <p>${c.descricao}</p>
            </div>
            ${c.imagem ? `<div class="imagem"><img src="${c.imagem}" alt="${c.nome}" onclick="abrirModal(this)" /></div>` : ''}
          </div>
        </div>
      `;
    });

      // Adiciona o modal no final do HTML
  html += `
  </section>`;

  content.innerHTML = html;
}


// PÁGINA DOS MONSTROS
function renderMonstros() {
    document.body.className = "monstros-bg"; // Aplica a classe de background
    let html = `<section class="section monstros-box"><h2>Grimório</h2><div class="monstros-grid">`;

    monstros.forEach(monstro => {
        html += `
            <div class="monstro-card">
                <div class="monstro-layout">
                    <div class="monstro-info">
                        <h3>${monstro.nome}</h3>
                        <p><strong>Classe:</strong> ${monstro.classe}</p>
                        <p><strong>Descrição:</strong> ${monstro.descricao}</p>
                        <p><strong>Fraquezas:</strong> ${monstro.fraqueza}</p>
                    </div>
                    ${monstro.imagem ? `<div class="monstro-img"><img src="${monstro.imagem}" alt="${monstro.nome}" /></div>` : ''}
                </div>
            </div>
        `;
    });

    html += `</div></section>`;
    document.getElementById('content').innerHTML = html;
}

// PÁGINA DE HISTORIAS
  function renderHistorias() {
    document.body.className = "historia-bg";
    let html = `<section class="section historias-box">`;
    historias.forEach(h => {
      html += `
        <div class="historia-layout">
          <div class="texto">
            <h3>${h.titulo}</h3>
            <p><em>${h.data}</em></p>
            <p>${h.resumo}</p>
          </div>
          ${h.imagem ? `<div class="imagem"><img src="${h.imagem}" alt="${h.titulo}" /></div>` : ''}
        </div>
      `;
    });
    html += `</section>`;
    content.innerHTML = html;
  }

// Mapeamento de seções para funções
const sections = {
  home: renderHome,
  personagens: renderPersonagens,
  cidades: renderCidades,
  historias: renderHistorias,
  monstros: renderMonstros
};

// Navegação
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = link.dataset.section;
    if (sections[section]) {
      sections[section]();
    }
  });
});

// Carrega home ao iniciar
renderHome();
