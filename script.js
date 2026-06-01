// ========================================
// CODEAPRENDE - JAVASCRIPT GLOBAL
// ========================================

// MENU HAMBÚRGUER
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.querySelector('.hamburger').classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.querySelector('.hamburger')?.classList.remove('active');
        }
    });
}

// VALIDAÇÃO DE FORMULÁRIO
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Por favor, insira um e-mail válido!');
            return;
        }
        
        alert(`Obrigado, ${name}! Sua mensagem foi enviada. Respondemos em até 24h!`);
        contactForm.reset();
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// HEADER SHAADOW AO SCROLL
const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', () => {
        header.style.boxShadow = window.scrollY > 100 
            ? '0 4px 12px rgba(0,0,0,0.15)' 
            : '0 4px 6px rgba(0,0,0,0.1)';
    });
}

console.log('🚀 CodeAprende carregado! Vamos aprender front-end!');