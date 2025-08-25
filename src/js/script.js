// ========== MENU MOBILE ==========
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}

// ========== ACORDEÃO ==========
document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const panel = trigger.nextElementSibling;
        const isOpen = panel.classList.contains('open');

        // Fecha todos
        document.querySelectorAll('.accordion-panel').forEach(p => p.classList.remove('open'));
        document.querySelectorAll('.accordion-trigger').forEach(t => t.classList.remove('active'));

        // Abre só o clicado
        if (!isOpen) {
            panel.classList.add('open');
            trigger.classList.add('active');
        }
    });
});
