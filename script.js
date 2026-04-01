document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active das classes de navegação
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        // Pega o ID da seção
        const targetId = this.getAttribute('href').replace('#', '');

        // Esconde todas as seções e mostra apenas a selecionada
        document.querySelectorAll('.tab-content').forEach(section => {
            section.classList.remove('active');
            if (section.id === targetId) {
                section.classList.add('active');
            }
        });

        // Scroll suave para o topo da seção
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
