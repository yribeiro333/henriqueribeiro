// script.js
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove classe ativa de todos os botões
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona classe ativa ao botão clicado
            button.classList.add('active');
            
            // Esconde todos os conteúdos
            contents.forEach(content => content.classList.remove('show'));
            // Mostra o conteúdo correspondente
            const contentId = button.getAttribute('data-content-id');
            document.getElementById(contentId).classList.add('show');
        });
    });
});
