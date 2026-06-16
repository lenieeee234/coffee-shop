function renderCart() {
    const cart = getCart();
    const container = document.getElementById('cart-items');
    const totalContainer = document.getElementById('cart-total');
    if (!container) return;
    if (cart.length === 0) { container.innerHTML = '<p style="text-align:center; padding:40px;">Корзина пуста. Перейдите в <a href="menu.html">меню</a>.</p>'; totalContainer.innerHTML = ''; return; }
    let total = 0;
    container.innerHTML = cart.map(item => { const itemTotal = item.price * item.quantity; total += itemTotal; return `<div class="cart-item"><div class="cart-item-name">${item.name}</div><div class="cart-item-price">${item.price} ₽</div><div class="cart-item-quantity"><button onclick="updateQuantity(${item.id}, -1)">-</button><span>${item.quantity}</span><button onclick="updateQuantity(${item.id}, 1)">+</button></div><div class="cart-item-total">${itemTotal} ₽</div><button class="cart-item-remove" onclick="removeFromCart(${item.id})">Удалить</button></div>`; }).join('');
    totalContainer.innerHTML = `<h3>Итого: ${total} ₽</h3>`;
}
document.getElementById('checkout-btn')?.addEventListener('click', () => { const cart = getCart(); if (cart.length === 0) { alert('Корзина пуста'); return; } alert('📦 Заказ оформлен! Спасибо, что выбрали "Кофейную смесь"'); clearCart(); renderCart(); });
renderCart();