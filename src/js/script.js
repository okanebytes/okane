document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.querySelector('.menu-toggle');
            const mobileMenu = document.querySelector('.mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');
            
            // Função para abrir/fechar o menu
            menuToggle.addEventListener('click', function() {
                this.classList.toggle('active');
                mobileMenu.classList.toggle('active');
            });
            
            // Fechar o menu quando um link for clicado
            mobileLinks.forEach(link => {
                link.addEventListener('click', function() {
                    menuToggle.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    
                    // Rolagem suave para a seção
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('video');
    
    // Tenta reproduzir o vídeo
    const playPromise = video.play();
    
    // Se houver erro, mostra no console
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.error("Erro ao reproduzir vídeo:", error);
            // Mostra um botão para reprodução manual
            const playButton = document.createElement('button');
            playButton.textContent = 'Reproduzir Vídeo';
            playButton.style.position = 'absolute';
            playButton.style.top = '50%';
            playButton.style.left = '50%';
            playButton.style.transform = 'translate(-50%, -50%)';
            playButton.style.padding = '10px 20px';
            playButton.style.zIndex = '10';
            playButton.addEventListener('click', () => video.play());
            video.parentElement.appendChild(playButton);
        });
    }
});