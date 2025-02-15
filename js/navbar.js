
  // Adiciona um evento de rolagem
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) {  // Ajuste o valor conforme necessário
      navbar.classList.add('bg-dark');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('bg-dark');
    }
  });
