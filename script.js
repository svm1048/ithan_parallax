document.addEventListener('DOMContentLoaded', () => {
    function setActive(event, page) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
    }
});

