function getCart() { const cart = localStorage.getItem('cart'); return cart ? JSON.parse(cart) : []; }
function saveCart(cart) { localStorage.setItem('cart', JSON.stringify(cart)); updateCartCounter(); }
function addToCart(item) {
    const cart = getCart();
    const existing = cart.find(i => i.id === item.id);
    if (existing) { existing.quantity += 1; } else { cart.push({ ...item, quantity: 1 }); }
    saveCart(cart);
    alert(`✅ ${item.name} добавлен в корзину`);
}
function removeFromCart(itemId) { let cart = getCart(); cart = cart.filter(i => i.id !== itemId); saveCart(cart); if (window.location.pathname.includes('cart.html')) { location.reload(); } }
function updateCartCounter() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
    document.querySelectorAll('#cart-count').forEach(counter => { counter.textContent = totalItems; });
}
function updateQuantity(itemId, delta) {
    const cart = getCart();
    const item = cart.find(i => i.id === itemId);
    if (item) {
        const newQty = item.quantity + delta;
        if (newQty <= 0) { removeFromCart(itemId); } else { item.quantity = newQty; saveCart(cart); }
    }
    if (window.location.pathname.includes('cart.html')) { location.reload(); }
}
function clearCart() { localStorage.removeItem('cart'); updateCartCounter(); if (window.location.pathname.includes('cart.html')) { location.reload(); } }
updateCartCounter();