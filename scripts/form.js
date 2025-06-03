// When to send by Email
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
  
  // When you click on the WhatsApp button
  document.getElementById("enviarWhatsapp").addEventListener("click", function() {
    // Get values ​​from the form
    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telephone").value;
    const pais = document.getElementById("pais").value;
    const mensagem = document.getElementById("mensagem").value;
  
    // Check if all required fields are filled in
    if (!nome || !email || !telefone || !pais || !mensagem) {
      alert("Por favor, preencha todos os campos antes de enviar pelo WhatsApp.");
      return;
    }
  
    const mensagemWhatsapp = encodeURIComponent(
      `Nome: ${nome}\nEmail: ${email}\nPaís: ${pais}\nTelefone: ${telefone}\nMensagem: ${mensagem}`
    );
  
    const urlWhatsapp = `https://wa.me/5527996476519?text=${mensagemWhatsapp}`;
  
    // Open WhatsApp
    window.open(urlWhatsapp, '_blank');
    limparFormulario();
  });
  
  // Function to clear the form
  function limparFormulario() {
    document.getElementById("formContato").reset();
  }
  