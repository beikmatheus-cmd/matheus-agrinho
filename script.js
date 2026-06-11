// Menu mobile (futuro)
document.addEventListener('DOMContentLoaded', () => {
    console.log('%cSite carregado com sucesso! 🚀', 'color: #667eea; font-size: 16px;');

    // Formulário de contato
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✅ Mensagem enviada com sucesso! (Simulação)');
            form.reset();
        });
    }

    // Smooth scroll para links da navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
