document.getElementById('booking-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('booking-name').value.trim();
    const phone = document.getElementById('booking-phone').value.trim();
    const date = document.getElementById('booking-date').value;
    const time = document.getElementById('booking-time').value;
    const guests = parseInt(document.getElementById('booking-guests').value);
    if (!name || name.length < 2) { alert('Введите корректное имя (минимум 2 символа)'); return; }
    const phoneRegex = /^(\+7|8|7)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    if (!phoneRegex.test(phone)) { alert('Введите корректный номер телефона'); return; }
    if (!date) { alert('Выберите дату'); return; }
    const selectedDate = new Date(date); const today = new Date(); today.setHours(0,0,0,0);
    if (selectedDate < today) { alert('Нельзя выбрать прошедшую дату'); return; }
    if (!time) { alert('Выберите время'); return; }
    if (isNaN(guests) || guests < 1 || guests > 20) { alert('Количество гостей должно быть от 1 до 20'); return; }
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push({ id: Date.now(), name, phone, date, time, guests, comment: document.getElementById('booking-comment')?.value || '' });
    localStorage.setItem('bookings', JSON.stringify(bookings));
    alert(`🎉 ${name}, спасибо! Ваше бронирование на ${date} в ${time} подтверждено. Ждём вас!`);
    this.reset();
});

document.getElementById('quick-booking-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('quick-name').value.trim();
    const phone = document.getElementById('quick-phone').value.trim();
    const date = document.getElementById('quick-date').value;
    const time = document.getElementById('quick-time').value;
    const guests = parseInt(document.getElementById('quick-guests').value);
    if (!name || name.length < 2) { alert('Введите имя'); return; }
    if (!phone) { alert('Введите телефон'); return; }
    if (!date) { alert('Выберите дату'); return; }
    if (!time) { alert('Выберите время'); return; }
    if (isNaN(guests) || guests < 1) { alert('Корректное количество гостей'); return; }
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push({ id: Date.now(), name, phone, date, time, guests, comment: '' });
    localStorage.setItem('bookings', JSON.stringify(bookings));
    alert(`✅ ${name}, столик забронирован!`);
    this.reset();
});