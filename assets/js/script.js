document.querySelector('.navbar-mobile-button').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    mobileMenu.classList.toggle('active');
    overlay.style.display = mobileMenu.classList.contains('active') ? 'block' : 'none';
});
document.getElementById('mobileMenuOverlay').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('active');
    document.getElementById('mobileMenuOverlay').style.display = 'none';
});