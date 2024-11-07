// Inicialização do EmailJS com a sua public key
(function () {
    emailjs.init('pbji9MHNdR_bq6nM5'); // Substitua com sua public key
})();

window.onload = function () {
    // Adicionando um listener para o envio do formulário
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();  // Previne o envio do formulário
        emailjs.sendForm('service_8rcpstq', 'template_436byyi', this)  // Envia o formulário via EmailJS
            .then((response) => {
                console.log('Mensagem enviada com sucesso!', response);
                alert("Sua mensagem foi enviada com sucesso!"); // Feedback para o usuário
            }, (error) => {
                console.error('Erro ao enviar a mensagem:', error);
                alert("Ocorreu um erro. Tente novamente."); // Feedback para o usuário
            });
    });
}
