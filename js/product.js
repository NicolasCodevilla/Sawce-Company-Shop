const produtos = [
  {
    "nome": "Nike Air Force",
    "descricao": "Descrição do Produto 1",
    "foto": "./images/home/calça.png"
  },
  {
    "nome": "Produto 2",
    "descricao": "Descrição do Produto 2",
    "foto": "./images/home/moletom.png"
  },
  {
    "nome": "Produto 3",
    "descricao": "Descrição do Produto 3",
    "foto": "./images/home/relogio.png"
  }
];

// Função para adicionar os produtos ao slider
function adicionarProdutos() {
  const lista = document.getElementById('product-list');

  produtos.forEach(produto => {
    const li = document.createElement('li');
    li.classList.add('glide__slide', 'items_1');

    // Criar a estrutura do produto
    li.innerHTML = `
      <div class="produto">
        <img src="${produto.foto}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
      </div>
    `;

    // Adicionar o item à lista
    lista.appendChild(li);
  });
}

// Chamar a função para adicionar os produtos
adicionarProdutos();

// Inicializar o Glide.js
new Glide('.glide', {
  type: 'carousel',
  perView: 1,  // Um produto por vez visível
  focusAt: 'center', // Foca no produto central
  gap: 20,  // Espaço entre os produtos
  autoplay: 3000,
  breakpoints: {
    1200: {
      perView: 1,
    },
    900: {
      perView: 1,
    },
    600: {
      perView: 1,
    }
  }
}).mount();