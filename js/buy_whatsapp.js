function whatsapp_msg_buy() {

    // Formata a mensagem
    const message = `Olá, eu vim pelo site e gostaria de comprar um produto!`;
  
    // Codifica a mensagem para a URL
    const encodedMessage = encodeURIComponent(message);
  
    // Define o número de WhatsApp
    const whatsappNumber = "5551992794110";
  
    // Cria o link para o WhatsApp
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
    // Redireciona o usuário para o WhatsApp
    window.open(whatsappLink, '_blank');
  }