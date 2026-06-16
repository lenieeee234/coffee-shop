document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    if (!name) { alert('Введите ваше имя'); return; }
    if (!email || !email.includes('@') || !email.includes('.')) { alert('Введите корректный email'); return; }
    if (!message) { alert('Введите сообщение'); return; }
    const messages = JSON.parse(localStorage.getItem('contact_messages')) || [];
    messages.push({ id: Date.now(), name, email, message });
    localStorage.setItem('contact_messages', JSON.stringify(messages));
    alert('💌 Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
    this.reset();
});