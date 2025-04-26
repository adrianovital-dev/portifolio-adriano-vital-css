// Quando enviar por Email
document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault(); // Impede envio automático
  
    // Envia via EmailJS
    emailjs.sendForm('service_8nzwj9u', 'template_upu694g', this)
      .then(function(response) {
        console.log("Mensagem enviada por Email com sucesso!");
        limparFormulario();
      }, function(error) {
        console.error("Erro ao enviar mensagem por Email", error);
      });
  });
  
  // Quando clicar no botão WhatsApp
  document.getElementById("enviarWhatsapp").addEventListener("click", function() {
    // Pega os valores do formulário
    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telephone").value;
    const pais = document.getElementById("pais").value;
    const mensagem = document.getElementById("mensagem").value;
  
    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!nome || !email || !telefone || !pais || !mensagem) {
      alert("Por favor, preencha todos os campos antes de enviar pelo WhatsApp.");
      return;
    }
  
    const mensagemWhatsapp = encodeURIComponent(
      `Nome: ${nome}\nEmail: ${email}\nPaís: ${pais}\nTelefone: ${telefone}\nMensagem: ${mensagem}`
    );
  
    const urlWhatsapp = `https://wa.me/5527996476519?text=${mensagemWhatsapp}`;
  
    // Abre o WhatsApp
    window.open(urlWhatsapp, '_blank');
    limparFormulario();
  });
  
  // Função para limpar o formulário
  function limparFormulario() {
    document.getElementById("formContato").reset();
  }
  