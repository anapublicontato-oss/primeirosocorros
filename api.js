// Carregar emergências via API
fetch("emergencias.json")
  .then((response) => response.json())
  .then((data) => {
    const lista = document.getElementById("lista-emergencias");

    data.emergencias.forEach((item) => {
      const card = document.createElement("div");
      card.className = "api-item";

      card.innerHTML = `
        <h4>${item.titulo}</h4>
        <div class="api-conteudo" style="display: none;">
            <p>${item.descricao}</p>
        </div>
      `;

      // Clique para abrir e fechar
      card.addEventListener("click", () => {
        const conteudo = card.querySelector(".api-conteudo");
        const isOpen = conteudo.style.display === "block";

        // Fecha todos antes de abrir outro
        document.querySelectorAll(".api-conteudo").forEach((box) => {
          box.style.display = "none";
        });

        // Alterna o clicado
        conteudo.style.display = isOpen ? "none" : "block";
      });

      lista.appendChild(card);
    });
  })
  .catch((err) => console.error("Erro na API:", err));

  // Carregar emergências via API
fetch("emergencias.json")
  .then((response) => response.json())
  .then((data) => {
    const lista = document.getElementById("lista-emergencias");

    data.emergencias.forEach((item) => {
      const card = document.createElement("div");
      card.className = "api-item";

      card.innerHTML = `
        <h4>${item.titulo}</h4>
        <div class="api-conteudo" style="display: none;">
            <p>${item.descricao}</p>
        </div>
      `;

      // Clique para abrir/fechar
      card.addEventListener("click", () => {
        const conteudo = card.querySelector(".api-conteudo");
        const aberto = conteudo.style.display === "block";

        // Fecha todos antes
        document.querySelectorAll(".api-conteudo").forEach((el) => {
          el.style.display = "none";
        });

        // Reabre só se estava fechado
        if (!aberto) conteudo.style.display = "block";
      });

      lista.appendChild(card);
    });
  })
  .catch((err) => console.error("Erro na API:", err));

