document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    if (navToggle && navList) {
        navToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    }
    const today = new Date().toISOString().split('T')[0];
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => { if (!input.value) { input.min = today; } });
});